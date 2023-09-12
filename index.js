function isPalindrome(input) {
	return input === input.split('').reverse().join('');
}

const userInput = prompt('Enter  a number:');

if (isPalindrome(userInput)) {
	console.log(`${userInput} is a palindrome!`);
} else {
	console.log(`${userInput} is not a palindrome.`);
}
