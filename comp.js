var newComponent = (function(element){
	'use strict';

	//CACHE DOM
	function injectElement(element1, element2) {
		element1.appendChild(element2);
	}

	var componentContainer = document.createElement("div");
	var header = document.createElement("h1");
	header.innerHTML = "Transform Your Text!";
	var f = document.createElement("form");
	var originalUserText = document.createElement("input"); //input element, text
	originalUserText.setAttribute('type',"text");
	originalUserText.setAttribute('name',"text");
	originalUserText.setAttribute('id',"input-text");

	var clearButton = document.createElement("input"); //input element, Clear button
	clearButton.setAttribute('type',"button");
	clearButton.setAttribute('value',"Clear");
	clearButton.setAttribute('id',"clear");
	clearButton.setAttribute('class',"btn");

	var reverseButton = document.createElement("input"); //input element, Reverse button
	reverseButton.setAttribute('type',"button");
	reverseButton.setAttribute('value',"Reverse");
	reverseButton.setAttribute('id',"reverse");
	reverseButton.setAttribute('class',"btn");

	var pgButton = document.createElement("input"); //input element, Pig Latin button
	pgButton.setAttribute('type',"button");
	pgButton.setAttribute('value',"Pig Latin");
	pgButton.setAttribute('id',"pig-latin");
	pgButton.setAttribute('class',"btn");

	f.appendChild(originalUserText);
	f.appendChild(reverseButton);
	f.appendChild(pgButton);
	f.appendChild(clearButton);

	var resultContainer = document.createElement("div");
	resultContainer.setAttribute("id", "result");

	componentContainer.appendChild(header);
	componentContainer.appendChild(f);
	componentContainer.appendChild(resultContainer);


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


 	document.addEventListener("DOMContentLoaded", function(event) {
		var varUserInputElement = document.getElementById(element);
 		injectElement(varUserInputElement, componentContainer); 


		//BIND EVENTS
		pgButton.addEventListener("click", pigLatinCb);
		reverseButton.addEventListener("click", reverseStringCb);
		clearButton.addEventListener("click", clearButtonCb);
		
	});//end of document event listener


	//PUBLIC API
	return {
		setPigLatin: pigLatin,
		setReverse: reverseString
	}
})("insertContent");



										