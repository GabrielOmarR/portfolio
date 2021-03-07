let accordeon = Array.from(document.querySelectorAll('.accordeon'));


for(i in accordeon){


    accordeon[i].addEventListener('click', (e) => {

        e.target.classList.toggle('actived-arrow');
        e.target.parentNode.classList.toggle('actived');
    
    });

}
