$(document).ready(function()	{

    	$("a").click( function(){


			$(".load-btn-wrap").show();
	        $(".load-btn-wrap").delay(700).fadeOut();

	        $(".section2").load($(this).attr("href")).hide().fadeIn();
            	return(false); 

    }); 

    	$(".navBar a").click(function(){


		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");

		$(".navBar").slideToggle(300);

		$(".section").show();


	   	$(".section2").load($(this).attr("href")).hide().fadeIn();
        	return(false);

		
	});
}); 
