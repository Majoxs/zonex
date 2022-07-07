import Swiper from '../vendor/swiper-bundle.min';
import vars from '../_vars';

const swiper = new Swiper(vars.bannerSlider, {
  loop: true,
  containerModifierClass: 'banner-slider-',
  slidesPerView: 1,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: true,
  },
});