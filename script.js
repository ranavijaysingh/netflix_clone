var flag=0;
$(document).ready(function(){
	$(".question").click(function(){
		

			$(this).parent().find(".ans").slideToggle("slow");
			$(this).parent().find(".question span i").toggleClass("fas fa-times");
		
		
		
			
		
	});

});
/*
var arr_q=document.querySelectorAll(".question");
var arr_a=document.querySelectorAll(".ans");
for(var i=0;i<arr_q.length;i++)
{
	arr_q[i].addEventListener("click",function(){
		for(var j=0;j<arr_a.length;j++)
		{
				arr_a[j].classList.toggle(".main");	
		}
	});
}
*/