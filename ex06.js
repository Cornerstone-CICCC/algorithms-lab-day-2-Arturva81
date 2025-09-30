// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

const getQueryParams = urlString => {
    const separate = urlString.split('?');
    if (separate.length < 2) return {};
    return separate[1].split('&').reduce((a, b) => {
        const [c, d] = b.split('=');
        a[c] = d;
        return a;
    }, {});
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }