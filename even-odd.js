/*
Create a function that takes an integer as an argument and returns "Even" for
         even numbers or "Odd" for odd numbers.
*/

function checkNumber(number) {
    return number % 2 == 0 ? 'Even' : 'Odd';
}

let number = prompt("Enter any number");
checkNumber(number);

console.log(checkNumber(number));