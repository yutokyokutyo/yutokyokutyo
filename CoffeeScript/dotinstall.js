# commnet

###
commnet
comment
###

###
score = 82
# if score > 80
#   alert("ok")
# `aleat("hello")`


socre = 80

# aleart "score: #{socre * 10}"
       
msg = "this
is 
a very 
"

html = """
    <div id="main">
      hello
    </div>
       """

a = [a, 3, 56]

b = [
  1
  23
  34
]

m = [0..7]
n = [0...7]

alert m[1..3]
alert m[..3]
alert m[1..]

alert "world"[1..3]
### 

# object

# m = {name: "kyokutyo", score: 80}

# m = name: "kyokutyo", score: 80

###
m = 
  name: "kyokutyo"
  score: 80

n =
  name: "yuto"
  score:
    first: 80
    second: 20
    third: 90
###    

# if

# if score > 60
#  alert score
  
 
# if socre > 60 then alert score
  
# alert score if score > 60


###
if score > 60
  alert "ok"
else
  alert "NG"
#### 
    
# if score > 60 then alert "OK" else alert "NG"

# condithon ? a : b コーヒーではかけない！

# msg = if score > 60 then "OK" else "NG

# 比較演算子

# == = is
# != > !== isnt

# alert "ok" if 10 < x < 20

# true -> yes on
# false -> no off

# && -> and
# || -> or
# ! -> not

# alert "ok" if answer is yes and signal isnt off
  
# in

# alert "ok" if 5 in[1, 3, 5]

###
  obj = 
    score: 52
  alert "ok" if "score" of obj
###

# switch

###
switch(signal) {
    case "red";
      alert("STOP!");
      break;
    case "blue";
    case "blue";
      alert("GO!");
      break;
    case "yellow";
      alert("CAUTION!");
      break;
    default:
      alert("wrong signal!");
}
###

###
switch(signal) 
    when "red"
      alert "STOP!"
    when "blue", "green" then alert "GO!"
    when "yellow" then alert "CAUTION!"
    else alert "wrong signal!"
###
  

# for
###
sum = 0
for i on [0..9]
  sum += i
alert sum
  
  
sum = 0
sum += i for i in [0..9] by 2
alert sum
###
  
# 配列内包 

###

sum = 0
total = (sum += i for i in [0..9])
alert total

###

# while

###
i = 0
sum = 0
while i < 10
  sum += i
  i ++
alert sum
###
 
# array

###
alert color for color in ["red", "blue", "pink"] when color isnt "blue"
### 

# alert "#{i}: #{color}" for color, i in ["red", "blue", "pink"]

# objectfunction hjello() {}

###
re

hello = -> alert "hello"sults =
  kyokutyo: 40
hello()
  yuto: 50
  aoyagi: 90

for name, socre of results
  alert "#{name}: #{score}"
###
  
  
# 関数

###
function hjello() {}
var hello = function(){}
###

###
hello = (name = "kyokutyo") -> alert "hello #{name}"
hello("yuto")

###

###
hello = -> "hello"
msg = hello()
alert msg
###

# 即時関数(無名関数)
###
(function() {
  alert "hello"
})();
###

# do -> alert "hello"

# 分割代入

###
[a, b, c] = [1, 4, 10]
alert a
alert b
alert c

results = (x) -> [x, x ** 2, x ** 3]
[a, b, c] = results 5
alert a
alert b
alert c
###

# Class

###
class User
  constructor: (name) ->
     this.name = name
     @name = name
###
  
###
class User
  constructor: (@name) ->
  hello: -> alert "hello, #{@name}"

class AdminUser extends User 
  hello: ->
    alert "admin says..."
    super()
  
tom = new User "Tom"
# alert tom.name
  
tom.hello()



bob = new AdminUser "bob"
alert bob.name
bob.hello()
###
    
    
# 存在演算子
# 0'' -> false
# null / undefined

###
x = 10
rs = if x? then "found" else "not found"
alert rs
###

# x = y ? 20
# alert x

# 安全なアクセス演算子

###
user = 
  name: "kyokutyo"
# alert user.score?.first
alert user.sayhi?()
###
