import { O as Oe, s as sendForm } from './hoisted-ee803d20.js';
import { S as Swiper, N as Navigation } from '../bundle/navigation.cea5f486.js';
import { P as Pagination } from '../bundle/pagination.56447480.js';

const oneClickButton = document.querySelector('[href="#anketa"]');
if (oneClickButton) {
  oneClickButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    new Oe([{ src: "#anketa" }], {
      compact: false,
      autoFocus: false
    });
  });
}
const form = document.querySelector("#anketa form.modal__stack");
const button = document.querySelector("#anketa .button");
if (button instanceof HTMLElement && form instanceof HTMLFormElement) {
  form.addEventListener("submit", async (e) => {
    if (e.currentTarget instanceof HTMLFormElement) {
      e.preventDefault();
      try {
        button.classList.add("button--loading");
        const loader = document.createElement("div");
        loader.classList.remove("icon-check");
        loader.classList.add("icon-spin");
        loader.classList.add("animation-spin");
        loader.style.zIndex = "2";
        loader.style.fontSize = "26px";
        button.append(loader);
        const formData = new FormData(e.currentTarget);
        await sendForm(formData);
        if (form instanceof HTMLFormElement) form.reset();
        loader.remove();
        Oe.close();
        button.classList.remove("button--loading");
        const submodal = new Oe([{ src: "#contact" }], {
          closeButton: false,
          compact: false,
          autoFocus: false
        });
        const close = document.querySelector("#contact .button");
        if (close) {
          close.addEventListener("click", () => submodal.close());
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
}

new Swiper(".about-swiper__swiper", {
  modules: [Navigation, Pagination],
  centeredSlides: true,
  loop: true,
  speed: 500,
  breakpoints: {
    320: {
      spaceBetween: 12,
      slidesPerView: 1.15,
      slidesOffsetBefore: -15
    },
    400: {
      spaceBetween: 12,
      slidesPerView: 1.5
    },
    577: {
      spaceBetween: 15,
      slidesPerView: 2
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    993: {
      slidesPerView: 2.6,
      spaceBetween: 25,
      slidesOffsetBefore: -32
    }
  },
  // centerInsufficientSlides: true,
  preventClicks: true,
  navigation: {
    nextEl: ".about-swiper__next",
    prevEl: ".about-swiper__prev"
  },
  pagination: {
    el: ".about-swiper__pagination",
    type: "bullets",
    clickable: true
  },
  on: {
    // click: (e) => {
    //   if (e.activeIndex < e.clickedIndex) {
    //     e.slideNext();
    //   }
    //   if (e.activeIndex > e.clickedIndex) {
    //     e.slidePrev();
    //   }
    // },
  }
});
Oe.bind(".about-swiper__slide", {
  groupAll: true,
  compact: false,
  Images: {
    initialSize: "fit",
    zoom: false
  }
});
