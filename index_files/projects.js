document.addEventListener('DOMContentLoaded', function () {
  tabsSwap('.projects', '.projects__toggle', '.projects__tab');
  initSlider('.projects__container', '.projects__pagination');
});

const tabsSwap = (section, toggle, tab) => {
  const sectionElements = document.querySelectorAll(section);
  sectionElements.forEach(sectionElement => {
    const toggles = sectionElement.querySelectorAll(toggle);
    const tabs = sectionElement.querySelectorAll(tab);

    if (toggles.length && tabs.length) {
      toggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
          toggles.forEach(button => button.classList.remove('active'));
          tabs.forEach(tab => tab.classList.remove('active'));

          toggle.classList.add('active');
          tabs[index].classList.add('active');
        });
      });
    }
  });
};

const initSlider = (sliderClass, pagination) => {
  const sliderArr = document.querySelectorAll(sliderClass);

  if (sliderArr.length) {
    sliderArr.forEach((element, index) => {
      let id = sliderClass.replace('.', '') + '_' + index;
      let paginationId = pagination.replace('.', '') + '_' + index;

      element.classList.add(id);
      element.querySelector(pagination).classList.add(paginationId);

      const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
        let swiper;
        breakpoint = window.matchMedia(breakpoint);
        const enableSwiper = function (className, settings) {
          swiper = new Swiper(className, settings);
        }
        const checker = function () {
          if (breakpoint.matches) {
            return enableSwiper(swiperClass, swiperSettings);
          } else {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;
          }
        };

        breakpoint.addEventListener('change', checker);
        checker();
      }

      resizableSwiper(
        '(max-width: 768px)',
        '.' + id,
        {
          slidesPerGroup: 1,

          breakpoints: {
            280: {
              slidesPerView: 1,
              spaceBetween: 0,
            },

            660: {
              slidesPerView: 2,
              spaceBetween: 12,
            },

          },

          pagination: {
            el: '.' + paginationId,
            clickable: true,
          },

          // autoplay: {
          //   delay: 7000,
          // },

          watchOverflow: true,

          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
        },
      );
    });
  }
};





