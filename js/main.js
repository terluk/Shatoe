$(document).ready(function(){
/*  $('.header_nav_link_first').mouseenter(function(){ 
    $('.header_nav_line_wide').addClass('header_bott_nav_line_showen') 
  });
  .mouseleave(function(){
    $('header_nav_line_wide').removeClass('header_bott_nav_line_showen')
  });
*/

  $( ".header_nav_link_first" ).mouseenter(function() {
    $( '.header_nav_line_wide' ).addClass('header_bott_nav_line_showen');
  }).mouseleave(function() {
    $( '.header_nav_line_wide' ).removeClass('header_bott_nav_line_showen');
  });

  $( ".header_bottom_nav_line" ).mouseenter(function() {
    $( '.header_nav_line_wide' ).addClass('header_bott_nav_line_showen');
  }).mouseleave(function() {
    $( '.header_nav_line_wide' ).removeClass('header_bott_nav_line_showen');
  });

  $(".inttitution_slider").owlCarousel({
      dots : true,
      nav : true,
      loop : true,
      items : 1,
  });
});