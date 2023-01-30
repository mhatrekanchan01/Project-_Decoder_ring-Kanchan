// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25){
      return false;
    }
	let lowerCaseString = input.toLowerCase();
    let arrayCode = [];
	let arrayDecode = [];
    if (encode){
     /* given string get charCodeAt value*/
     /* if (charCodeAt + shift) > 90(Z) (do 90 - 25 which gives A) || 122(z) (do 122 - 25 which gives a)*/
     /* if charAt index = space || nonalpha, move charAt(index+1)*/
    for (let i = 0; i < lowerCaseString.length; i++){
      let lowCaseElement = lowerCaseString[i].charCodeAt();
      let shiftValue = lowCaseElement + shift;
		if(shiftValue < 97){
        shiftValue = (122 - 96) + shiftValue;
      }
		if(shiftValue > 122){
        shiftValue = (shiftValue - 122) + 96;
      }
      if ((lowCaseElement === 32) || ((lowCaseElement < 97) || (lowCaseElement > 122))){
      shiftValue = lowCaseElement;
      }     
      
      
      arrayCode.push(String.fromCharCode(shiftValue));
    }
    return arrayCode.join("");
  }
	  
 if(!encode || encode === false){
	for (let i = 0; i < lowerCaseString.length; i++){
		let lowCaseElement = lowerCaseString[i].charCodeAt();
		let shiftValue = lowCaseElement - shift;  
		if(shiftValue < 97){
        shiftValue = (122 - 96) + shiftValue;
      }
		if(shiftValue > 122){
        shiftValue = (shiftValue - 122) + 96;
      }
		if ((lowCaseElement === 32) || ((lowCaseElement < 97) || (lowCaseElement > 122))){
  shiftValue = lowCaseElement;
  }
		arrayDecode.push(String.fromCharCode(shiftValue));
	  }
	return arrayDecode.join("");
  }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
