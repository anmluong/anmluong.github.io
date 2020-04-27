$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scroll').css("visibility", "visible");
    } else {
      $('#scroll').css("visibility", "hidden");
    }
  });
  $('#scroll').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 125);
    return false;
  });
});