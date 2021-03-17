import create from './assets/js/create.js';
import select from './assets/js/select.js';
import search from './assets/js/search.js';
import darkTheme from './assets/js/darkTheme.js';

window.addEventListener('DOMContentLoaded', () => {
    
    const $container = document.querySelector('.grid-country');
    create($container);

    const $select = document.getElementById('region');
    select($container, $select);

    const $input = document.getElementById('country');
    search($container, $input);

    const $button = document.querySelector('.dark-mode');
    darkTheme($button);

})