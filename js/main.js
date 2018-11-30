


$('.carousel').carousel();



$(document).ready(function(){

	$(".homeSection").load("templates/homeSection.html"); 
	$(".bottom").load("templates/bottom.html"); 
	$(".ct p").fadeIn(2000);
	$(".navBar").load("templates/navBar.html"); 






	$(".hamburger").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		

		$(".navBar").toggleClass("navBarHeight");
	});

	$(".navBar a").click(function(){

		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		$(".navBar").toggleClass("navBarHeight");


		$(this).children(".gray").hide();
		$(this).children(".color").show();
		

	});
	


});

     