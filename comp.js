var newComponent = (function(){
 	document.addEventListener("DOMContentLoaded", function(event) { 

		'use strict';

		//CACHE DOM
		var originalUserText = document.getElementById("input-text");
		var pgButton = document.getElementById("pig-latin");
		var reverseButton = document.getElementById("reverse");
		var clearButton = document.getElementById("clear");
		var resultContainer = document.getElementById("result");


		//BIND EVENTS
		pgButton.addEventListener("click", pigLatinCb);
		reverseButton.addEventListener("click", reverseStringCb);
		clearButton.addEventListener("click", clearButtonCb);


		//CALLBACKS
		function pigLatinCb(event) {
			event.preventDefault();
			if (typeof originalUserText.value === "string" && originalUserText.value.length > 0) {
				return _result(pigLatin(originalUserText.value));
			}
		}

		function reverseStringCb(event) {
			event.preventDefault();
			if (typeof originalUserText.value === "string" && originalUserText.value.length > 0) {
				return _result(reverseString(originalUserText.value));
			}
		}

		function clearButtonCb() {
			resultContainer.innerHTML = "";
			originalUserText.value = "";
		}

		//HELPER FUNCTIONS
		function _isVowel(char) {
			if (char.match(/[a-z]/i)) {
				char = char.toLowerCase();
			  	return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === "y" || false;
			}
		}


		//PUBLIC API FUNCTIONS
		function pigLatin(text) {
			var textArr = text.split(" ");
		  	for(var i = 0; i <= textArr.length-1; i++) {
		  		if(textArr[i].match(/[a-z]/i )){
					if (_isVowel(textArr[i][0])) {
						textArr[i] = textArr[i] + "yay";
					}
					else {
						var suffix = "";
						var slice = 0;
						for (var y = 0; y <= (textArr[i].length)-1; y++) {
							if (!_isVowel(textArr[i][y])) {
							  suffix += textArr[i].slice(y,y+1);
							  slice += 1;
							}
							else {
							  textArr[i] = textArr[i].slice(slice, textArr[i].length) + suffix + "ay";
							  break;
							}
						}
					}
				}
			}
			return textArr.join(" ");
		}

		
		function reverseString(text) {
		  if (text.length > 0 && typeof text === "string") {
		    var textArr = text.split(" ");
		    for (var i = 0; i <= textArr.length-1; i++) {
		      var newStr = "";
		      var strLength = textArr[i].length;
		      while (strLength > 0) {
		        newStr += textArr[i].substring(strLength-1,strLength);
		        strLength--;
		      }
		      textArr[i] = newStr;
		    }
		  }
		  return textArr.join(" ");
		}


		//RENDER
		function _result(newText) {
			resultContainer.innerHTML = newText;
		}


		//PUBLIC API
		return {
			setPigLatin: pigLatin,
			setReverse: reverseString
		}
	});
})();



										