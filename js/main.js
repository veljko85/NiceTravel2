$(document).ready(function(){

	$(".homeSection").show().load("templates/homeSection.html"); 
	$(".bottom").load("templates/bottom.html"); 





	$(".hamburger").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		$(".navBar").load("templates/navBar.html"); 

		$(".navBar").slideToggle(300);



	});




});