$(document).ready(function () {
  const btnOpen = $(".btn-open");
  const menuPhone = $(".mobile-menu");
  const header = $(".header");
  const headerVisible = $(".header-visible");
  const logo = $(".logo");
  const logoDark = $(".logo-dark");
  const sep = $(".sep-1");
  const sep2 = $(".sep-2");
  const heroContent = $(".hero-content");
  const heroText = $(".hero-text");

  let isOpen = false;

  btnOpen.click(function () {
    menuPhone.toggleClass("active");
    sep.toggleClass("active");
    sep2.toggleClass("active");
    header.toggleClass("active");

    if (!isOpen) {
      logo.css("display", "none");
      logoDark.css("display", "block");
    } else {
      logo.css("display", "block");
      logoDark.css("display", "none");
    }

    isOpen = !isOpen;
  });

  const heroSep2 = $(".hero-img-sep2");
  const heroSep3 = $(".hero-img-sep3");

  $(window).on("load", function () {
    setTimeout(function () {
      heroSep2.addClass("active");
    }, 0);

    setTimeout(function () {
      heroSep3.addClass("active");
    }, 700);

    headerVisible.addClass("active");
    heroContent.addClass("active");
    heroText.addClass("active");
  });

  setTimeout(function () {
    $(".header-list-item").each(function (index) {
      setTimeout(
        function () {
          $(this).addClass("show");
        }.bind(this),
        index * 300
      );
    });
  }, 500);

  setTimeout(function () {
    $(".contact-num").addClass("show");
  }, 1800);

  setTimeout(function () {
    $(".lang").addClass("show");
  }, 2100);

  setTimeout(function () {
    $(".hero-text-one").addClass("show");
  }, 300);

  setTimeout(function () {
    $(".hero-text-two").addClass("show");
  }, 600);

  setTimeout(function () {
    $("#consultation-btn").addClass("show");
  }, 1000);

  setTimeout(function () {
    $(".hero-info").addClass("show");
  }, 1400);

  $(window).scroll(function () {
    if ($(this).scrollTop() == 500) {
      header.addClass("active");
    } else {
      header.removeClass("active");
    }
  });

  const btnForm = $(".mob-inv button");
  const formOverflow = $(".form-overflow");
  const btnFormOpen = $(".form-overflow .message span");

  btnForm.click(function () {
    formOverflow.addClass("active");
  });

  btnFormOpen.click(function () {
    formOverflow.removeClass("active");
  });
});

var lastScrollTop = 0;

$(window).on("scroll", function () {
  var scrollY = $(window).scrollTop();
  var header = $("header");
  console.log(scrollY);

  if (scrollY > lastScrollTop) {
    if (scrollY >= 500 && scrollY < 700) {
      header.addClass("active-start");
      header.removeClass("active-top");
    } else if (scrollY >= 700) {
      header.addClass("active-top");
      header.removeClass("active-start");
    }
  } else {
    header.removeClass("active-start");
    header.removeClass("active-top");
  }

  lastScrollTop = scrollY;
});
