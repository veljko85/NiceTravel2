$(document).ready(function(){

	$(".homeSection").show().load("templates/homeSection.html");


	$(".hamburger").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		$(".navBar").slideToggle(300);



	});


	$(".navBar a").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		$(".navBar").slideToggle(300);

		$(".homeSection").hide();

		$(".section").fadeIn();

		$(".section").load($(this).attr("href")).hide().fadeIn();
        	return(false);
		




		
	});

});