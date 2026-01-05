// Array.prototype.every() in JavaScript
// In this lab, you will learn how to use the Array.prototype.every() function in JavaScript to check if all elements of an array fulfill a certain condition. You will create a function named checkPositive that accepts an array of numbers and returns true if all the numbers are positive and false otherwise. Make sure to use ESM syntax and follow the instructions given in the challenges.



console.log('Welcome to the Array.prototype.every() lab')

// Your code goes here

function checkPositive(arr) {
	return arr.every((elem) => elem >= 0)
}
console.log(checkPositive([1, 2, 3]))
console.log(checkPositive([-1, 2, 3]))
export { checkPositive }