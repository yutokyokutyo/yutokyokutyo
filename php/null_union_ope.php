<?php

// 左辺がNULLでなければそれを返し、NULLならば右辺を返す。
echo $_GET['user'] ?? 'This is null';

// 以下と同じ意味
echo isset($_GET['user']) ? $_GET['user'] : 'This is null';
