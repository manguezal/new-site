/*Hello World!*/
import React from 'react';
import Swiper from 'swiper';

require('!style!css!swiper/dist/css/swiper.css');
require('../scss/main.scss');


var swiper = new Swiper('.swiper-container', {
    paginationClickable: true,
    spaceBetween: 45
});