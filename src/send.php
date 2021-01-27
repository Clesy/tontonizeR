<?php

 //token and chatID for TelegramBot
include 'telegramData.php';    

// input field name
$name = $_POST['firstname'];    
$email = $_POST['email'];       
$message = $_POST['subject'];   

// import token and chatID from telegramData.php
$token = $telegram_token_bot ;  
$chatID = $telegram_chat_id;    

// empty variable
$txt = " "; 

// array with parametres for telegramBot message
$array = array(                   
    'Full name: ' => $name,
    'Email: ' => $email,
    'Message: ' => $message
);

// iterating over the array
foreach ($array as $key => $value) {        
    $txt .= "<b>".$key."</b>".$value."%0A";
};

// sending all data
$sendTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chatID}&parse_mode=html&text={$txt}","r");

// redirect 
// if ($sendTelegram) {
//     return 'Location: https://tonronizer.000webhostapp.com/';
// }
?>