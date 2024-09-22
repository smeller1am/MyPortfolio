import { t as tippyAndFancybox } from './popover.de9aa5ce.js';
import { d as sendTradeInForm, O as Oe } from '../entry/hoisted-ee803d20.js';

const button = document.querySelector(".contact-form__file-trigger");
const tooltip = document.querySelector(".contact-form__file-text");
if (button instanceof HTMLElement && tooltip instanceof HTMLElement) {
  tippyAndFancybox(button, tooltip);
}
const form = document.querySelector(".contact-form__form");
const formHandler = async (e) => {
  e.preventDefault();
  const phone = form?.querySelector('[name="phone"]');
  if (e.currentTarget instanceof HTMLFormElement && phone.value.length > 18) {
    const button2 = e.currentTarget.querySelector("button");
    if (button2 instanceof HTMLElement) {
      const loader = document.createElement("div");
      button2.classList.add("button--loading");
      loader.classList.remove("icon-check");
      loader.classList.add("icon-spin");
      loader.classList.add("animation-spin");
      loader.style.zIndex = "2";
      loader.style.fontSize = "26px";
      button2.append(loader);
      try {
        const formData = new FormData(e.currentTarget);
        await sendTradeInForm(formData);
        if (form instanceof HTMLFormElement) form.reset();
        const filesList = document.querySelector(".file__list");
        if (filesList) filesList.remove();
        const dotsEl = document.querySelectorAll(".contact-form__indicator-dot");
        dotsEl.forEach((el) => el.classList.remove("contact-form__indicator-dot--active"));
        const linesEl = document.querySelectorAll(".contact-form__indicator-line");
        linesEl.forEach((el) => el.classList.remove("contact-form__indicator-line--active"));
        const modal = new Oe([{ src: "#contact" }], {
          closeButton: false,
          compact: false,
          autoFocus: false
        });
        const close = document.querySelector("#contact .button");
        if (close) {
          close.addEventListener("click", () => modal.close());
        }
        document.querySelector(".contact-form__column p")?.remove();
      } catch (error) {
        console.log(error);
      } finally {
        loader.remove();
        button2.classList.remove("button--loading");
      }
    }
  } else {
    if (phone.value.length < 18) {
      let p = document.createElement("p");
      console.log(p);
      if (p) {
        p.textContent = "Номер введен не полностью";
        phone.insertAdjacentElement("afterend", p);
      }
    }
  }
};
if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", formHandler);
}
if (form instanceof HTMLFormElement) {
  let dotHandle = function() {
    const dotsEl = document.querySelectorAll(".contact-form__indicator-dot");
    dotsEl.forEach((el) => el.classList.remove("contact-form__indicator-dot--active"));
    const linesEl = document.querySelectorAll(".contact-form__indicator-line");
    linesEl.forEach((el) => el.classList.remove("contact-form__indicator-line--active"));
    for (const [key, value] of Object.entries(dots)) {
      if (!value) {
        dots.submit = false;
        return;
      }
      console.log(dots);
      const dot = document.querySelector(`.contact-form__indicator-dot[data-name="${key}"]`);
      if (dot instanceof HTMLElement) {
        dot.classList.add("contact-form__indicator-dot--active");
      }
      const line = document.querySelector(`.contact-form__indicator-line[data-name="${key}"]`);
      if (line instanceof HTMLElement) {
        line.classList.add("contact-form__indicator-line--active");
      }
    }
  };
  const name = form.querySelector('[name="name"]');
  const phone = form.querySelector('[name="phone"]');
  const device = form.querySelector('[name="device"]');
  const details = form.querySelector('[name="details"]');
  const file = form.querySelector('[name="file[]"]');
  const agree = form.querySelector('[name="agree"]');
  const dots = {
    name: false,
    phone: false,
    device: false,
    details: false,
    file: false,
    agree: false,
    submit: false
  };
  name.addEventListener("input", (e) => {
    if (e.target instanceof HTMLInputElement) {
      dots.name = Boolean(e.target.value);
      dotHandle();
    }
  });
  phone.addEventListener("input", (e) => {
    if (e.target instanceof HTMLInputElement) {
      if (phone.value.length > 18) {
        dots.phone = true;
        dotHandle();
      } else {
        dots.phone = false;
        dotHandle();
      }
    }
  });
  device.addEventListener("input", (e) => {
    if (e.target instanceof HTMLInputElement) {
      dots.device = Boolean(e.target.value);
      dotHandle();
    }
  });
  details.addEventListener("input", (e) => {
    if (e.target instanceof HTMLTextAreaElement) {
      dots.details = Boolean(e.target.value);
      dotHandle();
    }
  });
  file.addEventListener("input", (e) => {
    if (e.target instanceof HTMLInputElement) {
      dots.file = Boolean(e.target.files?.length);
      dotHandle();
    }
  });
  agree.addEventListener("change", (e) => {
    if (e.target instanceof HTMLInputElement) {
      dots.agree = Boolean(e.target.checked);
      dotHandle();
    }
  });
  form.addEventListener("submit", (e) => {
    if (e.target instanceof HTMLFormElement) {
      dots.submit = true;
      dotHandle();
    }
  });
}

const container = document.querySelector(".file");
const input = document.querySelector(".file__element");
if (container && input) {
  let updatePreview2 = function(selectedFiles2) {
    const r = list.querySelector(".file__row");
    if (r) r.remove();
    const c = list.querySelector(".file__col");
    if (c) c.remove();
    let row = null;
    var dt = new DataTransfer();
    if (!selectedFiles2.length && input instanceof HTMLInputElement) {
      input.value = "";
    }
    selectedFiles2.forEach((file) => {
      dt.items.add(file);
      if (!row) {
        row = document.createElement("div");
        row.classList.add("file__row");
        list.append(row);
      }
      row.append(createFileImage2(file));
      if (input instanceof HTMLInputElement) input.files = dt.files;
    });
  }, createCloseButton2 = function(file) {
    const close = document.createElement("div");
    close.classList.add("icon-close");
    close.classList.add("file__close");
    close.addEventListener("click", (e) => {
      e.preventDefault();
      const index = selectedFiles.indexOf(file);
      if (index > -1) {
        let s = new Set(selectedFiles);
        s.delete(file);
        selectedFiles = Array.from(s);
        updatePreview2(selectedFiles);
      }
    });
    return close;
  }, createFileImage2 = function(file) {
    const item = document.createElement("div");
    item.classList.add("file__image");
    item.append(createCloseButton2(file));
    const reader = new FileReader();
    reader.onloadend = () => {
      item.style.backgroundImage = `url(${reader.result})`;
    };
    reader.readAsDataURL(file);
    return item;
  };
  const list = document.createElement("div");
  list.classList.add("file__list");
  container.append(list);
  let selectedFiles = [];
  const onchangeHandler = (e) => {
    if (e.target instanceof HTMLInputElement && e.target.files) {
      const files = e.target.files;
      for (const file of files) {
        if (file.type.includes("image")) selectedFiles.push(file);
      }
    }
    if (selectedFiles.length) updatePreview2(selectedFiles);
  };
  input.addEventListener("change", onchangeHandler);
}
