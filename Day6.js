// Currency Tracker
// You have write the JavaScript function to display the currency rate for given currecy code from the input.

// Your app will make a GET request to the API 'https://api.exchangerate-api.com/v4/latest/USD' to fetch the latest exchange rate for USD. The fetched data will be in JSON format.Your task is to display the conversion rate for the currency entered by the user in the #currencyInput field.

// NOTE: The #currencyInput will only accept the input if given in capital letters and will only accept if the length of the input is 3 letters. This validation is done using a regular expression added to the pattern attribute of the input element

// Steps
// Prevent the default behaviour of the form submit event
// Get the value from the #currencyInput element
// Make a fetch request to the given API URL
// Verify if the given the currecyCode exists in the rates object of the returned response
// If the currecyCode exists, add the following string to #results div
// `1 USD = ${currecyRate} ${currecyCode}` 
// If the currecyCode does not exist, then add the following text to #results div
// `${currencyCode} does not exist` 
// NOTE: The text script will verify your code against the output string, make sure you don't make any typos or mistake while adding the string content to the #results div



// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>Currency Tracker</title>
// 	</head>
// 	<body>
// 		<form onsubmit="getCurrency(event)">
// 			<input
// 				type="text"
// 				id="currencyInput"
// 				name="currencyCode"
// 				placeholder="INR, EUR, CAD"
// 				pattern="^[A-Z]{3}$"
// 				autocomplete="off"
// 				autofocus
// 				required
// 			/>

// 			<input type="submit" value="Get Rate" />
// 		</form>

// 		<div id="results"></div>

// 		<script src="script.js"></script>
// 	</body>
// </html>


/**
 * Returns a currency value if the given currency code exists
 * @param {FormDataEvent} event - form submit event
 */
async function getCurrency(event) {
	// Fetch Data from API
	// API URL - https://api.exchangerate-api.com/v4/latest/USD
	// Verify if the passed Country Code Exists
	// If exists - return the value of the currency
	// Else - show currency code entered is wrong
	event.preventDefault()
	const currencyCode = document.getElementById('currencyInput').value
	const resultsDiv = document.getElementById('results')
	try {
		const response = await fetch(
			'https://api.exchangerate-api.com/v4/latest/USD'
		)
		const data = await response.json()
		if (data.rates.hasOwnProperty(currencyCode)) {
			const currencyRate = data.rates[currencyCode]
			resultsDiv.textContent = `1 USD = ${currencyRate} ${currencyCode}`
		} else {
			resultsDiv.textContent = `${currencyCode} does not exist`
		}
	} catch (error) {
		resultsDiv.textContent = `${currencyCode} does not exist`
	}
}
