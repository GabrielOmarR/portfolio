window.addEventListener('DOMContentLoaded', () => {

    function disableScroll(){  
        window.scrollTo(0, 0);
      }

    const $btn = document.querySelector('.hamburger');
    const $img = $btn.firstElementChild;

    const $nav = document.querySelector('.nav');

    $btn.addEventListener('click', () => {
        $nav.classList.toggle('active');

        if($nav.classList.contains('active')){
            $img.src = 'images/icon-close.svg';
            window.addEventListener('scroll', disableScroll);
        }else{
            $img.src = 'images/icon-hamburger.svg';
            window.removeEventListener('scroll', disableScroll);  
        }
    });

});