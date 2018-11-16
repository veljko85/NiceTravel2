$(document).ready(function(){

	$(".homeSection").load("templates/homeSection.html"); 
	$(".bottom").load("templates/bottom.html"); 

	$('.carousel').carousel({
		interval : 4000;
	});




	$(".hamburger").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		$(".navBar").load("templates/navBar.html"); 

		$(".navBar").slideToggle(300);



	});




});