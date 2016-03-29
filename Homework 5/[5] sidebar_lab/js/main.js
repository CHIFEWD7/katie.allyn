$('.hamburger').on('click', function (e) {
  e.preventDefault();

  		$('.sidebar').removeClass('slideOutClass');
  		$('.content').removeClass('pushTextOutClass');
		$('.sidebar').addClass('slideInClass');
		 $('.content').addClass('pushTextInClass');


});


$('.close').on('click', function (e) {
  e.preventDefault();
  	  	$('.sidebar').removeClass('slideInClass');
  		$('.content').removeClass('pushTextInClass');
    	$('.sidebar').addClass('slideOutClass');
    	$('.content').addClass('pushTextOutClass');

});


