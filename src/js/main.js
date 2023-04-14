import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if (isIE()) {
  document.querySelector("html").classList.add("ie");
}
if (isMobile.any()) {
  document.querySelector("html").classList.add("_touch");
}

window.onload = function () {
  document.addEventListener("click", documentActions);

  // Actions (делегирование события click)
  function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains("menu__arrow")) {
        targetElement.closest(".menu__item").classList.toggle("_hover");
      }
      if (
        !targetElement.closest(".menu__item") &&
        document.querySelectorAll(".menu__item._hover").length > 0
      ) {
        _removeClasses(
          document.querySelectorAll(".menu__item._hover"),
          "_hover"
        );
      }
    }
  }

  // Header
  const headerElement = document.querySelector(".header");

  const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
      headerElement.classList.remove("_scroll");
    } else {
      headerElement.classList.add("_scroll");
    }
  };

  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement);

  // active link menu scroll
  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id");

        if (document.querySelector(".nav__item a[href*=" + sectionId + "]")) {

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelector(".nav__item a[href*=" + sectionId + "]")
              .classList.add("active");
          } else {
              document
                .querySelector(".nav__item a[href*=" + sectionId + "]")
                .classList.remove("active");
            }
        }

    });
  }
  window.addEventListener("scroll", scrollActive);

  // animation scroll
  ScrollReveal({
    reset: false,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".hero__title", { origin: "left" });
  ScrollReveal().reveal(".hero__info, .benefits__inner, .section__subtitle", { origin: "right", delay: 400 });
  ScrollReveal().reveal(".section__title", { origin: "left", delay: 200 });
  ScrollReveal().reveal(".tabs__nav, .object__title", { origin: "left", delay: 400 });
  ScrollReveal().reveal(".tabs__content, .object__media", { origin: "right", delay: 600 });
  ScrollReveal().reveal(".certificates__inner, .contact-inner__container", { origin: "bottom",  delay: 400, });
  ScrollReveal().reveal(".about__inner", {origin: "bottom", delay: 600, });

};
