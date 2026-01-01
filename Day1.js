// Map, Filter, and Reduce Lab
// In this lab, you will implement your own map, filter, and reduce functions in JavaScript. These functions are commonly used for array manipulation in JavaScript. Map, filter, and reduce functions are higher-order functions that accept a callback function as an argument and apply that function to the elements of the input array in different ways.

// By the end of this lab, you should have 3 functional implementations for map, filter, and reduce.

// Make sure to export all the functions using ESM export.



// Implement the myMap, myFilter, and myReduce functions

// myMap function
function myMap(arr, callbackFn) {
	return arr.map((elem) => callbackFn(elem))
}

// myFilter function
function myFilter(arr, callbackFn) {
	return arr.filter((elem) => callbackFn(elem))
}

// myReduce function
function myReduce(arr, callback, initialValue) {
	let accumulator
	let startIndex

	if (initialValue !== undefined) {
		accumulator = initialValue
		startIndex = 0
	} else {
		accumulator = arr[0]
		startIndex = 1
	}

	for (let i = startIndex; i < arr.length; i++) {
		accumulator = callback(accumulator, arr[i], i, arr)
	}

	return accumulator
}

// Export the functions
export { myMap, myFilter, myReduce }
