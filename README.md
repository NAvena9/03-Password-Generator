# 03 JavaScript: Password Generator

## My Task

For the third Week Homework, I needed to create a Javascript Password Generator. This application generates a random password based on user-selected criteria. 

When Opened, the user will be prompted to select amog 5 different conditions: 1- Password lenght (>= 8 characters <= 128), Lowercase characters, Uppercase characters, Numbers & Special characters / symbols

The final result is a random password that contains all the criteria selected by the user, on a simple & clear UI (provided by my instructor).




## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```