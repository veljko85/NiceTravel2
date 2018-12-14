


$('.carousel').carousel();



$(document).ready(function(){

	$(".homeSection").load("templates/homeSection.html"); 
	$(".bottom").load("templates/bottom.html"); 
	$(".ct p").fadeIn(2000);





if (document.body.clientWidth <= 1000) {
	$(".hamburger").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		

		$(".navBar").slideToggle();
	});

	$(".navBar a").click(function(){

		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");
		$(".navBar").slideToggle();

		$(".section").show();	
		
		$(".load-btn-wrap").show();
	        $(".load-btn-wrap").delay(700).fadeOut();

	        $(".section2").load($(this).attr("href")).hide().fadeIn();
            	return(false); 

	});	

}
		
if (document.body.clientWidth > 1200){
	$(".navBar a").click(function(){
		$(".color").hide();
		$(this).find(".gray").hide();
		$(this).find(".color").show();
	});	
}
	
	


});

     