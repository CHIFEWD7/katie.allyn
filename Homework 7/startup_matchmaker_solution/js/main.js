$('.hamburger').on('click', function (e) {
  e.preventDefault();

	  if ($(".showNav")[0]){
	    $('nav').slideUp();
	    $('nav').removeClass('showNav');
	    // Do something if class exists
	} else {
	      $('nav').slideDown();
	      console.log ( 'nav slid down!' );
	      $('nav').addClass('showNav');
	}


});


//  $(window).resize(function() {
//   if ($(window).width() > 768) {
//     alert('More than 768');
//     $('nav').addClass('blue');
//     $("nav").css("display", "block");

//  }

// });

// I tried using the commented out code above to make sure the nav shows back up if I've resize the window to >768 after using the hamburger to make it disappear. It's glitchy, and it forces the nav to appear under the hamburger when I make the screen smaller again. Any thoughts on how I can make this work? Thanks!