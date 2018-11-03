$(document).ready(function()	{

    	$("a").click( function(){
        	$(".section").load($(this).attr("href")).hide().fadeIn();
            	return(false);

    }); 
}); 