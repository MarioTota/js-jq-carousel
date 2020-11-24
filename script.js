$(document).ready(function () {

  $(".far.fa-caret-square-right").click(
    function() {
      $("img:nth-of-type(1)").removeClass("active");
      $("img:nth-of-type(1)").next().addClass("active");
    }
  )



});
