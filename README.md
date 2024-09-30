# javascript02

## Exercise 01: Array Transformation

```
Write a JavaScript function that takes as input an array of numbers and returns a new array which is transformed as follows: For each number in the array, if that number is less than 10, multiply it by 2; otherwise, multiply it by 4.
For sample array: const array = [1, 5, 10, 11, 20, 34];
The output should be: transformArray(array) = [2, 10, 20, 44, 80, 136]
```

## Exercise 02: Password Checker

```
Prompt the user to enter a password for validation. Add a div to HTML with id=’password’ which will display the password entered. Add another separate paragraph in HTML with id=’message’ which will display the error or valid message after password checks. If the password is less than 8 characters long, show an error message to the user. If the password does not contain a number or does not contain an uppercase letter, show an error message. Otherwise, show the user the message ‘Your password is valid!’
```

## Exercise 03: Dynamic Table Generator

```
Write a JavaScript program that prompts the user to enter two numbers: the number of columns and the number of rows. The program contains one function:
generateTable(nrRows, nrColumns) which dynamically generates a simple HTML table with the specified number of columns and rows. Inside the header cells of the table display ‘Header’ and the header number, while inside the table cells, display the ‘Row’ and the row number as well as ‘Col’ and the column number. Use the video as a reference. Hint: You should use 2 for-loops (nested for loops) to render the rows (tr) and the table cells (td or th) inside the rows. Use the following piece of the pseudo-code as a reference:

for (let i = 0; i < rowCount; i++) {
   create table row (tr) element here
for (let j = 0; j < colCount; j++) {
   create table cell element here (th if index i is 0 otherwise create td)
   set the text inside the table cell as in the video
   append the table cell created to the table row
}
   append the table row to the table
}
```
