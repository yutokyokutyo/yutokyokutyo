<?php
$array = array('aaa', 'bbb', 'ccc', 'ddd', 'eee');

foreach ($array as $key => $value) {
    if (0 == strcmp($value, 'ccc')) {
        continue;
    }

    echo $value . '<br>';
}
