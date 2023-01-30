// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
	  /*create an array 2d for numbers 1 - 5, map A - Z against the number array*/
  
	  
	let lowerCaseString = input.toLowerCase();
	let numArray = [];
    let pairObject = {};
    let blank = {};
	let polyArray = [];
	  let decodeArray = [];
	   
		  
	  
	for(let i = 1; i <=5; i++){
      for (let j = 1; j <=5; j++){
        numArray.push(`${j}${i}`);  /* Creates 2D array of 1-5*/
      }
    }
for (let k = 97; k <= 122; k++){
      pairObject[String.fromCharCode(k)] = k; /* Creates array of alpha and ascii value*/
    }
    for(let i = 0; i < numArray.length; i++){
      Object.keys(pairObject).map((pairObjectElement) => {
        if(blank[pairObjectElement] = undefined){
          blank[pairObjectElement] = 0; /* initialize blank object to 0*/
        }           
        if (pairObjectElement === "j"){
          blank[pairObjectElement] = numArray[i--];;  /* same value as i*/
        }
        blank[pairObjectElement] = numArray[i++];
      })
    blank[" "] = " "; /* add space and value to array*/ 
    }  
	
    if (encode){
		for (let i = 0; i <= lowerCaseString.length; i++){
			for (let key in blank){
				let value = blank[key];
				if (lowerCaseString[i] === key){
					polyArray.push(value);
				}
			}
		}
		return polyArray.join("");
	}
	  
	  
	  
	  if (!encode || encode === false){
		  if ((input.length - (input.split(" ").length - 1)) %2 !== 0){
  return false;
}
		 
	  	for (let i = 0; i <= input.length; i = i+2){
			
		 if (input[i] === " "){
       i--;
       decodeArray.push(" ");
     }

			for (let key in blank){
				let value = blank[key];
				
			    if (`${input[i]}${input[i+1]}` === value){
					  decodeArray.push(key);
				}
			}
  }

return decodeArray.join("");
		  
	  }
	  
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
