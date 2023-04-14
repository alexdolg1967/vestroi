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

  // валидация форм и отправка почты

  const formConsultation = document.querySelector("#form-consultation");

  if (formConsultation) {
    const succForm = document.getElementById("succ_reg");

    if (Cookies.get("succForm") == "Yes") {
      succForm.classList.add("message--show");
      succForm.innerHTML = "Ваше сообщение успешно отправлено";
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

      const afterFormCons = () => {
        succForm.classList.add("message--show");
        succForm.innerHTML =
          "Ваше сообщение успешно отправлено! Мы свяжемся с Вами в ближайшее время.";
        formConsultation.classList.add("is-hidden");
        // Cookies.set("succForm", "Yes", { expires: 30 });
      };

      validateForms('#form-consultation', rulesCons, afterFormCons);


    }

    // const validConsultation = new JustValidate(formConsultation);

    // validConsultation
    //   .addField(".input-name", [
    //     {
    //       rule: "minLength",
    //       value: 3,
    //       errorMessage: "Имя должно содержать не менее 3 символов",
    //     },
    //     {
    //       rule: "maxLength",
    //       value: 20,
    //       errorMessage: "Имя должно содержать не более 20 символов",
    //     },
    //     {
    //       rule: "customRegexp",
    //       value: /^[a-zA-Zа-яА-ЯёЁ]+$/,
    //       errorMessage: "Имя должно состоять только из букв",
    //     },
    //     {
    //       rule: "required",
    //       value: true,
    //       errorMessage: "Введите имя!",
    //     },
    //   ])
    //   .addField(".input-tel", [
    //     {
    //       rule: "required",
    //       tel:true,
    //       value: true,
    //       errorMessage: "Телефон обязателен",
    //     },
    //     {
    //       rule: "minLength",
    //       value: 11,
    //       errorMessage: "Телефон должен содержать не менее 11 символов",
    //     },
    //     {
    //       rule: "maxLength",
    //       value: 11,
    //       errorMessage: "Имя должно содержать не более 11 символов",
    //     },
    //   ])
    //   .onSuccess((event) => {
    //     console.log("Валидация формы успешно прошла", event);

    //     let formData = new FormData(event.target);

    //     console.log(...formData);

    //     let xhr = new XMLHttpRequest();

    //     xhr.onreadystatechange = function () {
    //       if (xhr.readyState === 4) {
    //         //  успешная отправка
    //         if (xhr.status === 200) {
    //           console.log("Отправлено");
    //           formConsultation.classList.add("is-hidden");
    //           succReg.classList.add("message--show");
    //           succReg.innerHTML = `<span>Ваша заяка успешно отправлена!</span>`;
    //           setTimeout(function () {
    //             window.location.href = "index.html";
    //           }, 3 * 1000);
    //         }

    //         // Email sending failed: Bad Request
    //         if (xhr.status != 200) {
    //           console.log("ошибка");
    //           formConsultation.classList.add("is-hidden");
    //           succReg.classList.add("message--show");
    //           succReg.innerHTML = `<span>Заявку отправить не удалось. Попробуйте пожалуйста позже...</span>`;
    //           setTimeout(function () {
    //             window.location.href = "index.html";
    //           }, 4 * 1000);
    //         }
    //         // Email sending failed: Bad Request
    //         if (xhr.status != 400) {
    //         }
    //         // Email sending failed: Unauthorized
    //         if (xhr.status != 401) {
    //         }
    //         // Email sending failed: Forbidden
    //         if (xhr.status === 402) {
    //         }
    //         // Email sending failed: Internal Server Error - ошибка сервера
    //         if (xhr.status === 403) {
    //         }
    //         // Email sending failed: An unknown error occurred
    //         if (xhr.status === 500) {
    //         }
    //       }
    //     };

    //     xhr.open("POST", "mail.php", true);
    //     xhr.send(formData);

    //     event.target.reset();
    //   });

  }
});
