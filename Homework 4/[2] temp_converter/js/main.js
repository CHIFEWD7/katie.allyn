
// Be sure to use descriptive names for variables!!


// when the user clicks on the fahrenheit to celsius button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user


// when the user clicks on the celsius to fahrenheit button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user
/*
$('#fahrenheit_to_celsius').on('click', function () {
	var fahrenheit = $('#temperature').val();
	fahrenheit = parseFloat(fahrenheit);
	var celsius = (fahrenheit - 32) / 1.8;
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
	celsius = celsius.toFixed(2);
	// Hint: http://dev.w3.org/html5/html-author/charref
	$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");
	$('#temperature').val('');
});
$('#celsius_to_fahrenheit').on('click', function () {
	var celsius = $('#temperature').val();
	celsius = parseFloat(celsius);
	var fahrenheit = 1.8 * celsius + 32;
	fahrenheit = fahrenheit.toFixed(2);
	$("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");
	$('#temperature').val('');
});
 */



var celsius;
var fahrenheit;
var input;


// create the function of converting the input to celsius
function getCelsius(temperature) {
	// defines that the result should be the input converted to float, and then have that input converted with the math!
	var result=(parseFloat(temperature - 32) / 1.8);
	// defines that 'celcius' should be the result, but with only two decimals
	celsius = result.toFixed(2);
}


// creatae a function to convert the input to fahrenheit
function getFahrenheit(temperature) {
	// defines what the result should be, taking the user input called "temperature", converting to a float, and then doing the math to it
	var result=(parseFloat(temperature * 1.8 + 32));
	// defining the "fahrenheit" value as the result, but fixed to just two decimals
	fahrenheit= result.toFixed(2);
}

function empty(temperature) {
	if (temperature===null || temperature==="") {
		// $("#result").html("Please enter a value!!");
		$("#result").hide();
		$(".errorMessage").fadeIn();
		$("#temperature").addClass("error");
      return false;
	}
}

// activating the F to C button, creating function on click
$('#fahrenheit_to_celsius').on('click', function(){
	// defining that the  input is connected to the #temperature id, and to get the value of it
	var input= $("#temperature").val();
	// saying to run the getCelsius function on the input given in #temperature
	 getCelsius(input);

	// Hint: http://dev.w3.org/html5/html-author/charref
	// change the content in the #result html to show the users original input is equal to X in celsius
	$("#result").html( input + "&deg;F = " + celsius + "&deg;C");

	empty(input);
});

// activating the C to F button, creating function on click
$('#celsius_to_fahrenheit').on('click', function(){
	// defining that the  input is connected to the #temperature id, and to get the value of it
	var input= $("#temperature").val();
	// saying to run the getCelsius function on the input given in #temperature
	 getFahrenheit(input);

	// Hint: http://dev.w3.org/html5/html-author/charref
	// change the content in the #result html to show the users original input is equal to X in celsius
	$("#result").html( input + "&deg;C = " + fahrenheit + "&deg;F");
	// calls the empty function
	empty(input);
		
});

// if input has no value on click, change .html of "result" to show error message
