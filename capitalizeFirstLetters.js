// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
/*function capitalizeFirstLetters(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (i === 0) {
            output += input[0].toUpperCase();
        } else {
            output += input[i];
        }
    }
    return output;
}*/

function capitalizeFirstLetters(input) {
    input.length === 0 ? '' : input.split('').map((output) => output[0].toUpperCase + output.slice(1)).join('')

}
// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');