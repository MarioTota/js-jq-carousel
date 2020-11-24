$(document).ready(function () {


  $(".far.fa-caret-square-right").click(
    function () {


    if ($(".uno").hasClass("active") == true) {
      $(".uno").removeClass("active");
      $(".uno").next().addClass("active");
    } else if ($(".due").hasClass("active") == true) {
      $(".due").removeClass("active");
      $(".due").next().addClass("active");
     } else if ($(".tre").hasClass("active") == true) {
      $(".tre").removeClass("active");
      $(".tre").next().addClass("active");
     } else if ($(".quattro").hasClass("active") == true) {
      $(".quattro").removeClass("active");
      $(".uno").next().addClass("active");
    }

      // $("img").removeClass("active");

      // $("img:nth-of-type(1)").next().addClass("active");


    }
  )


});
