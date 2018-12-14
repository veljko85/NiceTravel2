


$('.carousel').carousel();



$(document).ready(function(){

	$(".homeSection").load("templates/homeSection.html"); 
	$(".bottom").load("templates/bottom.html"); 
	$(".ct p").fadeIn(2000);






	$(".hamburger").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		

		$(".navBar").slideToggle();
	});

	$(".navBar a").click(function(){

		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");
		$(".navBar").slideUp();
	});	


		

	$(".navBar a").click(function(){
		$(".color").hide();
		$(this).find(".gray").hide();
		$(this).find(".color").show();
	});	

	
	


});

     