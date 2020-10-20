# password-generate

This project tested my javascript of solving how to generate a random password

My page: https://timih124.github.io/password-generate/ 

Screenshot: https://github.com/Timih124/password-generate/blob/main/screenshot.png


# Given Psuedocode 

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

# User-Story 

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


# issues 
Had a hard time just getting started but once I was able to move, I had a good understanding on what to do next.

There has to be an easier to way to do the input of characters, for something so simple, took a long time. - lol

# Description of what I did to accomplish task
- created variables for values to be displayed of the selection criteria
- created values for each characters, lower, upper, special,
- made the generate button active 
- created event to ask user what they would like in their password
- asked user how many characters they would like to create their password
- asked user to ask if they would like each unique value, must pick one
- based off selection critera what options can be created into a password
- create random selection password to get based off what critera selected
- have array join password to create string 
- Get values inside text box to generate password.