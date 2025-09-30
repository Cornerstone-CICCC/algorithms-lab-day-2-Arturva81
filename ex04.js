// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = word => {
    const result = [...word].reduce((a, b) => {
        if (b === ' ') return a;
        a.counts[b] = (a.counts[b] || 0) + 1;
        const currentCount = a.counts[b];
        if (currentCount > a.maxCount) {
            a.maxCount = currentCount;
            a.mostFrequent = b;
        }
        return a;
    }, {
        counts: {},
        maxCount: 0,
        mostFrequent: ''
    });
    return result.mostFrequent;
};

console.log(mostFrequentChar("javascript")); // Expected output: "a"