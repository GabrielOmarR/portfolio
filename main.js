import Menu from './assets/js/menu.js';
import Responsive from './assets/js/responsive.js';
import Validation from './assets/js/validation.js';
import scroll from './assets/js/scroll.js';
import { createGallery, filter } from './assets/js/createGallery.js';


const d = document;

d.addEventListener("DOMContentLoaded", () => {

    const $boxGallery = document.querySelector('.box-gallery');
    const $button = document.querySelectorAll('.filter-box');

    Responsive("habilidades", "(min-width: 1024px)");
    Menu();
    scroll();
    createGallery($boxGallery);
    filter($button, $boxGallery);
    Validation();
});



