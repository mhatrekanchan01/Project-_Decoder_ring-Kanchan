// Write your tests here!
const { expect } = require("chai");
const { caesar} = require("../src/caesar.js");

describe ("caesar", () => {

it("It returns false if the shift value is equal to 0", () => {
    const input = "thinkful";
    const shift = 0;
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);

});
it("It returns false if the shift value is less than -25", () => {
    const input = "thinkful";
    const shift = -26;
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);

});
it("It returns false if the shift value is greater than 25", () => {
    const input = "thinkful";
    const shift = 26;
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);

});
it("Ignores capital letters", () => {
    const input = "This is a secret message!";
    const shift = 8;
    const encode = true;
    const expected = 'bpqa qa i amkzmb umaaiom!';
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);

});
it("Handles shifts that go past the end of the alphabet", () => {
    const input = "XYZ";
    const shift = 3;
    const encode = true;
    const expected = 'abc';
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);

});
it("Maintains spaces and other nonalphabetic symbols in the message", () => {
    const input = "BPQA qa I amkzmb umaaiom!";
    const shift = 8;
    const encode = false;
    const expected = 'this is a secret message!';
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);

});
	it("Is the Caesar Shift encoding working as described in the passing requirements in the previous lesson?", () => {
    const input = "Zebra Magazine";
    const shift = 3;
    const encode = true;
    const expected = 'cheud pdjdclqh';
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);

});
});
