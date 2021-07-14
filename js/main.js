$(document).ready(function(){

  

			$(".reviews_container").slick({
				dots: true,
				slidesToShow: 4,
				speed: 1000,
				responsive:[
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
	
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
	
						}
					}
				]
				
			});
	
	

	$('.partners_row_1').slick({
        dots: false,
		arrows: false,
        slidesToShow: 6,
        speed: 1000,   
		variableWidth: true, 
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
    });

	$('.partners_row_2').slick({
        dots: false,
		arrows: false,
        slidesToShow: 6,
        speed: 1000,  
		variableWidth: true,
		infinite: true, 
		autoplay: true,
		autoplaySpeed: 3000,
		rtl: true, 
    });

	
	$('.main_reviews_workers_tab').click(function() {
		$('.main_reviews_partners_tab').removeClass('active');
		$('.main_reviews_container_partners').removeClass('active');
		$(this).addClass('active');
		$('.main_reviews_container_workers').addClass('active');
	});
	
	
	$('.main_reviews_partners_tab').click(function() {
		$('.main_reviews_workers_tab').removeClass('active');
		$('.main_reviews_container_workers').removeClass('active');
		$(this).addClass('active');
		$('.main_reviews_container_partners').addClass('active');
	});



	$('#main_reviews_select').change(function(){
		var el = $(this).val();
		if (el==1) {
			$('.main_reviews_container_partners').removeClass('active');
		    $('.main_reviews_container_workers').addClass('active');
		} else {
		    $('.main_reviews_container_workers').removeClass('active');
		    $('.main_reviews_container_partners').addClass('active');
		}
	});

	
		
	
    

	$('.burger').click(function() {
		$('.burger_menu_wrap').toggleClass('open-menu');
		$('.header').toggleClass('open-menu');
		$('.burger').toggleClass('open-menu');
		$('.burger_menu').toggleClass('open-menu');
		$('body').toggleClass('fixed-page');
	});


});


$(function() {
	let header = $('.header');
	let burger = $('.burger');
	let hederHeight = header.height(); 
	 
	$(window).scroll(function() {
	  if($(this).scrollTop() > 1) {
	   header.addClass('header_fixed');
	   burger.addClass('visible');
	} else {
	 header.removeClass('header_fixed');
	 burger.removeClass('visible');
	  }
    });

});

