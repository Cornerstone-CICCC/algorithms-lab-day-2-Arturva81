// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = words => {
    let vowels = 'aeiou ';
    return [...words].filter(a => !vowels.includes(a)).length;
}

console.log(countConsonants("hello world")); // Expected output: 7