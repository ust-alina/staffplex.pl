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

	$('.praca_quest_block_title').click(function() {
		$(this).toggleClass('active');
		$(this).next().toggleClass('active');
        $('.praca_quest_block_title').not(this).removeClass('active')
		  .not(this).next().removeClass('active');
	});
    

	$('.media_que_tab').click(function() {
		$('.media_que_tab').not(this).removeClass('active');
		$(this).addClass('active');
		let number = $(this).index();
		let ell = $('.media_que_video_block').eq(number);
		$('.media_que_video_block').eq(number).addClass("active");
		$('.media_que_video_block').not(ell).removeClass("active");
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


	/*var target = $('.partners_cooperation');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    $('.partners_cooperation .main_title_wrap').css({'position': 'absolute'})
  }
});*/

});

