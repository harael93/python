# Module 3 Project: Student Management System

## Project Overview
Build a Student Management System using Object-Oriented Programming. The system should allow you to add students, assign grades, and generate reports. This project will demonstrate your understanding of classes, objects, inheritance, encapsulation, and polymorphism.

## Requirements
- **Student class**: Attributes for name, ID, grades
- **Course class**: Attributes for course name, code, enrolled students
- **Grade management**: Methods to add, update, and calculate grades
- **Inheritance**: Subclass for GraduateStudent with additional attributes
- **Encapsulation**: Private attributes for sensitive data
- **Polymorphism**: Method overriding for report generation
- **Magic methods**: Implement `__str__`, `__repr__`, and comparison methods
- **File I/O**: Save and load student data (optional)

## Example Skeleton
```python
class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self._grades = []  # Encapsulated
    def add_grade(self, grade):
        self._grades.append(grade)
    def average(self):
        return sum(self._grades) / len(self._grades) if self._grades else 0
    def __str__(self):
        return f"{self.name} ({self.student_id})"

class GraduateStudent(Student):
    def __init__(self, name, student_id, thesis_title):
        super().__init__(name, student_id)
        self.thesis_title = thesis_title
    def __str__(self):
        return f"{self.name} ({self.student_id}), Thesis: {self.thesis_title}"

class Course:
    def __init__(self, name, code):
        self.name = name
        self.code = code
        self.students = []
    def enroll(self, student):
        self.students.append(student)
    def report(self):
        for student in self.students:
            print(student, "Average grade:", student.average())
```

## Suggested Features
- Add/remove students
- Assign grades
- Generate course reports
- Save/load data to file

## Submission Checklist
- [ ] Classes and objects implemented
- [ ] Inheritance and encapsulation used
- [ ] Polymorphism and magic methods demonstrated
- [ ] Code is well-documented
- [ ] Optional: File I/O for data persistence

Good luck!