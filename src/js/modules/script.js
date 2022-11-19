export function HoverTachscrin() {
  window.onload = function () {
    document.addEventListener("click", documentActions);

    //   делегирование событий
    function documentActions(e) {
      const targetElement = e.target;
      if (window.innerWidth > 768) {
        if (targetElement.classList.contains("menu__arrow")) {
          targetElement.closest(".menu__item").classList.toggle("_hover");
        }
        if (
          !targetElement.closest(".menu__item") &&
          document.querySelectorAll(".menu__item._hover").length > 0
        ) {
          let removeClass = document.querySelectorAll(".menu__item._hover");
          for (let el of removeClass) {
            el.classList.remove("_hover");
          }
        }
        if (targetElement.classList.contains("search-form__icon")) {
          document.querySelector(".search-form").classList.toggle("_active");
        } else if (
          !targetElement.closest(".search-form") &&
          document.querySelector(".search-form._active")
        ) {
          document.querySelector(".search-form").classList.remove("_active");
        }
      }
    }
  };
}
