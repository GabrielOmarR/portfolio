export default function menu(){

    function scroll(){
        window.scrollTo(0,0);
    }

    const $btn = document.querySelector('.burger');
    const $menu = document.querySelector('.nav');

    $btn.addEventListener('click', () => {
        $menu.classList.toggle('active');

        if($menu.classList.contains('active')){
            window.addEventListener('scroll', scroll);
        }else{
            window.removeEventListener('scroll', scroll);
        }

    });


    window.addEventListener('resize', () => {

        if(window.innerWidth >= 1024){

            if($menu.classList.contains('active')){
                $menu.classList.remove('active');
                window.removeEventListener('scroll', scroll);
            }

        }


    })



}