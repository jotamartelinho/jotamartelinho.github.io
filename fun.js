$(function(){

	abrir();

	XF();

	fechar1();


	function abrir(){
		$('.logoclasse').click(function(e){
			console.log("sasa")
			e.stopPropagation();
			$('.bgL').fadeIn();
		});
	}

	function XF(){

		var el = $('.XF');

		el.click(function(){
			$('.bgL').fadeOut();
		})

		var es = $('.body');

		es.click(function(){
			$('.bgL').fadeOut();
		})

		$('.bgconteudoL').click(function(e){
			e.stopPropagation();
		})
	}

	


	function fechar1(){

		var el = $('body');

		el.click(function(){
			$('.bgL').fadeOut();
		})

		$('.bgconteudoL').click(function(e){
			e.stopPropagation();
		})
	}


	
})
