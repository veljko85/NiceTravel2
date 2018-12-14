
$(document).ready(function()	{

    	$("a").click( function(){

		$(".section").show();	
		
		$(".load-btn-wrap").show();
	        $(".load-btn-wrap").delay(700).fadeOut();

	        $(".section2").load($(this).attr("href")).hide().fadeIn();
            	return(false); 

    	}); 
if (document.body.clientWidth <= 1000 ){
	$(".navBar a").click(function(){

		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");
		$(".navBar").slideToggle();
	});	
};

}); 