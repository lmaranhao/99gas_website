(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('#down-button-link').click(function(){
      $('html, body').animate({
        scrollTop: $("#page-2-container").offset().top
      }, 500);
      return false;
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space