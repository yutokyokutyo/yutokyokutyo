<?php
$webhook_url = 'https://hooks.slack.com/services/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';

$msg = array(
    'username' => 'チッコー',
    'text' => 'ちこぉ'
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
