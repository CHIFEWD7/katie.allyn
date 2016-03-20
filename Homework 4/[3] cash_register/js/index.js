// Create a global variable for the total

// console.log("HI ffdools");
var total = 0;
var number = 0;
// var mulah;
// var number = 0;

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
	var parsed = parseFloat(num)
	number= parsed.toFixed(2);
};


$("#entry").submit(function() {
  
	var input= $("#newEntry").val();


	addNew(input);
		currency(total);
	currency2(input);

	$("#entries").append("<td>&dollar;" + number+ "</td>");
	
	$("#total").html( "&dollar;" + total);
	
	resetInput();
	return false;

});

function resetInput(){
    $("#newEntry").val("");
}


// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)

/*Questions 

1. Table alignment? td's and th's? When I try to add td's to the table, it adds outside the th, even when I call out the th and tell it not to.


3. Getting the .toFixed function to work on things other than the total? I know we worked on this during office hours, but the fix we found only worked for "entires" and not for the "total", so we were back to my original dilemna: that I can't create a generic one that works for both.



*/
