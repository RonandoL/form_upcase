$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var sentenceInput = $("input#sentence").val().toUpperCase();

    $(".sentence").text(sentenceInput);

    $("#results").show();

    event.preventDefault();
  });
});
