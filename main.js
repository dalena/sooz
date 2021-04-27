$(document).ready(function () {

    $(".darkmode").click(function () {
      $("html")
        .toggleClass("dark") 
        .css(
          $("html").hasClass("dark") 
            ? { backgroundColor:"#0e0e0e" }
            : { backgroundColor:"#fff" } 
        );
    });
  });

  
