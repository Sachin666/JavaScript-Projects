const sliderImages = document.querySelectorAll(".slide-in");

function debounce(func, wait = 20, immediate = true) {
  let timeout;

  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  sliderImages.forEach((slider) => {
    const slideIn = window.scrollY + window.innerHeight - slider.height / 2;

    const imgBottom = slider.offsetTop + slider.height;

    const isHalfShown = slideIn > slider.offsetTop;

    const isNotScrollPast = window.scrollY < imgBottom;

    if (isHalfShown && isNotScrollPast) {
      slider.classList.add("active");
    } else {
      slider.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
