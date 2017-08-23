準備完了

cd ~
mkdir tadaima
cd tadaima
npm install onoff
vim app.js
---

'use strict'

const Gpio = require('onoff').Gpio;
var button = new Gpio(18, 'on', 'both');

button.watch(function(err, value) {
  console.log("Button has been pressed");
});

---
'use strict'

const Gpio = require('onoff').Gpio;
var button = new Gpio(18, 'on', 'both');

button.watch(function(err, value) {
  if(value == 1){
  console.log("Take a picture!");
  const proc = require('child_process').execSync;
  var result = proc('raspistill -w 480 -h 320 -o image.jpg');
  console.log("Done!");
  }
});

---
TadaimaApp という Dropboxアプリを作る
dropbox_uploader.sh

'use strict'

const Gpio = require('onoff').Gpio;
var button = new Gpio(18, 'on', 'both');

button.watch(function(err, value) {
  if(value == 1){
  console.log("Take a picture!");
  const proc = require('child_process').execSync;
  var result = proc('raspistill -w 480 -h 320 -o image.jpg');
  console.log("Done!");

  result = result = proc('dropbox_uploader.sh upload image.jpg image.jpg');

  }
});



http://raspi.seesaa.net/article/415316808.html
https://auxin01.wordpress.com/2016/08/22/raspberry-pi_raspbian_dropbox-uploader2016/
