function checkNumber(number) {
    return number % 2 == 0 ? 'Even' : 'Odd';
}

let number = prompt("Enter any number");
checkNumber(number);

console.log(checkNumber(number));