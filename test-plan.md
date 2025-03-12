### Introduction
The purpose of this test plan is to verify the correctness of the calculator module, ensuring all arithmetic functions work as expected.

### Test Objectives
- Verify the correct implementation of the basic arithmetic functions: addition, subtraction, multiplication, and division.
- Ensure proper handling of decimal calculations.
- Check for correct error handling in division by zero.

### Test Scope
#### In Scope
- Addition, subtraction, multiplication, and division of:
  - Positive numbers
  - Negative numbers
  - Decimal numbers
  - Edge cases (zero handling)

#### Out of Scope
- UI testing
- Advanced mathematical operations (e.g., exponentiation, logarithms)

### Test Strategy
- Unit testing will be conducted using Jest.

### Test Cases
#### Addition Tests
1. Adding two positive numbers
2. Adding a positive and a negative number
3. Adding two decimal numbers (use `toBeCloseTo` for precision handling)

#### Subtraction Tests
4. Subtracting two positive numbers
5. Subtracting a positive and a negative number
6. Subtracting two decimal numbers

#### Multiplication Tests
7. Multiplying two positive numbers
8. Multiplying by zero (result should be zero)
9. Multiplying two decimal numbers

#### Division Tests
10. Dividing two positive numbers
11. Dividing a positive number by a negative number
12. Division by zero should throw an error (use `toThrow`)

### Risk Analysis
- **Risk of division by zero:** Proper error handling is necessary.
- **Risk of incorrect decimal calculations:** Use `toBeCloseTo` to account for floating-point precision errors.

### Test Environment
- **Platform:** Node.js
- **Testing Framework:** Jest

### Entry & Exit Criteria
#### Entry
- `calculator.js` file is provided.
- Jest is installed and configured.

#### Exit
- All tests pass successfully.

### Tools
- **Project Management Tools:** Jira, Trello
- **Test Automation Tools:** Jest, Selenium

---
