$(function() {
  $('.card').click(function() {
    $('html, body').animate({
      scrollTop: $('#Planos').offset().top - 80
    }, 450);
  });
});