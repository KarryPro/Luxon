$("document").ready(function() {

   //Smooth scrolling links
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

	//Making effect of search typing
	$(function(){
	   $("#typed").typed({
	   	strings: ['светильник', 'фонарь', 'лампа'],
	   	typeSpeed: 220,
	   	attr: 'placeholder',
	   	bindInputFocusEvents: true,
	   	loop: true,
	   	fadeOut: true
	   });
	});

	// Prevent Bootstrap menu from closing
  	$('.dropdown-menu').on('click', function(e) {
      if($(this).hasClass('dropdown-menu-form')) {
          e.stopPropagation();
      }
  	});

  	//Bootstrap slider
    $('#myCarousel').carousel({
        interval: false
    });
 
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click( function(){
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#myCarousel').carousel(id);
        /*$(this).toggleClass('fade').siblings().removeClass('fade');*/
        $(this).addClass('unfade');
        $('.thumbnail').not(this).removeClass('unfade');
    });	

});
