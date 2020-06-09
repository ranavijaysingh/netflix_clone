var flag=0;
$(document).ready(function(){
	$(".question").click(function(){
		

			$(this).parent().find(".ans").slideToggle("slow");
			$(this).parent().find(".question span i").toggleClass("fa-plus fa-times");
		
		
		
			
		
	});

});
