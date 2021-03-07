export default function Validation($form){

    
    $form.addEventListener('submit', (e) =>{

        const name = $form.querySelector('#name').value;
        const email = $form.querySelector('#email').value;
        const subject = $form.querySelector('#subject').value;
        const message = $form.querySelector('#message').value;

        const regName = /^[a-z + a-z]{4,20}$/gi;
        const regEmail = /^[a-z0-9]{1,20}[.]?[_]?[a-z0-9]{1,10}@{1}[a-z]{1,20}[.][a-z]{1,5}?[.a-z]{1,10}$/gi;
        const regSubject = /^[a-z0-9-_]{1,10}[ ]?[a-z0-9-_]{1,10}?[ ]?[a-z0-9-_]{1,10}?$/gi;
        const regMessage = /^[a-zñ0-9 -./a-zñ]{10,150}$/gi;

        const $boxError = $form.firstElementChild;
        const $errorName = $boxError.firstElementChild;
        const $errorEmail = $errorName.nextElementSibling;
        const $errorSubject = $errorEmail.nextElementSibling;
        const $errorMessage = $errorSubject.nextElementSibling;

        let status = {
            name: false,
            email: false,
            subject: false,
            message: false
        }

        const agregarClass = ($div) =>{
            $div.classList.add("error");
        }

        const removerClass = ($div) =>{
            $div.classList.remove("error");   
        }

        if(regName.test(name)){

            if($errorName.classList.contains('error')){
                removerClass($errorName);
            }

            status.name = true;
            
        }else{
            agregarClass($errorName);
        }

        if(regEmail.test(email)){

            if($errorEmail.classList.contains('error')){
                removerClass($errorEmail);
            }

            status.email = true;

        }else{
            agregarClass($errorEmail);
        }


        if(regSubject.test(subject)){

            if($errorSubject.classList.contains('error')){
                removerClass($errorSubject);
            }

            status.subject = true;

        }else{
            agregarClass($errorSubject); 
        }

        if(regMessage.test(message)){

            if($errorMessage.classList.contains('error')){
                removerClass($errorMessage);
            }

            status.message = true;

        }else{
            agregarClass($errorMessage); 
        }

        const $success = $form.querySelector('.success');
        const $fail = $form.querySelector('.fail');

        let formValues = Object.values(status);
        let valid = formValues.findIndex(valor => valor === false);


        if(valid === -1){
            $fail.style.display = 'none';
            $success.style.display = 'block'; 
        }else{
            $success.style.display = 'none';
            $fail.style.display = 'block';
            e.preventDefault();
        }
        

    });


}