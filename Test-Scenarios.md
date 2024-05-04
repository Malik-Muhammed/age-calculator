# Age Calculator App

This is an age calculator application that takes a user's date of birth as input and calculates their age in years, months, and days based on the current date.

## Test Scenarios

To ensure the robustness of the application, the following test scenarios should be considered:

### 1. Empty inputs

- Test cases where one or more input fields are left empty.
  - Example: `day = "", month = "5", year = "2000"`

### 2. Invalid day

- Test cases where the day input is not valid for the given month and year.
  - Example: `day = "31", month = "2", year = "2000"`

### 3. Invalid month

- Test cases where the month input is not valid (i.e., less than 1 or greater than 12).
  - Example: `day = "15", month = "0", year = "2000"`
  - Example: `day = "15", month = "13", year = "2000"`

### 4. Invalid year

- Test cases where the year input is less than 1583 (the minimum accepted year).
  - Example: `day = "15", month = "5", year = "1582"`
- Test cases where the year input is greater than the current year.
  - Example: `day = "15", month = "5", year = "2025"` (assuming the current year is 2024)

### 5. Maximum days in a month

- Test cases where the day input is the maximum possible value for the given month and year.
  - Example: `day = "31", month = "1", year = "2024"` (January has 31 days)
  - Example: `day = "30", month = "4", year = "2024"` (April has 30 days)
  - Example: `day = "28", month = "2", year = "2024"` (February has 28 days in a non-leap year)
  - Example: `day = "29", month = "2", year = "2024"` (February has 29 days in a leap year)

### 6. Age calculation edge cases

- Test cases where the user's date is exactly one day, one month, or one year before the current date.
  - Example: `day = "29", month = "4", year = "2024"` (assuming the current date is April 30, 2024)
  - Example: `day = "30", month = "3", year = "2024"` (assuming the current date is April 30, 2024)
  - Example: `day = "30", month = "4", year = "2023"` (assuming the current date is April 30, 2024)

### 7. Combination of invalid inputs

- Test cases where multiple input fields have invalid values.
  - Example: `day = "32", month = "13", year = "1500"`

### 8. Boundary values

- Test the minimum and maximum values for each input field.
  - Day: 1 and the maximum day for the given month and year.
  - Month: 1 and 12.
  - Year: 1583 and the current year.

### 9. Negative values

- Test cases where the user enters negative values for any input field.
  - Example: `day = "-5", month = "6", year = "2000"`

### 10. Non-numeric values

- Test cases where the user enters non-numeric values for any input field.
  - Example: `day = "abc", month = "3", year = "2000"`

### 11. Extremely large values

- Test cases where the user enters extremely large values for any input field.
  - Example: `day = "999999999", month = "99999999", year = "99999999"`

By testing these various scenarios, you can ensure that your code handles different types of user input correctly and provides the appropriate error messages or calculations.
