// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

const countWordOccurrences = (string, word) => {
    const wordsArray = string.split(/[ ,.-_]/); 
    return wordsArray.reduce((a, b) => {return b === word ? a + 1 : a;}, 0);
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2