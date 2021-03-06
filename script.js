$(document).ready(function () {
//------------- due funzioni generiche-------------------------------
  function nextImg() {
    if ($(".uno").hasClass("active")) {
      $(".uno").removeClass("active");
      $(".uno").next().addClass("active");
    } else if ($(".due").hasClass("active")) {
      $(".due").removeClass("active");
      $(".due").next().addClass("active");
    } else if ($(".tre").hasClass("active")) {
      $(".tre").removeClass("active");
      $(".tre").next().addClass("active");
    } else if ($(".quattro").hasClass("active")) {
      $(".quattro").removeClass("active");
      $(".uno").addClass("active");
    }
  }

  function prevImg() {
    if ($(".uno").hasClass("active")) {
      $(".uno").removeClass("active");
      $(".quattro").addClass("active");
    } else if ($(".quattro").hasClass("active")) {
      $(".quattro").removeClass("active");
      $(".quattro").prev().addClass("active");
    } else if ($(".tre").hasClass("active")) {
      $(".tre").removeClass("active");
      $(".tre").prev().addClass("active");
    } else if ($(".due").hasClass("active")) {
      $(".due").removeClass("active");
      $(".due").prev().addClass("active");
    }
  }
//------------------spostamento foto al click delle freccette---------

  $(".far.fa-caret-square-right").click(
    function nextImg() {
      if ($(".uno").hasClass("active")) {
        $(".uno").removeClass("active");
        $(".uno").next().addClass("active");
      } else if ($(".due").hasClass("active")) {
        $(".due").removeClass("active");
        $(".due").next().addClass("active");
      } else if ($(".tre").hasClass("active")) {
        $(".tre").removeClass("active");
        $(".tre").next().addClass("active");
      } else if ($(".quattro").hasClass("active")) {
        $(".quattro").removeClass("active");
        $(".uno").addClass("active");
      }
    }
  )

  $(".far.fa-caret-square-left").click(
    function prevImg() {
      if ($(".uno").hasClass("active")) {
        $(".uno").removeClass("active");
        $(".quattro").addClass("active");
      } else if ($(".quattro").hasClass("active")) {
        $(".quattro").removeClass("active");
        $(".quattro").prev().addClass("active");
      } else if ($(".tre").hasClass("active")) {
        $(".tre").removeClass("active");
        $(".tre").prev().addClass("active");
      } else if ($(".due").hasClass("active")) {
        $(".due").removeClass("active");
        $(".due").prev().addClass("active");
      }
    }
  )
//--------------------movimento con freccette------------------------
  $(document).keydown (
    function() {
      if (event.which == 39) {
        nextImg();
      } else if (event.which == 37) {
        prevImg();
      }
    }
  )
//-------------------Click dei pallini-------------------------------

  $(".fas.fa-circle.uno").click(
    function() {
      if ($("img.uno, .fas.fa-circle.uno").hasClass("active")) {
        $("img.due, .fas.fa-circle.due", 
          "img.tre, .fas.fa-circle.tre", 
          "img.quattro, .fas.fa-circle.quattro").removeClass("active");
      } else if ($(".due, .fas.fa-circle.due").hasClass("active")) {
        $("img.due, .fas.fa-circle.due").removeClass("active");
        $("img.uno, .fas.fa-circle.uno").addClass("active");
      } else if ($(".tre, .fas.fa-circle.tre").hasClass("active")) {
        $("img.tre, .fas.fa-circle.tre").removeClass("active");
        $("img.uno, .fas.fa-circle.uno").addClass("active");
      } else if ($(".quattro, .fas.fa-circle.quattro").hasClass("active")) {
        $("img.quattro, .fas.fa-circle.quattro").removeClass("active");
        $("img.uno, .fas.fa-circle.uno").addClass("active");
      }
    }
  )

  $(".fas.fa-circle.due").click(
    function() {
      if ($("img.uno, .fas.fa-circle.uno").hasClass("active")) {
        $("img.uno, .fas.fa-circle.uno").removeClass("active");
        $("img.due, .fas.fa-circle.due").addClass("active");
      } else if ($(".due, .fas.fa-circle.due").hasClass("active")) {
        $("img.uno, .fas.fa-circle.uno", 
          "img.tre, .fas.fa-circle.tre", 
          "img.quattro, .fas.fa-circle.quattro").removeClass("active");
      } else if ($(".tre, .fas.fa-circle.tre").hasClass("active")) {
        $("img.tre, .fas.fa-circle.tre").removeClass("active");
        $("img.due, .fas.fa-circle.due").addClass("active");
      } else if ($(".quattro, .fas.fa-circle.quattro").hasClass("active")) {
        $("img.quattro, .fas.fa-circle.quattro").removeClass("active");
        $("img.due, .fas.fa-circle.due").addClass("active");
      }
    }
  )

  $(".fas.fa-circle.tre").click(
    function() {
      if ($("img.uno, .fas.fa-circle.uno").hasClass("active")) {
        $("img.uno, .fas.fa-circle.uno").removeClass("active");
        $("img.tre, .fas.fa-circle.tre").addClass("active");
      } else if ($(".due, .fas.fa-circle.due").hasClass("active")) {
        $("img.due, .fas.fa-circle.due").removeClass("active");
        $("img.tre, .fas.fa-circle.tre").addClass("active");
      } else if ($(".tre, .fas.fa-circle.tre").hasClass("active")) {
        $("img.uno, .fas.fa-circle.uno",
          "img.due, .fas.fa-circle.due",
          "img.quattro, .fas.fa-circle.quattro").removeClass("active");
      } else if ($(".quattro, .fas.fa-circle.quattro").hasClass("active")) {
        $("img.quattro, .fas.fa-circle.quattro").removeClass("active");
        $("img.tre, .fas.fa-circle.tre").addClass("active");
      }
    }
  )

  $(".fas.fa-circle.quattro").click(
    function() {
      if ($("img.uno, .fas.fa-circle.uno").hasClass("active")) {
        $("img.uno, .fas.fa-circle.uno").removeClass("active");
        $("img.quattro, .fas.fa-circle.quattro").addClass("active");
      } else if ($(".due, .fas.fa-circle.due").hasClass("active")) {
        $("img.due, .fas.fa-circle.due").removeClass("active");
        $("img.quattro, .fas.fa-circle.quattro").addClass("active");
      } else if ($(".tre, .fas.fa-circle.tre").hasClass("active")) {
        $("img.tre, .fas.fa-circle.tre").removeClass("active");
        $("img.quattro, .fas.fa-circle.quattro").addClass("active");
      } else if ($(".quattro, .fas.fa-circle.quattro").hasClass("active")) {
        $( "img.uno, .fas.fa-circle.uno",
           "img.due, .fas.fa-circle.due", 
           "img.tre, .fas.fa-circle.tre").removeClass("active");
      }
    }
  )

});
