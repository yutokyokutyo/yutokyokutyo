<?php
$webhook_url = 'https://hooks.slack.com/services/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';

$msg = array(
    'username' => 'Sarashimon',
    'text' => 'test'
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
