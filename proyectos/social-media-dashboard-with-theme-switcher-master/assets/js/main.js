const dark = document.getElementById('dark');
const input = document.getElementById('theme');


input.addEventListener('click', () =>{
    
    dark.classList.toggle('dark');

    if(!dark.classList.contains('dark')){
        dark.classList.add('light');
    }else{
        dark.classList.remove   ('light');
    }

});