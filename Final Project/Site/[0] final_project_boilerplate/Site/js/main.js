$(document).ready(function(evt) {

  console.log('Animations Boilerplate is a go.');





	$('.hamburger').on('click', function (e) {
	  	e.preventDefault();

	  

		if ($("nav.active")[0]){
			$('.hamburger').toggleClass('activeX');
			$('.content').removeClass('slidingContent');
			$('nav').slideUp(300, function(){
				$(this).removeClass('active').css('display','');
				
			});
		} else {
			$('.hamburger').toggleClass('activeX');
			$('.content').addClass('slidingContent');
		 	$('nav').slideDown(300, function(){
				$(this).addClass('active');
				
			});
		}


	});


	$('.expand').on('click', function (e) {
	  e.preventDefault();
	  		$(this).children('.line').toggleClass('active');

			    $(this).parent('.menuCategory').siblings('.menuItems').slideToggle('showItems')


	});




	$('.why').on('click', function(e) {
		$('.blurb').addClass('sliderLeft');
	    $('.pawRight').addClass("pawIn").delay(300).queue(function(next){
	    		$(this).removeClass("pawIn");
	    	next();
		});
	});







	

});