# Module 2 Project: Personal Finance Tracker

## 🎯 Project Overview

Build a comprehensive personal finance tracking application that demonstrates all the concepts from Module 2: Data Structures. This project will help you manage income, expenses, and financial goals while practicing tuples, sets, dictionaries, functions, and file handling.

## 🚀 Project Requirements

### Core Features
1. **Income/Expense Tracking** - Record and categorize transactions
2. **Budget Management** - Set and monitor budgets by category
3. **Financial Goals** - Track savings goals and progress
4. **Data Persistence** - Save/load data from files
5. **Reporting** - Generate financial summaries and reports

### Technical Requirements
- Use **tuples** for immutable transaction records
- Use **sets** for category management and data validation
- Use **dictionaries** for organizing financial data
- Implement **advanced functions** with decorators and type hints
- Handle **file I/O** for data persistence (JSON/CSV)

## 📁 Project Structure

```
finance_tracker/
├── main.py                 # Main application entry point
├── models/
│   ├── __init__.py
│   ├── transaction.py      # Transaction data model
│   ├── budget.py          # Budget management
│   └── goal.py            # Financial goals
├── utils/
│   ├── __init__.py
│   ├── file_handler.py    # File I/O operations
│   ├── validators.py      # Input validation
│   └── decorators.py      # Custom decorators
├── data/
│   ├── transactions.json  # Transaction data
│   ├── budgets.json      # Budget data
│   └── goals.json        # Goals data
└── reports/
    └── monthly_report.json # Generated reports
```

## 🔧 Implementation Guide

### Step 1: Core Data Models

**models/transaction.py**
```python
from typing import NamedTuple, Optional
from datetime import datetime
from enum import Enum

class TransactionType(Enum):
    INCOME = "income"
    EXPENSE = "expense"

class Transaction(NamedTuple):
    """Immutable transaction record using NamedTuple"""
    id: str
    date: datetime
    amount: float
    category: str
    description: str
    transaction_type: TransactionType
    
    def to_dict(self) -> dict:
        """Convert to dictionary for JSON serialization"""
        return {
            'id': self.id,
            'date': self.date.isoformat(),
            'amount': self.amount,
            'category': self.category,
            'description': self.description,
            'transaction_type': self.transaction_type.value
        }
    
    @classmethod
    def from_dict(cls, data: dict) -> 'Transaction':
        """Create Transaction from dictionary"""
        return cls(
            id=data['id'],
            date=datetime.fromisoformat(data['date']),
            amount=data['amount'],
            category=data['category'],
            description=data['description'],
            transaction_type=TransactionType(data['transaction_type'])
        )
```

**models/budget.py**
```python
from typing import Dict, Set
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Budget:
    """Budget tracking for categories"""
    category: str
    monthly_limit: float
    current_spent: float = 0.0
    
    @property
    def remaining(self) -> float:
        return self.monthly_limit - self.current_spent
    
    @property
    def percentage_used(self) -> float:
        if self.monthly_limit == 0:
            return 0
        return (self.current_spent / self.monthly_limit) * 100
    
    def is_over_budget(self) -> bool:
        return self.current_spent > self.monthly_limit

class BudgetManager:
    """Manage budgets using dictionaries and sets"""
    
    def __init__(self):
        self.budgets: Dict[str, Budget] = {}
        self.valid_categories: Set[str] = {
            'food', 'transportation', 'entertainment', 'utilities',
            'healthcare', 'shopping', 'education', 'other'
        }
    
    def add_category(self, category: str) -> None:
        """Add new category to valid categories set"""
        self.valid_categories.add(category.lower())
    
    def create_budget(self, category: str, monthly_limit: float) -> Budget:
        """Create new budget for category"""
        if category.lower() not in self.valid_categories:
            raise ValueError(f"Invalid category. Valid categories: {self.valid_categories}")
        
        budget = Budget(category=category, monthly_limit=monthly_limit)
        self.budgets[category] = budget
        return budget
    
    def update_spending(self, category: str, amount: float) -> None:
        """Update spending for category"""
        if category in self.budgets:
            self.budgets[category].current_spent += amount
    
    def get_over_budget_categories(self) -> Set[str]:
        """Return set of categories that are over budget"""
        return {cat for cat, budget in self.budgets.items() if budget.is_over_budget()}
    
    def reset_monthly_spending(self) -> None:
        """Reset spending for new month"""
        for budget in self.budgets.values():
            budget.current_spent = 0.0
```

### Step 2: Utility Functions and Decorators

