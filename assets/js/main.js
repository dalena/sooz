$(document).ready(function () {
  $(".darkmode").click(function () {
    $("html")
      .toggleClass("dark")
      .css(
        $("html").hasClass("dark") ? {
          backgroundColor: "#0e0e0e"
        } : {
          backgroundColor: "#fff"
        }
      );
  });

  $('h1').okshadow({
    textShadow: true,
    color: '#2f00ff',
    xMax: 12,
    yMax: 12,
    yOffset: 0,
    fuzzMin: 27,
    fuzzMax: 27,
  });
});