<?php

if(isset($_POST['enviar'])){

    if(!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['asunto']) && !empty($_POST['mensaje'])){
        $name = $_POST['nombre'];
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];
        $msg = $_POST['mensaje'];

        $destino = "gabriel.rea96@gmail.com"

        $header = "From: $name". "\r\n";
        $header .= "Reply-To: $email". "\r\n";
        $header .= "X-Mailer: PHP/". phpversion();

        $mail = mail($destino, $asunto, $msg, $header);

        if($mail){
            echo "Enviado exitosaamente!"
        }

    }

}