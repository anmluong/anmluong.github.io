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
  $('#scroll').on("keydown", function(event){
    if (event.keyCode == 13) {
      $("html, body").animate({
      scrollTop: 0
    }, 125);
    return false;
    }
  });
});
$('#carousel').on('keydown', function(e) {
    if (e.keyCode == 37) {  // left arrow
        $('#carousel').carousel('prev')
    } else {
        if (e.keyCode == 39) {  // right arrow
            $('#carousel').carousel('next')
        }
    }
});
$('#carousel2').on('keydown', function(e) {
    if (e.keyCode == 37) {  // left arrow
        $('#carousel2').carousel('prev')
    } else {
        if (e.keyCode == 39) {  // right arrow
            $('#carousel2').carousel('next')
        }
    }
});