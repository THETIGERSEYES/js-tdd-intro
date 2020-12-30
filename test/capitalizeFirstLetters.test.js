// test/capitalizeFirst.test.js
const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters.js");

describe("capitalizeFirstLetters", () => {

    it("is a function accepting one argument", () =>{
        assert.strictEqual(typeof capitalizeFirstLetters, "function");
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });
    it("transform javascript correctly", () => {
        assert.strictEqual(capitalizeFirstLetters("this is a test"), "This Is A Test");
    });
    it("works with a 1-character string", () => {
        assert.strictEqual(capitalizeFirstLetters("z"), "Z");
    });
    it("works with an empty string", () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
});





