// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = string => {
  let words = string.split(/[ ,.-_]/);
  let camelCased = words.map((word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase());
  return camelCased.join("");
};


console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"