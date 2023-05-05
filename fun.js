$(function(){

	abrir();
	abrir2();
	abrir3();


	fechar3();

	fechar1();
	fechar2();


	function abrir(){
		$('.logoclasse').click(function(e){
			console.log("sasa")
			e.stopPropagation();
			$('.bgL').fadeIn();
		});
	}


	function abrir2(){
		$('.carrinho').click(function(e){
			console.log("sasa")
			e.stopPropagation();
			$('.bgL2').fadeIn();
		});
	}

		function abrir3(){
		$('.btnadd2').click(function(e){
			console.log("sasa")
			e.stopPropagation();
			$('.bgL3').fadeIn();
		});
	}



	function fechar3(){

		var el = $('body');

		el.click(function(){
			$('.bgL3').fadeOut();
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

	function fechar2(){

		var el = $('body');

		el.click(function(){
			$('.bgL2').fadeOut();
		})

		$('.bgconteudoL').click(function(e){
			e.stopPropagation();
		})
	}


	
})
