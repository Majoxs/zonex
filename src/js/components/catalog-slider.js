import Swiper from '../vendor/swiper-bundle.min';
import vars from '../_vars';

const catalogSlider = new Swiper(vars.catalogSlider, {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.hero-next-btn',
    prevEl: '.hero-prev-btn'
  }
});
