$(document).ready(function()	{

    	$(".destinacije").click( function(){
        	$(".section").load($(this).attr("href")).hide().fadeIn();
            	return(false);

    }); 
}); 