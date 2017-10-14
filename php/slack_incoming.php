<?php
$webhook_url = '';

$msg = array(
    'username' => 'チッコー',
    //'text' => 'https://iwiz-chie.c.yimg.jp/im_sigg78iJz.eFs4ERJwjGEimaAw---x320-y320-exp5m-n1/d/iwiz-chie/que-11112050981'
    'text' => 'P'
);
$msg = json_encode($msg);
$msg = 'payload=' . urlencode($msg);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $webhook_url);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $msg);
curl_exec($ch);
curl_close($ch);
