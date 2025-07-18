 var foodSwiper = new Swiper(".food-swiper", {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        loopedSlides: 1,
      });
      const foodContents = document.querySelectorAll(".food-content");

      foodSwiper.on("slideChange", () => {
        const realIndex = foodSwiper.realIndex;
        foodContents.forEach((el) => el.classList.remove("active"));
        if (foodContents[realIndex]) {
          foodContents[realIndex].classList.add("active");
        }
      });
      foodSwiper.slides.forEach((slideEl) => {
        slideEl.addEventListener("click", () => {
          const realIndex = parseInt(
            slideEl.getAttribute("data-swiper-slide-index")
          );
          foodSwiper.slideToLoop(realIndex);
          foodContents.forEach((el) => el.classList.remove("active"));
          if (foodContents[realIndex]) {
            foodContents[realIndex].classList.add("active");
          }
        });
      });
      var libSwiper = new Swiper(".lib-swiper", {
        slidesPerView: "auto",
        spaceBetween: 15,
        loop: true,
        loopedSlides: 1,
        navigation: {
          nextEl: ".lib-next",
          prevEl: ".lib-prev",
        },

        mousewheel: true,
        keyboard: true,
      });
      const libNames = document.querySelectorAll(".lib-name-cn");
      libSwiper.on("slideChange", () => {
        const realIndex = libSwiper.realIndex;
        libNames.forEach((el, idx) => {
          if (idx === realIndex) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      });

      // Optionally, activate on click as well
      libNames.forEach((el, idx) => {
        el.addEventListener("click", () => {
          libSwiper.slideToLoop(idx);
        });
      });