window.sessionStorage.setItem(['key1'],['value1']);
window.sessionStorage.setItem(['key2'],['value2']);

var size = window.sessionStorage.length
console.log(size);  // => 3

var a = window.sessionStorage.getItem(['key1']);
console.log(a);    // => value1

window.sessionStorage.removeItem(['key1']);
a = window.sessionStorage.getItem(['key1']);
console.log(a);   // => null

window.sessionStorage.clear();
var b = window.sessionStorage.getItem(['key2']); // undefined
console.log(b);   // => null
