// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { substitution} = require("../src/substitution.js");

describe ("substitution", () => {

    it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibevwe"
        const encode = true;
        const expected = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    
    });

    it("It correctly translates the given phrase", () => {
        const input = "jrufscpw";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const encode = false;
        const expected = 'thinkful';
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    
    });

    it("It maintains spaces in the message, before and after encoding or decoding.", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const encode = true;
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    
    });

    it("It returns false if there are any duplicate characters in the given alphabet.", () => {
        const input = "thinkful";
        const alphabet = "abcabcabcabcabcabcabcabcyz"
        const encode = true;
        const expected = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    
    });
	it("Is the Substitution Cypher encoding working as described in the passing requirements in the previous lesson?", () => {
        const input = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const encode = true;
        const expected = "ykrrpik";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    
    });


});

