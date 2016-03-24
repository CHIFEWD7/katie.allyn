// Create a global variable for the total

var total = 0;
var number = 0;
price = 0;


// Create a function you can run when you submit the field Hint: .submit() in jQuery


	// add new input to existing total


function addNew(number) {
	total = (parseFloat(number) + parseFloat(total));
	return total;  
};

function currency(number) {
	total = total.toFixed(2);
};

function currency2(num){
	var parsed = parseFloat(num);
	number = parsed.toFixed(2);
};


function resetInput(num){
    $(num).val("");
}

function formatPrice(price) {

    formattedPrice = price.toFixed(2);
    return formattedPrice;

}
$("#entry").submit(function() {
  
	var input= $("#newEntry").val();

	addNew(input);

	currency(total);
	currency2(input);
	
	$('#entries').append('<tr><td></td><td>'+ number +'</td></tr>');

	$("#total").html( "&dollar;" + total);
	
	resetInput("#newEntry");
	return false;

});



/*  QUESTION FOR ADRIANA:


1. Getting the .toFixed function to work on things other than the total? I know we worked on this during office hours, but the fix we found only worked for "entires" and not for the "total", so we were back to my original dilemna: that I can't create a generic one that works for both.



*/



// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)


