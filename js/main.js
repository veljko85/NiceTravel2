


$('.carousel').carousel();



$(document).ready(function(){

	$(".homeSection").load("templates/homeSection.html"); 
	$(".bottom").load("templates/bottom.html"); 
	$(".ct p").fadeIn(2000);
	$(".navBar").load("templates/navBar.html"); 





if (document.body.clientWidth <= 1000 ) {
	$(".hamburger").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		

		$(".navBar").slideToggle();
	});
};
if (document.body.clientWidth <= 1000 ){
	$(".navBar a").click(function(){

		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");
		$(".navBar").slideToggle();
	});	
};

		

	$(".navBar a").click(function(){
		$(this).children(".gray").hide();
		$(this).children(".color").show();
	});	

	
	


});

     