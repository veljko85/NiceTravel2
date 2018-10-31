$(document).ready(function()	{

    	$(".dest").click( function(){
        	$(".section").load($(this).attr("href")).hide().fadeIn();
            	return(false);

    }); 
}); 