**utils/decorators.py**
```python
from functools import wraps
from datetime import datetime
import logging

def log_transaction(func):
    """Decorator to log financial operations"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = datetime.now()
        result = func(*args, **kwargs)
        end_time = datetime.now()
        
        logging.info(f"Operation: {func.__name__}, "
                    f"Duration: {(end_time - start_time).microseconds}μs, "
                    f"Timestamp: {start_time}")
        return result
    return wrapper

def validate_amount(func):
    """Decorator to validate transaction amounts"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        # Look for 'amount' in args or kwargs
        amount = None
        if 'amount' in kwargs:
            amount = kwargs['amount']
        elif len(args) > 1 and isinstance(args[1], (int, float)):
            amount = args[1]
        
        if amount is not None and amount <= 0:
            raise ValueError("Amount must be positive")
        
        return func(*args, **kwargs)
    return wrapper

def retry_on_failure(max_retries: int = 3):
    """Decorator to retry operations on failure"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_retries):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_retries - 1:
                        raise e
                    logging.warning(f"Attempt {attempt + 1} failed: {e}")
            return None
        return wrapper
    return decorator
```

**utils/file_handler.py**
```python
import json
import csv
from pathlib import Path
from typing import List, Dict, Any
from datetime import datetime

class FileHandler:
    """Handle file I/O operations for finance data"""
    
    def __init__(self, data_dir: str = "data"):
        self.data_dir = Path(data_dir)
        self.data_dir.mkdir(exist_ok=True)
    
    @retry_on_failure(max_retries=3)
    def save_json(self, filename: str, data: Any) -> bool:
        """Save data to JSON file"""
        try:
            filepath = self.data_dir / filename
            with open(filepath, 'w') as file:
                json.dump(data, file, indent=2, default=str)
            return True
        except Exception as e:
            logging.error(f"Error saving {filename}: {e}")
            return False
    
    @retry_on_failure(max_retries=3)
    def load_json(self, filename: str) -> Any:
        """Load data from JSON file"""
        try:
            filepath = self.data_dir / filename
            if filepath.exists():
                with open(filepath, 'r') as file:
                    return json.load(file)
            return None
        except Exception as e:
            logging.error(f"Error loading {filename}: {e}")
            return None
    
    def export_transactions_csv(self, transactions: List[Dict], filename: str = None) -> bool:
        """Export transactions to CSV format"""
        if not filename:
            filename = f"transactions_export_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
        
        filepath = self.data_dir / filename
        
        if not transactions:
            return False
        
        try:
            with open(filepath, 'w', newline='') as file:
                fieldnames = transactions[0].keys()
                writer = csv.DictWriter(file, fieldnames=fieldnames)
                writer.writeheader()
                writer.writerows(transactions)
            return True
        except Exception as e:
            logging.error(f"Error exporting CSV: {e}")
            return False
    
    def backup_data(self) -> bool:
        """Create backup of all data files"""
        backup_dir = Path("backups")
        backup_dir.mkdir(exist_ok=True)
        
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        backup_subdir = backup_dir / f"backup_{timestamp}"
        backup_subdir.mkdir(exist_ok=True)
        
        try:
            for file_path in self.data_dir.glob('*.json'):
                shutil.copy(file_path, backup_subdir / file_path.name)
            return True
        except Exception as e:
            logging.error(f"Error creating backup: {e}")
            return False
```

### Step 3: Main Finance Tracker Application

