$(function() {
  var slideAtual = 1;
  var qtdSlides = $('.slide').length;

  $('.slide#slide1').addClass('active');

  $('#btnnext').click(function() {
    $('.slide#slide' + slideAtual).fadeOut(500, function() {
      slideAtual++;

      if (slideAtual > qtdSlides) {
        slideAtual = 1;
      }

      $('.slide#slide' + slideAtual).fadeIn(500);
      $('.slide#slide' + slideAtual).addClass('active');
    });

    $('.slide.active').removeClass('active');
  });

  $('#btnprev').click(function() {
    $('.slide#slide' + slideAtual).fadeOut(500, function() {
      slideAtual--;

      if (slideAtual < 1) {
        slideAtual = qtdSlides;
      }

      $('.slide#slide' + slideAtual).fadeIn(500);
      $('.slide#slide' + slideAtual).addClass('active');
    });

    $('.slide.active').removeClass('active');
  });
});