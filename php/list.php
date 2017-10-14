<?php

$info = array('コーヒー', '茶色', 'カフェイン');

// すべての変数の取得
list($drink, $color, $power) = $info;
echo "$drink の色は $color で、$power が含まれています。\n";

// 一部の変数の取得
list($drink, , $power) = $info;
echo "$drink には $power が含まれています。\n";

// 三番目のみの取得
list( , , $power) = $info;
echo "$power 欲しい!\n";

// list() は文字列では動作しません
list($bar) = "abcde";
var_dump($bar); // NULL
?>
