$(document).ready(function(){

	$(".hamburger").click(function(){

		$(".line2").fadeToggle();
		$(".line1").toggleClass("change1");
		$(".line3").toggleClass("change2");


		$(".navBar").slideToggle(300);




	});


	$(".navBar a").click(function(){

		$(".line2").fadeToggle();
		$(".line1").toggleClass("change1");
		$(".line3").toggleClass("change2");

		$(".navBar").slideToggle(300);



		$(".section").fadeIn();

		$(".section").load($(this).attr("href")).hide().fadeIn();
        	return(false);
		




		
	});

});