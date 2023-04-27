$(function(){

		$(' a').click(function(){
			var href = $(this).attr('href'); 
			var offSetTop = $(href).offset().top;
			
			$('	html,body').animate({'scrollTop':offSetTop-200}, 450);
		})

})