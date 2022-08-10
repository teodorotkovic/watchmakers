<?php
    $first_name = $_POST['firstName'];
    $last_name = $_POST['lastName'];
    $visitor_email = $_POST['email'];
    $tel = $_POST['tel'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $brand = $_POST['brand'];
    $model = $_POST['model'];
    $services = $_POST["services"];
    $message = $_POST['message'];

    if(empty($services)) {
        $servicesOutput = "Nebyla vybrana zadna sluzba";
    } else {
        $N = count($services);
        for($i=0; $i < $N; $i++) {
            $servicesOutput .= "$services[$i] \n";
        }
    }

    $email_from = 'info@watchmakers.cz';

    $email_subject = "Rezervace servisu";

    $email_body = "Jmeno zakaznika: $first_name.\n".
                    "Prijmeni zakaznika: $last_name.\n".
                    "Email zakaznika: $visitor_email.\n".
                    "Telefon zakaznika: $tel.\n".
                    "Datum: $date.\n".
                    "Cas: $time.\n".
                    "Znacka: $date.\n".
                    "Model: $model.\n\n".
                    "Sluzby:\n$servicesOutput\n".
                    "Zprava: $message\n";
    

    $to = "info@watchmakers.cz";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    function reCaptcha($recaptcha){
        $secret = "6LegzmQhAAAAAHhPtVrAXLMcKxMDdPTlHOTBR0Sz";
        $ip = $_SERVER['REMOTE_ADDR'];
        
        $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
        $url = "https://www.google.com/recaptcha/api/siteverify";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
        $data = curl_exec($ch);
        curl_close($ch);
        
        return json_decode($data, true);
    }

    $recaptcha = $_POST['g-recaptcha-response'];
    $res = reCaptcha($recaptcha);
    if($res['success']){
        mail($to,$email_subject,$email_body,$headers);

        header("Location: ../index.html");
    }else{
    // Error
    }
?>
