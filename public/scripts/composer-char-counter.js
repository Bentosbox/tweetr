$(document).ready(function() {
  $(".new-tweet textarea").on("keyup", function() {
    $(this).siblings('.counter').css("color", "black");
    var maxLength = 140;
    myLength = maxLength - $(this).val().length;
    if (myLength < 0) {
      $(this).siblings('.counter').css("color", "red");
    }
      $(this).siblings('.counter').text(myLength);
  });
});