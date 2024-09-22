export function removeClass(element: Element, name: string) {
  element.classList.remove(name);
}

export function addClass(element: Element, name: string) {
  element.classList.add(name);
}

export function openDrawer(trigger: Element, container: Element) {
  let root = document.getElementsByTagName('html')[0];
  let main = document.querySelector(".main")
  // root.setAttribute('class', 'body-overflow');
  root.style.overflowY = "hidden";
  document.body.style.overflowY = "hidden";
  if (main instanceof HTMLElement) {
    main.style.overflowY = "hidden";
  }
  // document.body.classList.add("body-overflow");
  trigger.setAttribute("data-open", "true");
  trigger.classList.add("icon-close");
  trigger.classList.remove("icon-burger");
  if (container instanceof HTMLElement) container.style.left = "0";
}

export function closeDrawer(trigger: Element, container: Element) {
  let root = document.getElementsByTagName('html')[0];
  let main = document.querySelector(".main")
  // root.setAttribute( 'class', '' )
  root.style.overflowY = "auto";
  document.body.style.overflowY = "auto";
    if (main instanceof HTMLElement) {
    main.style.overflowY = "auto";
  }
  // document.body.classList.remove("body-overflow");
  trigger.setAttribute("data-open", "false");
  trigger.classList.remove("icon-close");
  trigger.classList.add("icon-burger");
  if (container instanceof HTMLElement) container.removeAttribute("style");
}

export function formatPrice(price: number) {
  return price.toLocaleString("ru");
}

export function numberWithSpaces(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}