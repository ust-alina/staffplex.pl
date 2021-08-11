$(document).ready(function() {
	const width = $(window).width();

	if( width >= 1070 ){
  var controller = new ScrollMagic.Controller();
    
  	var scene = new ScrollMagic.Scene({triggerElement: ".partners_jobs", duration: 300})
					// animate color and top border in relation to scroll position
					.setTween(".partners_jobs .main_title", {scale: 0.8}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: ".partners_jobs", duration: 300})
					// animate color and top border in relation to scroll position
					.setTween(".partners_jobs .partners_jobs_block .partners_jobs_block_img", {scale: 0.8}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: ".partners_workers", duration: 300})
					// animate color and top border in relation to scroll position
					.setTween(".partners_jobs .partners_jobs_block .partners_jobs_block_img", {scale: 0.4}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);

    /*----------------------------------------*/


		// get all slides
		var slides = $(".partners_coop_block");
    var slides2 = $(".partners_coop_block_img");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			var scene4 = new ScrollMagic.Scene({
                triggerHook: 'onLeave',
				duration: "500",
				triggerElement: slides[i]
				})
				.setPin(slides[i], {pushFollowers: false})
        .setTween(TweenMax.to(slides[i], 0.5, {y: "-100%", ease: Linear.easeNone, opacity:0}))
        .setClassToggle(slides[i], "visible") 
				.addTo(controller);


      for (var i=0; i<slides2.length; i++) {
		var scene5 = new ScrollMagic.Scene({
                triggerHook: 'onCenter',
				duration: "800",
				triggerElement: slides[i],
				offset: "400"
				})
				.setPin(slides2[i], {pushFollowers: false})
                .setClassToggle(slides2[i], "visible") 
				.addTo(controller);
        
		}
        
		}

        var scene6 = new ScrollMagic.Scene({triggerElement: '.partners_cooperation', duration: 4900})
					.setPin('.partners_cooperation .main_title_wrap', {pushFollowers: false})
					.addTo(controller);


		var scene7 = new ScrollMagic.Scene({
						triggerElement: ".seach_vacansi",
						duration: "600",
						offset: "500"
					})
					.setTween(".seach_vacansi img", 0.5, {left: "-100px"}) // trigger a TweenMax.to tween
					.addTo(controller);

	}
});


