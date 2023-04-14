import "./_vendor";
import vars from "./_vars";
import "./_functions";
// import "./_components";

import { validateForms } from "./functions/validate-forms";
import Cookies from "./vendor/js.cookie.min.js";

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
  ScrollReveal().reveal(".hero__info, .benefits__inner, .section__subtitle", {
    origin: "right",
    delay: 400,
  });
  ScrollReveal().reveal(".section__title", { origin: "left", delay: 200 });
  ScrollReveal().reveal(".tabs__nav, .object__title", {
    origin: "left",
    delay: 400,
  });
  ScrollReveal().reveal(".tabs__content, .object__media", {
    origin: "right",
    delay: 600,
  });
  ScrollReveal().reveal(".certificates__inner, .contact-inner__container", {
    origin: "bottom",
    delay: 400,
  });
  ScrollReveal().reveal(".about__inner", { origin: "bottom", delay: 600 });
};

document.addEventListener("DOMContentLoaded", () => {
  // калькулятор

  const calculatorForm = document.querySelector('.calculator');

  if (calculatorForm) {

    const limit = 2.3;

    const countCalc = calculatorForm.querySelector('#count');
    let counter = calculatorForm.querySelector('#counter');
    let errFloor = calculatorForm.querySelector('#err-floor');
    let errSquare = calculatorForm.querySelector('#err-square');
    let errType = calculatorForm.querySelector('#err-type');
    let errHeight = calculatorForm.querySelector('#err-height');

    countCalc.addEventListener('click', (e) => {
      e.preventDefault();
      counter.innerHTML ='';
      errType.innerHTML = '';
      errFloor.innerHTML = '';
      errSquare.innerHTML = '';
      errHeight.innerHTML = '';
      let type = calculatorForm.querySelector('#type').value;
      if (type == 0) {
        errType.innerHTML = 'Выберите тип вентиляции'
      } else {type = +type}
      console.log('type ' + type);
      let floor = calculatorForm.querySelector('#floor').value;
      if (floor == 0) {
        errFloor.innerHTML = 'Выберите этаж помещения'
      } else { floor = +floor}
      console.log('floor ' + floor);
      let square = calculatorForm.querySelector('#square').value;
      if (square == 0) {
        errSquare.innerHTML = 'Введите площадь'
      } else {
        square = +square;
      }
      console.log('square ' + square);
      let height = calculatorForm.querySelector('#height').value;
      if (height == 0) {
        errHeight.innerHTML = 'Введите высоту'
      } else { height = +height}
      console.log('height ' + height);

      if ((type != 0) && (floor != 0) && square && height) {
        counter.innerHTML = Math.ceil(( height * limit) + type + floor + (square * 300));
      }


    })
  }


  // валидация форм и отправка почты

  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    const succContactForm = document.getElementById("succ-contact");

    if (Cookies.get("succContactForm") == "Yes") {
      succContactForm.classList.add("message--show");
      succContactForm.innerHTML = "Ваши контакты успешно отправлены";
      contactForm.classList.add("is-hidden");
    } else {
      const rulesContact = [
        {
          ruleSelector: ".input-name",
          rules: [
            {
              rule: "minLength",
              value: 6,
              errorMessage: "Имя должно содержать не менее 6 символов!",
            },
            {
              rule: "maxLength",
              value: 20,
              errorMessage: "Имя должно содержать не более 20 символов!",
            },
            {
              rule: "required",
              value: true,
              errorMessage: "Введите свое имя!",
            },
          ],
        },
        // {
        //   ruleSelector: ".input-email",
        //   rules: [
        //     {
        //       rule: "minLength",
        //       value: 6,
        //     },
        //     {
        //       rule: "required",
        //       value: true,
        //       errorMessage: "Заполните email!",
        //     },
        //   ],
        // },
        {
          ruleSelector: ".input-tel",
          tel: true,
          telError: "Введите корректный телефон",
          rules: [
            {
              rule: "required",
              value: true,
              errorMessage: "Заполните телефон!",
            },
          ],
        },
      ];

      const afterFormContact = () => {
        succContactForm.classList.add("message--show");
        succContactForm.innerHTML =
          "Ваши контакты успешно отправлены! Мы свяжемся с Вами в ближайшее время.";
        contactForm.classList.add("is-hidden");
        // Cookies.set("succContactForm", "Yes", { expires: 30 });
      };

      validateForms("#contact-form", rulesContact, afterFormContact);
    }
  }

  const formConsultation = document.querySelector("#form-consultation");

  if (formConsultation) {
    const succConsForm = document.getElementById("succ-cons");

    if (Cookies.get("succConsForm") == "Yes") {
      succConsForm.classList.add("message--show");
      succConsForm.innerHTML = "Ваша заявка на консультацию успешно отправлена";
      contactForm.classList.add("is-hidden");
    } else {
      const rulesCons = [
        {
          ruleSelector: ".input-name",
          rules: [
            {
              rule: "minLength",
              value: 6,
              errorMessage: "Имя должно содержать не менее 6 символов!",
            },
            {
              rule: "maxLength",
              value: 20,
              errorMessage: "Имя должно содержать не более 20 символов!",
            },
            {
              rule: "required",
              value: true,
              errorMessage: "Введите свое имя!",
            },
          ],
        },
        {
          ruleSelector: ".input-tel",
          tel: true,
          telError: "Введите корректный телефон",
          rules: [
            {
              rule: "required",
              value: true,
              errorMessage: "Заполните телефон!",
            },
          ],
        },
      ];

      const afterFormCons = () => {
        succConsForm.classList.add("message--show");
        succConsForm.innerHTML =
          "Ваша заявка на консультацию успешно отправлена! Мы свяжемся с Вами в ближайшее время.";
        formConsultation.classList.add("is-hidden");
        // Cookies.set("succConsForm", "Yes", { expires: 30 });
      };

      validateForms("#form-consultation", rulesCons, afterFormCons);
    }
  }
});
