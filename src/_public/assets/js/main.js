$(document).ready(function () {
  $(".c-gnav__item").click(function () {
    var href = $(this).attr("id");
    if ($(window).width() < 1024 && $(window).width() > 767) {
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top - 95,
        },
        "300"
      );
    } else if ($(window).width() < 768) {
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top - 57,
        },
        "300"
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top,
        },
        "300"
      );
    }
  });
  $(".c-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "300"
    );
  });
});
