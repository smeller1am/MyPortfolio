import { s as setUpMiniBuyButtons } from '../bundle/shared.4eb58ca5.js';
import { t as tippyAndFancybox } from '../bundle/popover.de9aa5ce.js';
import { O as Oe, s as sendForm, b as cartDelete, c as cartAdd, n as numberWithSpaces, h as cartHasProduct, i as compareAdd, g as compareDelete } from './hoisted-ee803d20.js';
import '../bundle/ProductSwiper.astro_astro_type_script_index_0_lang.3065db9c.js';
import './hoisted-1badb236.js';
import { g as getDocument, i as isObject, f as elementChildren, S as Swiper, N as Navigation } from '../bundle/navigation.cea5f486.js';
import { P as Pagination } from '../bundle/pagination.56447480.js';

function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if (isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener(eventName, onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}

setUpMiniBuyButtons();

const button = document.querySelector(".product-hero__info-trigger");
const tooltip = document.querySelector(".product-hero__info-text");
if (button instanceof HTMLElement && tooltip instanceof HTMLElement) {
  tippyAndFancybox(button, tooltip);
}
const allSpecs = document.querySelector(".product-hero__feature");
const table = document.querySelector(".product-tab");
if (allSpecs instanceof HTMLElement && table instanceof HTMLElement) {
  allSpecs.addEventListener("click", (e) => {
    e.preventDefault();
    const tab = table.querySelector('.tab__item[data-tab="2"]');
    if (tab instanceof HTMLElement) tab.click();
    table.scrollIntoView();
  });
}
const oneClickButton = document.querySelector('[href="#one-click"]');
if (oneClickButton) {
  oneClickButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    new Oe([{ src: "#one-click" }], {
      compact: false,
      autoFocus: false
    });
  });
  const form = document.querySelector("#one-click form.modal__stack");
  const button2 = document.querySelector("#one-click .modal__stack .button");
  if (button2 instanceof HTMLElement && form instanceof HTMLFormElement) {
    form.addEventListener("submit", async (e) => {
      if (e.currentTarget instanceof HTMLFormElement) {
        e.preventDefault();
        try {
          button2.classList.add("button--loading");
          const loader = document.createElement("div");
          loader.classList.remove("icon-check");
          loader.classList.add("icon-spin");
          loader.classList.add("animation-spin");
          loader.style.zIndex = "2";
          loader.style.fontSize = "26px";
          button2.append(loader);
          const formData = new FormData(e.currentTarget);
          const { order_id } = await sendForm(formData);
          if (form instanceof HTMLFormElement) form.reset();
          loader.remove();
          Oe.close();
          button2.classList.remove("button--loading");
          const orderIdNode = document.querySelector("#order #orderId");
          if (orderIdNode) {
            orderIdNode.textContent = `№${order_id}`;
          }
          const submodal = new Oe([{ src: "#order" }], {
            closeButton: false,
            compact: false,
            autoFocus: false
          });
          const close = document.querySelector("#order .button");
          if (close) {
            close.addEventListener("click", () => submodal.close());
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
}
const buyButton = document.querySelector(".add-cart-modal");
function openModal() {
  const modal = new Oe([{ src: "#product" }], {
    compact: false,
    autoFocus: false
  });
  const close = document.getElementById("product")?.querySelector(".button--close");
  if (close) close.addEventListener("click", () => modal.close());
}
function setCartCount(count) {
  const counters = document.querySelectorAll(".header__buy");
  counters.forEach((counter) => {
    if (counter instanceof HTMLElement) {
      counter.setAttribute("data-count", String(count));
    }
  });
}
function setCartPrice(sum) {
  const price = document.querySelector(".header__desktop-price");
  if (price instanceof HTMLElement) {
    price.innerText = String(sum);
  }
}
function getID(element) {
  const id = element.getAttribute("data-productid");
  return id ? +id : -1;
}
function getVariant() {
  const variant = document.querySelector(".product-hero__text-p--active[data-id]")?.getAttribute("data-id");
  return variant ? +variant : void 0;
}
function getState(element) {
  const state = element.getAttribute("data-checkincart");
  return state === "true" ? true : false;
}
function setState(element, state) {
  element.setAttribute("data-checkincart", String(state));
}
const buyHandle = async (e) => {
  e.preventDefault();
  const actionElement = document.querySelector(".product-hero__action");
  if (actionElement instanceof HTMLElement) {
    const id = getID(actionElement);
    const icon = buyButton?.querySelector(".button__icon");
    if (id > 0 && buyButton instanceof HTMLElement && icon instanceof HTMLElement) {
      try {
        if (getState(actionElement)) {
          buyButton.style.pointerEvents = "none";
          buyButton.classList.add("button--loading");
          icon.classList.remove("icon-check");
          icon.classList.add("icon-spin");
          icon.classList.add("animation-spin");
          const { count, sum } = await cartDelete(+id, getVariant());
          icon.classList.remove("icon-spin");
          icon.classList.add("icon-cart");
          icon.classList.remove("animation-spin");
          buyButton.classList.remove("button--loading");
          buyButton.removeAttribute("style");
          const span = buyButton.querySelector("span");
          if (span instanceof HTMLElement) span.innerText = "купить";
          setCartCount(count);
          setCartPrice(sum);
          setState(actionElement, false);
        } else {
          buyButton.style.pointerEvents = "none";
          buyButton.classList.add("button--loading");
          icon.classList.remove("icon-cart");
          icon.classList.add("icon-spin");
          icon.classList.add("animation-spin");
          const { count, sum } = await cartAdd(+id, getVariant());
          icon.classList.remove("icon-spin");
          icon.classList.add("icon-check");
          icon.classList.remove("animation-spin");
          buyButton.removeAttribute("style");
          buyButton.classList.remove("button--loading");
          const span = buyButton.querySelector("span");
          if (span instanceof HTMLElement) span.innerText = "в корзине";
          setCartCount(count);
          setCartPrice(sum);
          openModal();
          setState(actionElement, true);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  }
};
if (buyButton instanceof HTMLElement) {
  buyButton.addEventListener("click", buyHandle);
}
const variants = document.querySelectorAll(".product-hero__text-p[data-id]");
const domPrice = document.querySelector(".product-hero__price");
const domSale = document.querySelector(".product-hero__sale");
const domGreen = document.querySelector(".product-hero__green");
const domPay = document.querySelector(".product-hero__info span");
const variantHandle = (e) => {
  hasProduct();
  if (e.currentTarget instanceof HTMLElement) {
    const price = e.currentTarget.getAttribute("data-price");
    const sale = e.currentTarget.getAttribute("data-sale");
    const variant = e.currentTarget.getAttribute("data-variant");
    const pay = e.currentTarget.getAttribute("data-pay");
    if (pay) {
      if (pay && domPay instanceof HTMLElement) {
        domPay.innerText = pay + " ₽/мес.";
      }
    }
    if (sale) {
      if (sale && domPrice instanceof HTMLElement) {
        domPrice.style.display = "block";
        domPrice.innerText = numberWithSpaces(+sale);
      }
      if (price && domSale instanceof HTMLElement) {
        domSale.style.display = "block";
        domSale.innerText = numberWithSpaces(+price);
      }
      if (sale && price && domGreen instanceof HTMLElement) {
        domGreen.style.display = "flex";
        domGreen.innerText = String(numberWithSpaces(+sale - +price));
      }
    } else {
      if (price && domPrice instanceof HTMLElement) {
        domPrice.style.display = "block";
        domPrice.innerText = numberWithSpaces(+price);
      }
      if (domSale instanceof HTMLElement) {
        domSale.style.display = "none";
      }
      if (domGreen instanceof HTMLElement) {
        domGreen.style.display = "none";
      }
    }
    variants.forEach((variant2) => {
      variant2.classList.remove("product-hero__text-p--active");
    });
    e.currentTarget.classList.add("product-hero__text-p--active");
    if (variant) {
      var queryParams = new URLSearchParams(window.location.search);
      queryParams.set("variant", variant);
      history.replaceState(null, "", "?" + queryParams.toString());
    }
  }
};
variants.forEach((variant, index) => {
  variant.addEventListener("click", variantHandle);
});
function initVariant() {
  const urlParams = new URLSearchParams(window.location.search);
  const variant = urlParams.get("variant") || 0;
  const firstVariant = document.querySelector(`[data-variant='${variant}']`);
  if (variant && firstVariant instanceof HTMLElement) {
    firstVariant.click();
  }
}
initVariant();
async function hasProduct() {
  const actionElement = document.querySelector(".product-hero__action");
  const buyButton2 = document.querySelector(".add-cart-modal");
  const icon = buyButton2?.querySelector(".button__icon");
  if (actionElement instanceof HTMLElement && buyButton2 instanceof HTMLElement && icon instanceof HTMLElement) {
    try {
      buyButton2.classList.add("button--loading");
      buyButton2.style.pointerEvents = "none";
      icon.classList.remove("icon-cart");
      icon.classList.add("icon-spin");
      icon.classList.add("animation-spin");
      const realState = await cartHasProduct(getID(actionElement), getVariant());
      const inputVar = document.querySelector('[name="variation_id"]');
      if (inputVar instanceof HTMLInputElement && getVariant()) {
        inputVar.value = String(getVariant());
      }
      icon.classList.remove("icon-spin");
      icon.classList.add("icon-cart");
      icon.classList.remove("animation-spin");
      buyButton2.classList.remove("button--loading");
      buyButton2.removeAttribute("style");
      const span = buyButton2.querySelector("span");
      if (span instanceof HTMLElement) {
        span.innerText = realState ? "в корзине" : "купить";
      }
      setState(actionElement, realState);
    } catch (error) {
      console.log(error);
    }
  }
}
if (variants.length) hasProduct();

const items = document.querySelectorAll(".product-compare");
items.forEach((item) => {
  if (item) {
    item.setAttribute("data-isAdd", "true");
    const id = item.getAttribute("data-productid");
    const category = item.getAttribute("data-category");
    item.addEventListener("click", async () => {
      if (id && category) {
        try {
          let isAdd = JSON.parse(item.getAttribute("data-isadd") ?? "");
          const icon = item.querySelector(".button__icon");
          const text = item.querySelector(".product-compare-text");
          item.style.pointerEvents = "none";
          item.classList.add("button--loading");
          icon?.classList.remove("icon-compare");
          icon?.classList.add("icon-spin");
          icon?.classList.add("animation-spin");
          const { count } = isAdd ? await compareAdd(+id, +category) : await compareDelete(+id, +category);
          setCompareCount(count);
          if (text) {
            text.innerText = isAdd ? "В сравнении" : "Сравнить";
          }
          item.setAttribute("data-isadd", isAdd ? "false" : "true");
          item.style.pointerEvents = "auto";
          if (isAdd !== "" && text.textContent === "В сравнении") {
            new Oe(
              [
                {
                  src: "#compare-success"
                }
              ],
              {
                closeButton: false,
                compact: false,
                autoFocus: false
              }
            );
            const close = document.querySelectorAll(".button--jsClose");
            if (close) {
              close.forEach(function(item2) {
                item2.addEventListener("click", () => Oe.close());
              });
            }
          }
          item.classList.remove("button--loading");
          icon?.classList.add("icon-compare");
          icon?.classList.remove("icon-spin");
          icon?.classList.remove("animation-spin");
        } catch {
        }
      }
    });
  }
});
function setCompareCount(count) {
  const counters = document.querySelectorAll(".header__compare");
  counters.forEach((counter) => {
    if (counter instanceof HTMLElement) {
      counter.setAttribute("data-count", String(count));
    }
  });
}

const thumbs = new Swiper(".preview-swiper__thumbs", {
  modules: [Navigation, Thumb],
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true
});
new Swiper(".preview-swiper__main", {
  modules: [Navigation, Thumb, Pagination],
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  thumbs: { swiper: thumbs },
  navigation: {
    nextEl: ".preview-swiper__next",
    prevEl: ".preview-swiper__prev"
  },
  pagination: {
    el: ".preview-swiper__pagination",
    type: "bullets",
    clickable: true
  }
});
Oe.bind(".preview-swiper__main-item", {
  groupAll: true,
  compact: false,
  dragToClose: false,
  Images: {
    initialSize: "fit",
    zoom: false
  }
});
