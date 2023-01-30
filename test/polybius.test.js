// Write your tests here!
const { expect } = require("chai");
const { polybius} = require("../src/polybius.js");

describe ("polybius", () => {

    it("When encoding, it translates the letters i and j to 42", () => {
        const input = "thinkful";
        const encode = true;
        const expected = "4432423352125413";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    
    });

    it("When decoding, it translates 42 to (i/j)", () => {
        const input = "4432423352125413";
        const encode = false;
        const expected = "thijnkful";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    
    });

    it("It ignores capital letters.", () => {
        const input = "THINKFUL";
        const encode = true;
        const expected = "4432423352125413";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    
    });

    it("It maintains spaces in the message", () => {
        const input = "3251131343 2543241341";
        const encode = false;
        const expected = "hello world";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    
    });
	it("Is the Polybius Square encoding working as described in the passing requirements in the previous lesson?", () => {
    const input = "message";
    const encode = true;
    const expected = '23513434112251';
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);

});

});