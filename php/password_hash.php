<?php

// $options = [
//     'cost' => 11,
//     'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),
// ];
// 
// echo password_hash('rasmuslerdorf', PASSWORD_BCRYPT, $options)."\n";

echo substr(base_convert(hash('sha256', uniqid()), 16, 36), 0, 8);
