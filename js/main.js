$(document).ready(function(){

	$(".hamburger").click(function(){

		$(".line2").fadeToggle();
		$(".line1").toggleClass("change1");
		$(".line3").toggleClass("change2");

		$(".one").fadeToggle();
		$(".two").delay(100).fadeToggle();
		$(".three").delay(200).fadeToggle();
		$(".four").delay(300).fadeToggle();
		$(".five").delay(400).fadeToggle();
		$(".six").delay(500).fadeToggle();
		$(".seven").delay(600).fadeToggle();
		$(".eight").delay(700).fadeToggle();
		$(".nine").delay(800).fadeToggle();

	});

	$(".navBar a").click(function(){

		$(".line2").fadeToggle();
		$(".line1").toggleClass("change1");
		$(".line3").toggleClass("change2");

		$(".one").fadeToggle();
		$(".two").delay(100).fadeToggle();
		$(".three").delay(200).fadeToggle();
		$(".four").delay(300).fadeToggle();
		$(".five").delay(400).fadeToggle();
		$(".six").delay(500).fadeToggle();
		$(".seven").delay(600).fadeToggle();
		$(".eight").delay(700).fadeToggle();
		$(".nine").delay(800).fadeToggle();

		$(".section").fadeIn();

		$(".section").load($(this).attr("href")).hide().fadeIn();
        	return(false);
		




		
	});

});