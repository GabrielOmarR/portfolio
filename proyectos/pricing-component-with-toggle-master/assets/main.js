const input = document.getElementById('money');
const monthly = Array.from(document.querySelectorAll('.monthly'));
const anually = Array.from(document.querySelectorAll('.anually'));

const pago = (pay) =>{

    if(pay == 'mon'){
        monthly.map(mon => mon.style.display = 'block');
        anually.map(anu => anu.style.display = 'none');
    }else{
        monthly.map(mon => mon.style.display = 'none');
        anually.map(anu => anu.style.display = 'block');
    }

}


input.addEventListener('click', () => {

    if(input.classList.contains('mon')){
        input.classList.replace('mon', 'anu');

        if(input.classList.contains('click-mon')){
            input.classList.replace('click-mon', 'click-anu');
        }else{
            input.classList.add('click-anu');
        }
        pago('anu');
    }else{
        input.classList.replace('anu', 'mon');

        if(input.classList.contains('click-anu')){
            input.classList.replace('click-anu', 'click-mon');
        }else{
            input.classList.add('click-mon');
        }
        
        pago('mon');
    }

});


