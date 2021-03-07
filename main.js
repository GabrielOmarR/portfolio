import Menu from './assets/js/menu.js';
import Responsive from './assets/js/responsive.js';
import Validation from './assets/js/validation.js';
import { createGallery, filter } from './assets/js/createGallery.js';
import scroll from './assets/js/scroll.js';


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    Responsive("habilidades", "(min-width: 1024px)");


    const $menu = document.getElementById('burger');
    const $nav = document.querySelector('.nav');
    const $list = document.querySelectorAll('.nav ul li a');
    Menu($menu, $nav, $list);

    const $listActive = document.querySelectorAll('.nav ul li');
    scroll($listActive);



    const $boxGallery = document.querySelector('.box-gallery');
    createGallery($boxGallery);



    const $button = document.querySelectorAll('.filter-box');
    filter($button, $boxGallery);


    const $form = document.getElementById("form");
    Validation($form);
});



