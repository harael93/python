# Module 4 Project: Weather Data Explorer

## Project Overview
Build a Weather Data Explorer that loads, analyzes, and visualizes weather data using Python modules and external libraries. This project will demonstrate your ability to organize code, use built-in and third-party modules, and perform basic data analysis.

## Requirements
- **Organize code into modules** (data loading, analysis, visualization)
- **Use built-in modules** (`csv`, `json`, `datetime`, etc.)
- **Use external libraries** (`pandas`, `matplotlib`)
- **Load weather data from a CSV file**
- **Analyze temperature, humidity, and precipitation**
- **Visualize data with charts**

## Example Skeleton
```python
# data_loader.py
import pandas as pd

def load_weather_data(filename):
    return pd.read_csv(filename)

# analysis.py
def average_temperature(df):
    return df['Temperature'].mean()

# visualization.py
import matplotlib.pyplot as plt

def plot_temperature(df):
    plt.plot(df['Date'], df['Temperature'])
    plt.xlabel('Date')
    plt.ylabel('Temperature')
    plt.show()

# main.py
from data_loader import load_weather_data
from analysis import average_temperature
from visualization import plot_temperature

df = load_weather_data('weather.csv')
print("Average temperature:", average_temperature(df))
plot_temperature(df)
```

## Submission Checklist
- [ ] Code organized into modules
- [ ] Built-in and external libraries used
- [ ] Data loaded and analyzed
- [ ] Data visualized with charts
- [ ] Code is well-documented

Good luck!