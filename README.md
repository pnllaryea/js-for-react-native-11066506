# js-for-react-native-11066506
ArrayProcessor: Data Manipulation and User Profiles (Student ID: 11066506)
This JavaScript code defines a class ArrayProcessor with functions for manipulating arrays and creating user profiles.

Task 1:

processArray(numbers): This function takes an array of numbers and returns a new array with even numbers squared and odd numbers tripled.
formatArrayStrings(strings, processedNumbers): This function takes two arrays of equal length - one with strings and another with processed numbers (from processArray). It modifies the strings array based on the corresponding processed numbers: even numbers make the string uppercase, odd numbers make it lowercase. It throws an error if the arrays have different lengths.
Task 2 (Additional Functionality):

createUserProfiles(originalNames, modifiedNames): This function takes two arrays of equal length - one with original names and another with modified names (from formatArrayStrings). It creates an array of user profiles, each containing an ID (incremented from 1), the original name, and the modified name. It throws an error if the arrays have different lengths.
Example Usage:

The code demonstrates how to use these functions with sample data to process an array of numbers, format an array of strings based on the processing results, and finally create user profiles with the original and modified names.

Running the Code:

Save the code as a JavaScript file (e.g., array_processor.js).
Open a terminal or command prompt and navigate to the directory where you saved the file.
Run the code using Node.js: node array_processor.js.
This will print the created user profiles to the console.
