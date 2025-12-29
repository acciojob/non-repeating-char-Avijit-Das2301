function firstNonRepeatedChar(str) {
 if (!str || str.length===0)
	 return null;
const freq={};

//First Pass:Build frequency map
for (let ch of str){
	freq[ch]=(freq[ch]||0)+1;
}

//second pass:find first char with frequency 1
for (let ch of str) {
	if (freq[ch]===1){
		return ch;
	}
}

//If no non-repeated character
return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
