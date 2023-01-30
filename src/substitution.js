// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
	  
	  
	  let lowerCaseInput = input.toLowerCase();
	  let unique = "";
	  if(!alphabet || alphabet.length === 0 || alphabet.length < 26 || alphabet.length > 26){
		  return false;
	  }
	  for (let i = 0; i <= alphabet.length; i++){
		  for (let j = i+1; j <= alphabet.length; j++){
			  if (alphabet[i] === alphabet[j]){
				  return false;
			  }
		  }
	  }
	  //else if(alphabet){
		 // for (let i = 0; i <= lowerCaseInput.length; i++){
			//  if (lowerCaseInput.charCodeAt(i) - lowerCaseInput.charCodeAt(i+1) !== 1){
			// return false;
	//  }
		//  }
	//  }
	  //for (let i = 0; i <= lowerCaseInput.length; i++){
  //for(let j = 0; j <= lowerCaseInput.length; j++){
		  //if (lowerCaseInput.charCodeAt(i) - lowerCaseInput.charCodeAt(i+j) !== 1){
			 // return false;
      //}
 // }
//}
	  	  
	  
	  let codeString = [];
	  let alphaArray = [];
	  let encodedString = [];
	  let decodedString = [];
	  let obj = {};
	  
	  
	  /*Puts each letter of code in a string*/
	  for (let j = 0; j < alphabet.length; j++){
		  codeString.push(`${alphabet[j]}`);
	  }
	  
	  /*Puts each letter of Alphabet in a string*/
	  for (let i = 97; i <= 122; i++){
		  alphaArray.push(String.fromCharCode(`${i}`));
	  } 
	  
	  /*creates pair of alphabet:code */
	  alphaArray.forEach((alphaArrayElement, index)=> {
		  obj[alphaArrayElement] = codeString[index];
	  }) 
 
	  if(encode){
		  
		  for (let i = 0; i <= lowerCaseInput.length;
			   i++){
			  for (let key in obj){
				  let value = obj[key];
				  if (lowerCaseInput[i] === key){
					  encodedString.push(value);
				  }
			  }
			  if (lowerCaseInput[i] === " "){
				  encodedString.push(" ");
			  }
		  }
		  return encodedString.join("");
	  }
  
	
	if(!encode || encode === false){
		for (let i = 0; i <= lowerCaseInput.length; i++){
			for (let key in obj){
				let value = obj[key];
				if (lowerCaseInput[i] === value){
					decodedString.push(key);
				}
			}
			if (lowerCaseInput[i] === " "){
				decodedString.push(" ");
			}
		}
		return decodedString.join("");
	}
  }
	
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
