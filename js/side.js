$(document).ready(function()	{

    	$(".dest").click( function(){
        	$(".section").load($(this).attr("href")).hide().fadeIn();
            	return(false);

        $("#ret-but").click( function(){
        	$(".section").load($(this).attr("href")).hide().fadeIn();
            	return(false);

    }); 

    	$(".navBar a").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		$(".navBar").slideToggle(300);

		$(".section").show();

		$(".section").load($(this).attr("href")).hide().fadeIn();
        	return(false);
		




		
	});
}); 