**main.py**
```python
import uuid
from datetime import datetime, timedelta
from typing import List, Dict, Optional
from collections import defaultdict

from models.transaction import Transaction, TransactionType
from models.budget import BudgetManager
from utils.file_handler import FileHandler
from utils.decorators import log_transaction, validate_amount

class FinanceTracker:
    """Main finance tracking application"""
    
    def __init__(self):
        self.file_handler = FileHandler()
        self.budget_manager = BudgetManager()
        self.transactions: List[Transaction] = []
        self.load_data()
    
    def load_data(self) -> None:
        """Load all data from files"""
        # Load transactions
        transaction_data = self.file_handler.load_json('transactions.json')
        if transaction_data:
            self.transactions = [
                Transaction.from_dict(t) for t in transaction_data
            ]
        
        # Load budgets
        budget_data = self.file_handler.load_json('budgets.json')
        if budget_data:
            for cat, data in budget_data.items():
                budget = self.budget_manager.create_budget(
                    cat, data['monthly_limit']
                )
                budget.current_spent = data.get('current_spent', 0)
    
    def save_data(self) -> None:
        """Save all data to files"""
        # Save transactions
        transaction_data = [t.to_dict() for t in self.transactions]
        self.file_handler.save_json('transactions.json', transaction_data)
        
        # Save budgets
        budget_data = {
            cat: {
                'monthly_limit': budget.monthly_limit,
                'current_spent': budget.current_spent
            }
            for cat, budget in self.budget_manager.budgets.items()
        }
        self.file_handler.save_json('budgets.json', budget_data)
    
    @log_transaction
    @validate_amount
    def add_transaction(
        self, 
        amount: float, 
        category: str, 
        description: str,
        transaction_type: TransactionType,
        date: Optional[datetime] = None
    ) -> Transaction:
        """Add new transaction"""
        if date is None:
            date = datetime.now()
        
        transaction = Transaction(
            id=str(uuid.uuid4()),
            date=date,
            amount=amount,
            category=category.lower(),
            description=description,
            transaction_type=transaction_type
        )
        
        self.transactions.append(transaction)
        
        # Update budget if it's an expense
        if transaction_type == TransactionType.EXPENSE:
            self.budget_manager.update_spending(category.lower(), amount)
        
        self.save_data()
        return transaction
    
    def get_transactions_by_category(self, category: str) -> List[Transaction]:
        """Get all transactions for a specific category"""
        return [t for t in self.transactions if t.category == category.lower()]
    
    def get_transactions_by_date_range(
        self, 
        start_date: datetime, 
        end_date: datetime
    ) -> List[Transaction]:
        """Get transactions within date range"""
        return [
            t for t in self.transactions 
            if start_date <= t.date <= end_date
        ]
    
    def calculate_monthly_summary(self, year: int, month: int) -> Dict:
        """Calculate monthly financial summary"""
        start_date = datetime(year, month, 1)
        if month == 12:
            end_date = datetime(year + 1, 1, 1) - timedelta(days=1)
        else:
            end_date = datetime(year, month + 1, 1) - timedelta(days=1)
        
        monthly_transactions = self.get_transactions_by_date_range(start_date, end_date)
        
        income = sum(t.amount for t in monthly_transactions 
                    if t.transaction_type == TransactionType.INCOME)
        expenses = sum(t.amount for t in monthly_transactions 
                      if t.transaction_type == TransactionType.EXPENSE)
        
        # Group expenses by category
        expense_by_category = defaultdict(float)
        for t in monthly_transactions:
            if t.transaction_type == TransactionType.EXPENSE:
                expense_by_category[t.category] += t.amount
        
        return {
            'period': f"{year}-{month:02d}",
            'total_income': income,
            'total_expenses': expenses,
            'net_income': income - expenses,
            'expense_by_category': dict(expense_by_category),
            'transaction_count': len(monthly_transactions)
        }
    
    def generate_financial_report(self) -> Dict:
        """Generate comprehensive financial report"""
        now = datetime.now()
        current_month_summary = self.calculate_monthly_summary(now.year, now.month)
        
        # Last 6 months trend
        monthly_trends = []
        for i in range(6):
            month = now.month - i
            year = now.year
            if month <= 0:
                month += 12
                year -= 1
            monthly_trends.append(self.calculate_monthly_summary(year, month))
        
        # Budget analysis
        over_budget = self.budget_manager.get_over_budget_categories()
        
        # Top expense categories
        all_expenses = [t for t in self.transactions 
                       if t.transaction_type == TransactionType.EXPENSE]
        category_totals = defaultdict(float)
        for expense in all_expenses:
            category_totals[expense.category] += expense.amount
        
        top_categories = sorted(category_totals.items(), 
                               key=lambda x: x[1], reverse=True)[:5]
        
        return {
            'generated_at': now.isoformat(),
            'current_month': current_month_summary,
            'monthly_trends': monthly_trends,
            'budget_status': {
                'over_budget_categories': list(over_budget),
                'budget_utilization': {
                    cat: budget.percentage_used 
                    for cat, budget in self.budget_manager.budgets.items()
                }
            },
            'top_expense_categories': top_categories,
            'total_transactions': len(self.transactions)
        }

def main():
    """Main application entry point"""
    tracker = FinanceTracker()
    
    # Example usage
    print("🏦 Personal Finance Tracker")
    print("=" * 50)
    
    # Add some sample data
    tracker.add_transaction(
        amount=3000.00,
        category="salary",
        description="Monthly salary",
        transaction_type=TransactionType.INCOME
    )
    
    tracker.add_transaction(
        amount=1200.00,
        category="rent",
        description="Monthly rent payment",
        transaction_type=TransactionType.EXPENSE
    )
    
    tracker.add_transaction(
        amount=85.50,
        category="food",
        description="Grocery shopping",
        transaction_type=TransactionType.EXPENSE
    )
    
    # Set up budgets
    tracker.budget_manager.create_budget("food", 500.00)
    tracker.budget_manager.create_budget("entertainment", 200.00)
    tracker.budget_manager.create_budget("transportation", 300.00)
    
    # Generate and save report
    report = tracker.generate_financial_report()
    tracker.file_handler.save_json('monthly_report.json', report)
    
    print(f"📊 Generated report with {report['total_transactions']} transactions")
    print(f"💰 Current month net income: ${report['current_month']['net_income']:.2f}")
    
    # Export transactions to CSV
    transaction_data = [t.to_dict() for t in tracker.transactions]
    tracker.file_handler.export_transactions_csv(transaction_data)
    
    print("📁 Data saved and exported successfully!")

if __name__ == "__main__":
    main()
```

