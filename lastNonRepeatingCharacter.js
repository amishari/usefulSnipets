function lastNonRepeatingCharacter(str) {
	for (let i = str.length; i > 0; i--) {
		let char = str[i];
		if (str.lastIndexOf(char) === i && str.lastIndexOf(char, i - 1) === -1) {
			return char;
		}

}}
console.log(lastNonRepeatingCharacter(arr));
