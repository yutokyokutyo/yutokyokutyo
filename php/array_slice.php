Interactive shell

php > $a = 'download';
php > $b = explode('/', $a);
php > var_dump($b);
array(1) {
  [0]=>
  string(8) "download"
}
php > $a = 'kyokutyo/kondo/download';
php > $b = explode('/', $a);
php > var_dump($b);
array(3) {
  [0]=>
  string(8) "kyokutyo"
  [1]=>
  string(5) "kondo"
  [2]=>
  string(8) "download"
}
php > var_dump($b[0]);
string(8) "kyokutyo"
php > var_dump(array_slice($b[0]));
PHP Warning:  array_slice() expects at least 2 parameters, 1 given in php shell code on line 1

Warning: array_slice() expects at least 2 parameters, 1 given in php shell code on line 1
NULL
php > var_dump(array_slice($b, 1));
array(2) {
  [0]=>
  string(5) "kondo"
  [1]=>
  string(8) "download"
}
php > $a = 'download';
php > $b = explode('/', $a);
php > var_dump(array_slice($b, 1));
array(0) {
}