## 🧪 Testing Your Implementation

Create test functions to verify your implementation:

```python
def test_transaction_immutability():
    """Test that transactions are immutable"""
    transaction = Transaction(
        id="test-1",
        date=datetime.now(),
        amount=100.0,
        category="test",
        description="Test transaction",
        transaction_type=TransactionType.EXPENSE
    )
    
    try:
        transaction.amount = 200.0  # Should raise AttributeError
        assert False, "Transaction should be immutable"
    except AttributeError:
        print("✅ Transaction immutability test passed")

def test_budget_categories():
    """Test budget category management with sets"""
    budget_manager = BudgetManager()
    
    # Test valid categories
    assert "food" in budget_manager.valid_categories
    
    # Test adding new category
    budget_manager.add_category("Custom Category")
    assert "custom category" in budget_manager.valid_categories
    
    print("✅ Budget category test passed")

def test_file_operations():
    """Test file I/O operations"""
    file_handler = FileHandler("test_data")
    
    test_data = {"test": "data", "number": 42}
    
    # Test save and load
    assert file_handler.save_json("test.json", test_data)
    loaded_data = file_handler.load_json("test.json")
    assert loaded_data == test_data
    
    print("✅ File operations test passed")

# Run tests
if __name__ == "__main__":
    test_transaction_immutability()
    test_budget_categories()
    test_file_operations()
    print("🎉 All tests passed!")
```

## 🚀 Enhancement Ideas

1. **Advanced Features**:
   - Recurring transactions
   - Multiple currency support
   - Investment tracking
   - Bill reminders

2. **Data Analysis**:
   - Spending trends visualization
   - Budget variance analysis
   - Predictive spending models
   - Category-based insights

3. **User Interface**:
   - Command-line interface with menus
   - Web interface with Flask/FastAPI
   - Desktop GUI with tkinter

4. **Data Integration**:
   - Bank API integration
   - Receipt scanning with OCR
   - Export to Excel/Google Sheets
   - Database backend (SQLite)

## 📝 Submission Requirements

1. **Complete Implementation** - All core features working
2. **Code Documentation** - Docstrings and comments
3. **Error Handling** - Proper exception handling
4. **Test Functions** - At least 3 test functions
5. **Sample Data** - Include sample transactions and budgets
6. **README.md** - Installation and usage instructions

## 🎯 Grading Criteria

| Criteria | Points | Description |
|----------|--------|-------------|
| **Data Structures Usage** | 25 | Proper use of tuples, sets, dictionaries |
| **Function Implementation** | 25 | Advanced functions, decorators, type hints |
| **File Handling** | 20 | JSON/CSV operations, error handling |
| **Code Quality** | 15 | Clean code, documentation, organization |
| **Testing** | 10 | Test functions and validation |
| **Creativity** | 5 | Additional features and enhancements |

## 💡 Tips for Success

1. **Start Simple** - Implement basic features first, then add complexity
2. **Test Frequently** - Write test functions as you develop
3. **Use Type Hints** - They help catch errors early
4. **Handle Errors** - Always consider what can go wrong
5. **Document Your Code** - Future you will thank present you
6. **Version Control** - Use git to track your progress

Good luck building your Personal Finance Tracker! This project demonstrates real-world application of all Module 2 concepts and will serve as a great portfolio piece.

## 📚 Additional Resources

- [Python Data Structures Documentation](https://docs.python.org/3/tutorial/datastructures.html)
- [JSON Module Documentation](https://docs.python.org/3/library/json.html)
- [CSV Module Documentation](https://docs.python.org/3/library/csv.html)
- [Pathlib Documentation](https://docs.python.org/3/library/pathlib.html)
- [Type Hints Documentation](https://docs.python.org/3/library/typing.html)