// Click event for '#fahrenheit_to_celsius' button 
$('#fahrenheit_to_celsius').on('click', function () {
	// Grab the value of what the user puts into the input and store it into a 'userValue' variable
	var userValue = $('#temperature').val();

	// Call the 'getCelcius' function, passing it the 'userValue' and store the result returned into a 'convertedValue' variable
	var convertedValue = getCelcius(userValue);

	// Output the result in the '#result' element on the page
	$("#result").html(userValue + "&deg;F = " + convertedValue + "&deg;C");

	// Run function 'resetInput' (look below)
	resetInput();
});


// Click event for '#celsius_to_fahrenheit' button 
$('#celsius_to_fahrenheit').on('click', function () {
	// Grab the value of what the user puts into the input and store it into a 'userValue' variable
	var userValue = $('#temperature').val();

	// Call the 'getFahrenheight' function, passing it the 'userValue' and store the result returned into a 'convertedValue' variable
	var convertedValue = getFahrenheight(userValue);

	// Output the result in the '#result' element on the page
	$("#result").html(userValue + "&deg;C = " + convertedValue + "&deg;F");

	// Run function 'resetInput' (look below)
	resetInput();
});

// Declare 'getCelcius' function that returns a Celcius after being given a Fahrenheit 
function getCelcius(fahrenheit){
	var fahrenheit = parseFloat(fahrenheit);

	var celsius = (fahrenheit - 32) / 1.8;
	celsius = celsius.toFixed(0);

	return celsius;
}

// Declare 'getFahrenheight' function that returns a Fahrenheight after being given a Celcius
function getFahrenheight(celsius){
	var celsius = parseFloat(celsius);

	var fahrenheit = 1.8 * celsius + 32;
	fahrenheit = fahrenheit.toFixed(0);

	return fahrenheit;
}

// Declare 'resetInput' function that clears the '#temperature' input 
function resetInput(){
	$('#temperature').val('');