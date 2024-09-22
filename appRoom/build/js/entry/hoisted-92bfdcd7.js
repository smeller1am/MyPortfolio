import { e as deleteTab, g as compareDelete } from './hoisted-ee803d20.js';
import { n as nextTick, d as elementTransitionEnd, S as Swiper, N as Navigation } from '../bundle/navigation.cea5f486.js';

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight();
          });
        }
        elementTransitionEnd(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElements = typeof swiper.params.controller.control === 'string' ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
      controlElements.forEach(controlElement => {
        if (!swiper.controller.control) swiper.controller.control = [];
        if (controlElement && controlElement.swiper) {
          swiper.controller.control.push(controlElement.swiper);
        } else if (controlElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onControllerSwiper = e => {
            swiper.controller.control.push(e.detail[0]);
            swiper.update();
            controlElement.removeEventListener(eventName, onControllerSwiper);
          };
          controlElement.addEventListener(eventName, onControllerSwiper);
        }
      });
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}

const tagWrapper = document.querySelector(".compare__tags");
const tabWrapper = document.querySelector(".compare__tabs");
if (tagWrapper instanceof HTMLElement && tabWrapper instanceof HTMLElement) {
  const triggers = tagWrapper.querySelectorAll(".category-tag");
  const contents = tabWrapper.querySelectorAll(".compare__content");
  tabWrapper.querySelectorAll(".category-tag__close");
  triggers.forEach((trigger, index) => {
    trigger.setAttribute("data-tab", String(index + 1));
    if (index === 0) {
      trigger.classList.add("category-tag--active");
    }
  });
  contents.forEach((content, index) => {
    content.setAttribute("data-tab", String(index + 1));
    if (index === 0) {
      content.classList.add("compare__content--active");
      content.classList.add("compare__content--opacity");
    }
  });
  const clickHandler = async (event) => {
    event.preventDefault();
    if (event.target?.classList.contains("category-tag__close")) {
      event.stopPropagation();
      const parent = event.target.closest(".category-tag");
      const { count } = await deleteTab(+parent.dataset.id);
      if (count === 0) {
        window.location.reload();
      }
      setTimeout(function() {
        document.querySelector(".compare__content--active")?.remove();
        document.querySelector(".category-tag")?.classList.add("category-tag--active");
        document.querySelector(".compare__content")?.classList.add("compare__content--active");
        setTimeout(() => {
          document.querySelector(".compare__content")?.classList.add("compare__content--opacity");
        }, 200);
      }, 1);
      parent.remove();
      setCompareCount(count);
    }
    triggers.forEach((t) => {
      t.classList.remove("category-tag--active");
    });
    contents.forEach((c) => {
      c.classList.remove("compare__content--active");
      c.classList.remove("compare__content--opacity");
    });
    if (event.target instanceof Element && tagWrapper && tabWrapper) {
      let parent = null;
      if (event.target.classList.contains("category-tag")) {
        parent = event.target;
      }
      if (event.target.parentElement?.classList.contains("category-tag")) {
        parent = event.target.parentElement;
      }
      if (parent) {
        const index = parent.getAttribute("data-tab");
        const selectedTrigger = tagWrapper.querySelector(`[data-tab="${index}"]`);
        if (selectedTrigger) {
          selectedTrigger.classList.add("category-tag--active");
        }
        const selectedContent = tabWrapper.querySelector(`[data-tab="${index}"]`);
        if (selectedContent) {
          selectedContent.classList.add("compare__content--active");
          setTimeout(() => {
            selectedContent.classList.add("compare__content--opacity");
          }, 200);
        }
      }
    }
  };
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", clickHandler);
  });
}
function setCompareCount(count) {
  const counters = document.querySelectorAll(".header__compare");
  counters.forEach((counter) => {
    if (counter instanceof HTMLElement) {
      counter.setAttribute("data-count", String(count));
    }
  });
}

const compareSwipers = document.querySelectorAll(".compare-swiper");
const breakpoints = {
  320: {
    slidesPerView: 1
  },
  769: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  993: {
    slidesPerView: 4,
    spaceBetween: 30
  }
};
compareSwipers.forEach((swiper) => setupSwipers(swiper));
function setupSwipers(swiper) {
  const topSwiper = swiper.querySelector(".compare-swiper__swiper");
  const tableSwipers = swiper.querySelectorAll(".compare-swiper__table-row");
  const prev = swiper.querySelector(".compare-swiper__prev");
  const next = swiper.querySelector(".compare-swiper__next");
  const counter = swiper.querySelector(".compare-swiper__counter");
  if (topSwiper instanceof HTMLElement && prev instanceof HTMLElement && next instanceof HTMLElement && counter instanceof HTMLElement && tableSwipers.length) {
    let setCounter = function(element, current, max) {
      element.innerText = `${current} из ${max}`;
    };
    const navigation = {
      nextEl: next,
      prevEl: prev
    };
    const top = new Swiper(topSwiper, {
      modules: [Navigation, Controller],
      breakpoints,
      navigation,
      on: {
        init: (swiper2) => setCounter(counter, 1, swiper2.slides.length),
        activeIndexChange: (swiper2) => setCounter(counter, swiper2.activeIndex + 1, swiper2.slides.length)
      }
    });
    let swipers = [];
    tableSwipers.forEach((row) => {
      if (row instanceof HTMLElement) {
        const rowSwiper = new Swiper(row, {
          modules: [Controller],
          breakpoints: {
            320: {
              slidesPerView: 1
            },
            769: {
              slidesPerView: 3
            },
            993: {
              slidesPerView: 4
            }
          }
          // allowSlideNext: false,
          // allowSlidePrev: false,
        });
        rowSwiper.controller.control = top;
        swipers.push(rowSwiper);
      }
    });
    top.controller.control = swipers;
  }
}

const closes = document.querySelectorAll(".compare-card__close");
closes.forEach((close) => {
  close.addEventListener("click", async (e) => {
    e.preventDefault();
    if (e.target instanceof HTMLElement) {
      const product = e.target.getAttribute("data-id");
      const category = e.target.getAttribute("data-category");
      if (product && category) {
        try {
          const data = await compareDelete(+product, +category);
          if (data) {
            location.reload();
          }
        } catch (error) {
        }
      }
    }
  });
});
