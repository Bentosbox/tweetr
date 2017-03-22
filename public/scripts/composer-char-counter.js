$(document).ready(function() {
  $(".new-tweet textarea").on("keyup", function() {
    var maxLength = 140;
    var negLength = 0;
    myLength = maxLength - $(this).val().length;
    if (myLength < 0) {
      $(this).siblings('.counter').css("color", "red");
    }
      $(this).siblings('.counter').text(myLength);
  });
});