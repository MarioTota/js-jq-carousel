$(document).ready(function () {
  function nextImg() {
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
      $(".uno").addClass("active");
    }
  }

  function prevImg() {
    if ($(".uno").hasClass("active") == true) {
      $(".uno").removeClass("active");
      $(".quattro").addClass("active");
    } else if ($(".quattro").hasClass("active") == true) {
      $(".quattro").removeClass("active");
      $(".quattro").prev().addClass("active");
    } else if ($(".tre").hasClass("active") == true) {
      $(".tre").removeClass("active");
      $(".tre").prev().addClass("active");
    } else if ($(".due").hasClass("active") == true) {
      $(".due").removeClass("active");
      $(".due").prev().addClass("active");
    }
  }

  $(".far.fa-caret-square-right").click(
    function nextImg() {
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
        $(".uno").addClass("active");
      }
    }
  )


  $(".far.fa-caret-square-left").click(
    function prevImg() {
      if ($(".uno").hasClass("active") == true) {
        $(".uno").removeClass("active");
        $(".quattro").addClass("active");
      } else if ($(".quattro").hasClass("active") == true) {
        $(".quattro").removeClass("active");
        $(".quattro").prev().addClass("active");
      } else if ($(".tre").hasClass("active") == true) {
        $(".tre").removeClass("active");
        $(".tre").prev().addClass("active");
      } else if ($(".due").hasClass("active") == true) {
        $(".due").removeClass("active");
        $(".due").prev().addClass("active");
      }
    }
  )

  $(document).keydown (
    function() {
      if (event.which == 39) {
        nextImg();
      } else if (event.which == 37) {
        prevImg();
      }
    }
  )

});
