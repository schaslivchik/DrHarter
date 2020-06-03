$('.main-menu-trigger').click(function () {
  $('body').toggleClass('scroll-hidden')
  $(this).toggleClass('active-trigger');
  $('.main-menu').toggleClass('active-menu');
})