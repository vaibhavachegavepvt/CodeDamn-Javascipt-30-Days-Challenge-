// Random in range
// In this coding challenge, you will be implementing a function called randomInRange(min, max) that generates a random integer between a given minimum value (inclusive) and a maximum value (exclusive). The function should take two arguments, min and max, both of which are integers.

// Instructions
// The minimum value is inclusive and the maximum value is exclusive.
// Assume that this statement is always true min < max.
// Example test cases


export const randomInRange = (min, max) => {
	// Write your code here
	return Math.random() * (max-min)+min
}
