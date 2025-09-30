// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

const findMax = numbers => {
    if (numbers.length === 1) {
        return numbers[0];
    }
    const num1 = numbers[0];
    const maxNum = findMax(numbers.slice(1));
    return num1 > maxNum ? num1 : maxNum;
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9