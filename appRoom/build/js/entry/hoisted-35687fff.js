import { t as tippyAndFancybox } from '../bundle/popover.de9aa5ce.js';
import { a as sendOrder, O as Oe, b as cartDelete, c as cartAdd } from './hoisted-ee803d20.js';
import { s as setUpMiniBuyButtons } from '../bundle/shared.4eb58ca5.js';
import '../bundle/ProductSwiper.astro_astro_type_script_index_0_lang.3065db9c.js';
import '../bundle/navigation.cea5f486.js';

setUpMiniBuyButtons();
const checkItems = document.querySelectorAll(".cart__service-item");
checkItems.forEach((item) => showTip(item));
function showTip(element) {
  const button = element.querySelector(".cart__service-trigger");
  const tooltip = element.querySelector(".cart__service-text");
  if (button instanceof HTMLElement && tooltip instanceof HTMLElement) {
    tippyAndFancybox(button, tooltip);
  }
}
const form = document.querySelector(".cart__body");
const formHandler = async (e) => {
  e.preventDefault();
  if (e.currentTarget instanceof HTMLFormElement) {
    const sum = e.currentTarget.getAttribute("data-sum");
    if (sum && +sum > 0) {
      const button = e.currentTarget.querySelector("button");
      if (button instanceof HTMLElement) {
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
          let check = [];
          const newFD = new FormData();
          for (const [key, value] of formData) {
            if (key.includes("check")) {
              check.push(+key.split("-")[1]);
            } else {
              newFD.append(key, value);
            }
          }
          newFD.append("check", JSON.stringify(check));
          const { order_id } = await sendOrder(newFD);
          if (form instanceof HTMLFormElement) form.reset();
          loader.remove();
          button.classList.remove("button--loading");
          const orderIdNode = document.querySelector("#order #orderId");
          if (orderIdNode) {
            orderIdNode.textContent = `№${order_id}`;
          }
          const modal = new Oe([{ src: "#order" }], {
            closeButton: false,
            compact: false,
            autoFocus: false,
            on: {
              close: () => {
                window.location.href = "https://" + window.location.hostname;
              }
            }
          });
          const close = document.querySelector("#order .button");
          if (close) {
            close.addEventListener("click", () => {
              modal.close();
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", formHandler);
}

function setCartCount(count) {
  const counters = document.querySelectorAll(".header__buy");
  counters.forEach((counter) => {
    if (counter instanceof HTMLElement) {
      counter.setAttribute("data-count", String(count));
    }
  });
  const topElement = document.querySelector(".cart__count");
  if (topElement instanceof HTMLElement) {
    topElement.innerText = `${count} товаров`;
  }
}
function setCartPrice(sum) {
  const price = document.querySelector(".header__desktop-price");
  if (price instanceof HTMLElement) {
    price.innerText = String(sum);
  }
  const asideElement = document.getElementById("cartProductsSum");
  if (asideElement instanceof HTMLElement) {
    asideElement.innerText = String(sum);
  }
  const body = document.querySelector(".cart__body");
  if (body instanceof HTMLElement) {
    body.setAttribute("data-sum", String(sum));
  }
  let checkedSum = 0;
  const checkeds = document.querySelectorAll("[data-serviceprice]");
  const service = document.getElementById("cartServicesSum");
  const all = document.getElementById("allCartSum");
  checkeds.forEach((wrap) => {
    if (wrap instanceof HTMLElement) {
      const price2 = wrap.getAttribute("data-serviceprice");
      const checked = wrap.querySelector('[type="checkbox"]');
      if (price2 && checked instanceof HTMLInputElement && checked.checked) {
        checkedSum += +price2;
      }
      if (service) service.innerText = String(checkedSum);
      if (all) all.innerText = String(sum + checkedSum);
    }
  });
}
function setItemPrice(element, count) {
  const price = element.getAttribute("data-price");
  const place = element.querySelector(".cart-product__price");
  if (price && place instanceof HTMLElement) {
    place.innerText = String(+price * count);
  }
}
function disableButtons() {
  const action = document.querySelectorAll(".cart-product__action");
  action.forEach((item) => {
    if (item instanceof HTMLElement) item.style.pointerEvents = "none";
  });
}
function enableButtons() {
  const action = document.querySelectorAll(".cart-product__action");
  action.forEach((item) => {
    if (item instanceof HTMLElement) item.removeAttribute("style");
  });
}
async function itemsHandler(item) {
  function getID(element) {
    const id = element.getAttribute("data-productid");
    return id ? +id : -1;
  }
  function getVariant(element) {
    const variant = element.getAttribute("data-var");
    return variant ? +variant : void 0;
  }
  const deleteElement = item.querySelector(".cart-product__delete");
  const deleteIcon = deleteElement?.querySelector(
    ".cart-product__delete-icon"
  );
  if (deleteElement instanceof HTMLElement && deleteIcon instanceof HTMLElement) {
    deleteElement.addEventListener("click", async () => {
      try {
        const id = getID(item);
        const variant = getVariant(item);
        deleteIcon.classList.remove("icon-trash");
        deleteIcon.classList.add("icon-spin");
        deleteIcon.classList.add("animation-spin");
        disableButtons();
        const { sum, count, variation, product_id } = await cartDelete(
          id,
          variant
        );
        enableButtons();
        setCartCount(count);
        setCartPrice(sum);
        if (getID(item) === product_id || getVariant(item) === variation) {
          item.remove();
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
  const plus = item.querySelector(".cart-product__counter-plus");
  const minus = item.querySelector(".cart-product__counter-minus");
  const amount = item.querySelector(".cart-product__counter-amount");
  if (plus instanceof HTMLElement && minus instanceof HTMLElement && amount instanceof HTMLElement) {
    let stateCount = +amount.innerText;
    const id = getID(item);
    const variant = getVariant(item);
    plus.addEventListener("click", async () => {
      try {
        amount.innerText = "";
        amount.classList.add("icon-spin");
        amount.classList.add("animation-spin");
        disableButtons();
        const { count, sum } = await cartAdd(id, variant);
        stateCount++;
        enableButtons();
        amount.classList.remove("icon-spin");
        amount.classList.remove("animation-spin");
        amount.innerText = String(stateCount);
        setCartCount(count);
        setCartPrice(sum);
        setItemPrice(item, stateCount);
      } catch (e) {
      }
    });
    minus.addEventListener("click", async () => {
      try {
        amount.innerText = "";
        amount.classList.add("icon-spin");
        amount.classList.add("animation-spin");
        if (stateCount > 1) {
          disableButtons();
          const { count, sum } = await cartAdd(id, variant, -1);
          enableButtons();
          stateCount--;
          amount.classList.remove("icon-spin");
          amount.classList.remove("animation-spin");
          amount.innerText = String(stateCount);
          setCartCount(count);
          setCartPrice(sum);
          setItemPrice(item, stateCount);
        } else {
          disableButtons();
          const { sum, count, variation, product_id } = await cartDelete(
            id,
            variant
          );
          enableButtons();
          setCartCount(count);
          setCartPrice(sum);
          if (getID(item) === product_id || getVariant(item) === variation) {
            item.remove();
          }
        }
      } catch (e) {
      }
    });
  }
}
const items = document.querySelectorAll(".cart-product");
items.forEach((item) => {
  if (item instanceof HTMLElement) itemsHandler(item);
});
function serviceHandler(item) {
  const checkbox = item.querySelector('[type="checkbox"]');
  if (checkbox instanceof HTMLInputElement) {
    checkbox.addEventListener("change", () => {
      const productPrice = document.querySelector(".cart__body")?.getAttribute("data-sum");
      if (productPrice) setCartPrice(+productPrice);
    });
  }
}
const services = document.querySelectorAll("[data-serviceprice]");
services.forEach((item) => {
  if (item instanceof HTMLElement) serviceHandler(item);
});
