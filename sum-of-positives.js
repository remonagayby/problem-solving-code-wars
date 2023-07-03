/*
    You get an array of numbers, return the sum of all of the positives ones.

    Example: [1, -4, 7, 12] => 1 + 7 + 12 + 20

    Note: If there is nothing to sum, the sum is default to 0
*/

const array = [1, -4, 7, 12];

function sumOfPositives(array) {

    return array
            .filter(number => number > 0)
            .reduce((sum, value) => (sum + value))
    
}

console.log(sumOfPositives(array));

