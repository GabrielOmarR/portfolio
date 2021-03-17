function disableScroll(){  
    window.scrollTo(0, 0);
}

window.addEventListener('DOMContentLoaded', () => {
    
    $open = document.querySelector('.hamburger');
    $close = document.querySelector('.close');
    $show = document.querySelector('.nav');

    $open.addEventListener('click', () => {

        window.addEventListener('scroll', disableScroll);

        if(!$show.classList.contains('active')){
            $show.classList.add('active');
            $open.style.display = 'none';
            $close.style.display = 'block';
            
        }

    })

    $close.addEventListener('click', () => {

        window.removeEventListener('scroll', disableScroll);

        if($show.classList.contains('active')){
            $show.classList.remove('active');
            $open.style.display = 'block';
            $close.style.display = 'none'; 
        }

    });

});


window.addEventListener('resize', () => {

    console.log(window.innerWidth);

    if(window.innerWidth >= 1024){

        if($show.classList.contains('active')){
            $show.classList.remove('active');
            window.removeEventListener('scroll', disableScroll);
        }

        $open.style.display = 'none';
        $close.style.display = 'none'; 
    }else{
        $open.style.display = 'block';
        $close.style.display = 'none'; 
    }
})