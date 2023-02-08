$(document).ready(function () {
  function disableScroll() {
    var ycoord = $(window).scrollTop();
    $(".c-header__overlay").data("ycoord", ycoord);
    ycoord = ycoord * -1;
    $("body")
      .css("position", "fixed")
      .css("left", "0px")
      .css("right", "0px")
      .css("top", ycoord + "px");
  }
  function enableScroll() {
    $("body")
      .css("position", "")
      .css("left", "auto")
      .css("right", "auto")
      .css("top", "auto");
    $(window).scrollTop($(".c-header__overlay").data("ycoord"));
  }
  $(".c-gnav__item").click(function () {
    var href = $(this).attr("data-link");
    if ($(window).width() < 1024 && $(window).width() > 767) {
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top,
        },
        "300"
      );
    } else if ($(window).width() < 768) {
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top,
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
    $(".c-header__spnav").removeClass("c-header__spnav--active");
  });
  $(".c-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "300"
    );
  });
  $(".c-header__menu").click(function () {
    if ($(".c-header__spnav").hasClass("c-header__spnav--active")) {
      $(".c-header__spnav").removeClass("c-header__spnav--active");
      enableScroll();
    } else {
      $(".c-header__spnav").addClass("c-header__spnav--active");

      disableScroll();
    }
  });
});
