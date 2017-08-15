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
			if (typeof originalUserText === "string" && originalUserTextLength > 0) {
				pigLatin(originalUserText);
			}
		}

		function pigLatin(text) {
			var lastLetter = text.slice(0,1);
			var text = text.slice(1,text.length) + lastLetter + "a";
			return text;
		}

		reverseButton.addEventListener("click", reverseStringCb);

		function reverseStringCb(event) {
			// event.preventDefault();
			originalUserText = document.getElementById("input-text").value;
			console.log(typeof originalUserText === "string");
			console.log(originalUserText);
			if (typeof originalUserText === "string" && originalUserText.length > 0) {
				console.log("vghvchvh");
				reverseString(originalUserText);
			}
		}

		function reverseString(text) {
		console.log("vhgvj");
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


										