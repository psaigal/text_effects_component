document.addEventListener("DOMContentLoaded", function(event) { 
	var newComponent = (function(){
		//private functions should have _ in the name
		'use strict';

		//public variables 
		var originalUserText = document.getElementById("input-text").value;
		console.log(originalUserText);
		var originalUserTextLength = originalUserText.length;
		var pgButton = document.getElementById("pig-latin");
		var reverseButton = document.getElementById("reverse");
		var resultContainer = document.getElementById("result");

		pgButton.addEventListener("click", pigLatinCb);

		function pigLatinCb(event) {
			event.preventDefault();
			originalUserText = document.getElementById("input-text").value;
			if (typeof originalUserText === "string" && originalUserText.length > 0) {
				pigLatin(originalUserText);
			}
		}

		function pigLatin(text) {
			var textArr = text.split(" ");
		  	for(var i = 0; i <= textArr.length-1; i++) {
				if (isVowel(textArr[i][0])) {
					textArr[i] = textArr[i] + "yay";
				}
				else {
					var suffix = "";
					var slice = 0;
					for (var y = 0; y <= (textArr[i].length)-1; y++) {
						if (!isVowel(textArr[i][y])) {
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
			return result(textArr.join(" "));
		}

		function isVowel(char) {
			char = char.toLowerCase();
		  	return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === "y" || false;
		}


		reverseButton.addEventListener("click", reverseStringCb);

		function reverseStringCb(event) {
			event.preventDefault();
			originalUserText = document.getElementById("input-text").value;
			console.log(typeof originalUserText === "string");
			console.log(originalUserText);
			if (typeof originalUserText === "string" && originalUserText.length > 0) {
				reverseString(originalUserText);
			}
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
		      console.log(newStr);
		      textArr[i] = newStr;
		    }
		  }
		  return result(textArr.join(" "));
		}

		function result(newText) {
			resultContainer.innerHTML = newText;
		}
		// return {
		// 	setPigLatin: pigLatin,
		// 	setReverse: reverseString
		// }
	})();
});


										