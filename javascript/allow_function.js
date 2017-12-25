let Person = function(name, hobby) {
  this.name = name;
  this.hobby = hobby;
}

Person.prototype.introduce = function() {
  console.log('私の名前は' + this.name);
  console.log('趣味は' + this.hobby);
}

let yuto = new Person('yuto', 'soccer');
yuto.introduce();
