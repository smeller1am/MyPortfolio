import { Fancybox } from "@fancyapps/ui";
import { cartAdd, type CartResponse } from "./api";
import { formatPrice } from "./utils";

function openProductAddedModal(product: CartResponse["product"]) {
  const modal = new Fancybox([{ src: "#product" }], {
    compact: false,
    autoFocus: false,
  });

  const modalNode = document.getElementById("product");

  if (modalNode) {
    modalNode.querySelector(".modal__product-title")!.textContent =
      product.title;
    modalNode.querySelector(".modal__product-price")!.textContent =
      formatPrice(product.sale ?? product.price);
    (
      modalNode.querySelector(".modal__product-image")! as HTMLImageElement
    ).src = product.img;
  }

  const close = document
    .getElementById("product")
    ?.querySelector(".button--close");

  if (close) close.addEventListener("click", () => modal.close());
}

function setCartCount(count: number) {
  const counters = document.querySelectorAll(".header__buy");
  counters.forEach((counter) => {
    if (counter instanceof HTMLElement) {
      counter.setAttribute("data-count", String(count));
    }
  });
}

function setCartPrice(sum: number) {
  const price = document.querySelector(".header__desktop-price");
  if (price instanceof HTMLElement) {
    price.innerText = String(sum);
  }
}

export const addToCartAction = async (
  id: string | number,
  variation?: string | number,
) => {
  const res = await cartAdd(+id, variation ? +variation : undefined);

  setCartCount(res.count);
  setCartPrice(res.sum);
  openProductAddedModal(res.product);

  return res;
};

const miniBuyButtonHandler: EventListener = async (e) => {
  e.preventDefault();
  const button = e.currentTarget as HTMLElement;
  const cardNode = button.closest(".product-card") as HTMLElement;

  const id = cardNode.dataset.id;
  const variation = cardNode.getAttribute("data-var") ?? undefined;

  if (id) {
    const button = e.currentTarget as HTMLElement;
    try {
      button.classList.add("icon-spin", "animation-spin");
      button.classList.remove("icon-cart-arrow");
      await addToCartAction(id, variation);
    } finally {
      button.classList.remove("icon-spin", "animation-spin");
      button.classList.add("icon-cart-arrow");
    }
  }
};

const miniBuyButtonHandlerCompare: EventListener = async (e) => {
  e.preventDefault();
  const button = e.currentTarget as HTMLElement;
  const cardNode = button.closest(".compare-card") as HTMLElement;

  const id = cardNode.dataset.id;
  const variation = cardNode.getAttribute("data-var") ?? undefined;

  if (id) {
    const button = e.currentTarget as HTMLElement;
    try {
      button.classList.add("icon-spin", "animation-spin");
      button.classList.remove("icon-cart-arrow");
      await addToCartAction(id, variation);
    } finally {
      button.classList.remove("icon-spin", "animation-spin");
      button.classList.add("icon-cart-arrow");
    }
  }
};

export const setUpMiniBuyButtons = () => {
  const miniButtonNodes = document.querySelectorAll(
    ".product-card .product-buy",
  );

  miniButtonNodes.forEach((miniButton) => {
    miniButton?.removeEventListener("click", miniBuyButtonHandler);
    miniButton?.addEventListener("click", miniBuyButtonHandler);
  });

  const miniButtonNodesCompare = document.querySelectorAll(
    ".compare-card .product-buy",
  );

  miniButtonNodesCompare.forEach((miniButton) => {
    miniButton?.removeEventListener("click", miniBuyButtonHandlerCompare);
    miniButton?.addEventListener("click", miniBuyButtonHandlerCompare);
  });
};
