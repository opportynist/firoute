import Swiper from "swiper";

export function Slider() {
  let sliders = document.querySelector("._swiper");
  if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];
      if (!slider.classList.contains("swiper-bild")) {
        let slider_items = slider.children;
        if (slider_items) {
          for (let index = 0; index < slider_items.length; index++) {
            let el = slider_items[index];
            el.classList.add("swiper-slide");
          }
        }
        let slider_content = slider.innerHTML;
        let slider_wrapper = document.createElement("div");
        slider_wrapper.classList.add("swiper-wrapper");
        slider_wrapper.innerHTML = slider_content;
        slider.innerHTML = "";
        slider.appendChild(slider_wrapper);
        slider.classList.add("swaiper-bild");

        if (slider.classList.contains("_swiper_scroll")) {
          let sliderScroll = document.createElement("div");
          sliderScroll.classList.add("swiper-scrollbar");
          slider.appendChild(sliderScroll);
        }
      }
      if (slider.classList.contains("_galerry")) {
      }
    }
    sliders_dild_collback();
  }
  function slider_bild_calback(params) {}

  let sliderScrollItems = document.querySelectorAll("._swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItems.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }

  function slider_bild_calback(params) {}
  if (document.querySelector(".slider-main__body")) {
    new Swiper(".slider-main__body", {
      observer: true,
      observeParents: true,
      sliderPerView: 1,
      spaceBetween: 32,
      watchOverflow: true,
      speed: 800,
      loop: true,
      loopAdditionalSlides: 5,
      preloadImages: false,
      parallax: true,
      //Dots
      pagination: {
        el: ".controls-slider-main__dotts",
        clickable: true,
      },
      //arrows
      navigation: {
        nextEl: ".slider-main .slider-arrow_next",
        nextEl: ".slider-main .slider-arrow_prev",
      },
    });
  }
}
