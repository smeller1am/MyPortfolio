import { c as cartAdd, O as Oe, f as formatPrice } from '../entry/hoisted-ee803d20.js';

function openProductAddedModal(product) {
  const modal = new Oe([{ src: "#product" }], {
    compact: false,
    autoFocus: false
  });
  const modalNode = document.getElementById("product");
  if (modalNode) {
    modalNode.querySelector(".modal__product-title").textContent = product.title;
    modalNode.querySelector(".modal__product-price").textContent = formatPrice(product.sale ?? product.price);
    modalNode.querySelector(".modal__product-image").src = product.img;
  }
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
const addToCartAction = async (id, variation) => {
  const res = await cartAdd(+id, variation ? +variation : void 0);
  setCartCount(res.count);
  setCartPrice(res.sum);
  openProductAddedModal(res.product);
  return res;
};
const miniBuyButtonHandler = async (e) => {
  e.preventDefault();
  const button = e.currentTarget;
  const cardNode = button.closest(".product-card");
  const id = cardNode.dataset.id;
  const variation = cardNode.getAttribute("data-var") ?? void 0;
  if (id) {
    const button2 = e.currentTarget;
    try {
      button2.classList.add("icon-spin", "animation-spin");
      button2.classList.remove("icon-cart-arrow");
      await addToCartAction(id, variation);
    } finally {
      button2.classList.remove("icon-spin", "animation-spin");
      button2.classList.add("icon-cart-arrow");
    }
  }
};
const miniBuyButtonHandlerCompare = async (e) => {
  e.preventDefault();
  const button = e.currentTarget;
  const cardNode = button.closest(".compare-card");
  const id = cardNode.dataset.id;
  const variation = cardNode.getAttribute("data-var") ?? void 0;
  if (id) {
    const button2 = e.currentTarget;
    try {
      button2.classList.add("icon-spin", "animation-spin");
      button2.classList.remove("icon-cart-arrow");
      await addToCartAction(id, variation);
    } finally {
      button2.classList.remove("icon-spin", "animation-spin");
      button2.classList.add("icon-cart-arrow");
    }
  }
};
const setUpMiniBuyButtons = () => {
  const miniButtonNodes = document.querySelectorAll(
    ".product-card .product-buy"
  );
  miniButtonNodes.forEach((miniButton) => {
    miniButton?.removeEventListener("click", miniBuyButtonHandler);
    miniButton?.addEventListener("click", miniBuyButtonHandler);
  });
  const miniButtonNodesCompare = document.querySelectorAll(
    ".compare-card .product-buy"
  );
  miniButtonNodesCompare.forEach((miniButton) => {
    miniButton?.removeEventListener("click", miniBuyButtonHandlerCompare);
    miniButton?.addEventListener("click", miniBuyButtonHandlerCompare);
  });
};

export { setUpMiniBuyButtons as s };
