
var request = require('request');
request('https://developer.salesforce.com/media/salesforce-cli/signatures/salesforcedx-46.1.5.sig', 
	(error, response, body) => {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body); // Print the HTML for the Google homepage.
	});