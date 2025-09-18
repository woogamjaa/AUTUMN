$(document).ready(function () {
  $('.header__toggle.open').on('click', function () {
    $('.header__nav').addClass('active');
    $(this).hide();
    $('.header__toggle.close').show();
  });

  $('.header__toggle.close').on('click', function () {
    $('.header__nav').removeClass('active');
    $(this).hide();
    $('.header__toggle.open').show();
  });
});
