const array = [1 , -4, 7, 12];

function sumOfPositives(array) {
    let sum = 0;

    for (let value of array) {
        if (value >= 0) {
            sum += value;
        }
    }
    return sum;
}

console.log(sumOfPositives(array));

