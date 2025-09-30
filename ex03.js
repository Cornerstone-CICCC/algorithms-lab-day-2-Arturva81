// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = function(arr) {
    const n = arr.length + 1;
    const expectedNum = (n * (n + 1)) / 2;
    const actualNum = arr.reduce((a, b) => a + b, 0);
    return expectedNum - actualNum;
};

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3