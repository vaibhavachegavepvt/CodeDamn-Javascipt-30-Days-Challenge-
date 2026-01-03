// JavaScript Date Object Lab
// In this lab, you will practice creating, formatting, and manipulating JavaScript Date objects. You will create the currentDate Date object, formatDate function to return a formatted string, getDayName function to return the day of the week, and then export the formatDate function using ESM (ECMAScript module) syntax.


console.log('JavaScript Date Object Lab')

//Create a new Date object called `currentDate` and log the current date and time
const currentDate = new Date()
console.log(currentDate.getDate())
console.log(currentDate.getTime())

//Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'
function formatDate(date) {
	const dd = String(date.getDate()).padStart(2, '0')
	const mm = String(date.getMonth()).padStart(2, '0')
	const yyyy = date.getFullYear()
	return `${dd}-${mm}-${yyyy}`
}

//Create a function `getDayName` that takes a Date object and returns the day of the week as a string
function getDayName(date){
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    return days[date.getDay()];
}

//Export the `formatDate` function using ESM syntax
export { formatDate }
