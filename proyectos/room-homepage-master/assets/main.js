window.addEventListener('DOMContentLoaded', () => {
    
    const $menu = document.querySelector('.nav');
    const $open = document.querySelector('.burger');
    const $close = document.querySelector('.close');
    
    $open.addEventListener('click', () => {

        $menu.classList.add('active');

    });

    $close.addEventListener('click', () => {
        $menu.classList.remove('active');
    });
    
    
    const $left = document.querySelector('.left');
    const $right = document.querySelector('.right');
    const $slider = document.querySelectorAll('.slider .box-move');

    let status = 0;

    $left.addEventListener('click', () => {

        if(status === 2){
            $slider[0].classList.remove('left');
            $slider[1].classList.remove('left');
            $slider[2].classList.remove('left');
            status = 0;
        }

        if(status === 3){
            $slider[1].classList.remove('more-left');
            $slider[2].classList.remove('more-left');
            status = 2;
        }

    });

    $right.addEventListener('click', () => {

        if(status === 0){
            status = 1;
        }

        if(status === 1){
            $slider[0].classList.add('left');
            $slider[1].classList.add('left');
            $slider[2].classList.add('left');
            status = 2;
        }else{
            $slider[1].classList.add('more-left');
            $slider[2].classList.add('left');
            $slider[2].classList.add('more-left');
            status = 3;
        }

    });

});


window.addEventListener('resize', () => {
    
    const $menu = document.querySelector('.nav');

    if(window.innerWidth >= 1440){
        console.log("dasd");
        $menu.classList.remove('active');
    }

    

});