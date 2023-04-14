// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck());

// Определение ширины экрана
import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from "./functions/burger";

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/disable-scroll';

// Реализация модального окна
import GraphModal from "graph-modal";
const modal = new GraphModal();

// Реализация табов
import GraphTabs from "graph-tabs";
const tabs = new GraphTabs("jobs");

// Получение высоты шапки сайта (не забудьте вызвать функцию)
import { getHeaderHeight } from "./functions/header-height";

getHeaderHeight();

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });



// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


let mql = window.matchMedia('(min-width: 1024px)');
let certSlider = false;

function certificateSliderInit() {
  let certificateSlider = new Swiper('.certificates__slider', {
    slidesPerView: 3,
    spaceBetween: 130,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 90,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 130,
      }
    },
    init: true
  });

  certSlider = true;
}

if (isDesktop()) {
  certificateSliderInit();
}

window.addEventListener('resize', () => {
  if (mql.matches) {
    let certificateSlider = new Swiper('.certificates__slider', {
      slidesPerView: 3,
      spaceBetween: 130,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 90,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 130,
        }
      },
      init: true
    });

    certSlider = true;
  } else {
    if (certSlider) {
      certificateSlider.destroy();
    }
  }
})

const objectsSlider = new Swiper('.objects__slider', {
  slidesPerView: 1,
  spaceBetween: 130,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const aboutSlider = new Swiper('.about__slider', {
  slidesPerView: 2,
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 90,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 130,
    }
  },
});

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
import SmoothScroll from "smooth-scroll";
const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
