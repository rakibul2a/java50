// e1
function showText(){
	document.getElementById('s_text').innerHTML="Hello SSB"
}

// e2
function showTime(){
	document.getElementById('s_time').innerHTML = Date()
}

// e3
function java(){
	document.getElementById('demo').innerHTML = 'Hello JavaScript!'
}

// e4
function bulbOn(){
	document.getElementById('img').src='images/on.gif'

}
// e4
function bulbOff(){
	document.getElementById('img').src='images/off.gif'
}

// e5
function size(){
	document.getElementById('s_size').style.fontSize='35px'
}
// e6
function hide(){
	document.getElementById('s_hide').style.display='none'
}
// e7
function show(){
	document.getElementById('s_show').innerHTML='people was independent'
}
// e8
function showView(){
	document.getElementById()
}

// e9
function myFunction() {
  document.getElementById("new").innerHTML = "Paragraph changed.";
}

// e10
function showSum() {
  document.getElementById("sum").innerHTML = 5 + 6;
}
// e11
function showSub() {
  document.getElementById("sub").innerHTML = 6 - 1;
}

// e13
function state() {
let x, y, z;  
x = 5;        
y = 6;        
z = x + y; 

  document.getElementById("state").innerHTML ="The value of z is " + z + ".";  
}

// e14
function sadOff() {
  document.getElementById("felImg").src = "images/sad.png";
}
function smileOn() {
  document.getElementById("felImg").src = "images/smile.png";
}

// e15
var num1 = 9;
var num2 = 3;
var result = num1 + num2 ;
function getResult(){
	document.getElementById("res").innerHTML=result;
}
// e16
let number1,number2;
  number1 = 9;
  number2 = 9;
   number1 += number2 ;
 function getResultt(){
 	document.getElementById("ress").innerHTML=number1;
}

// e17
let numb1;
  numb1 = 9;
   numb1 ++;
 function getResult2(){
 	document.getElementById("res1").innerHTML=numb1;
}

// e18
var data = "my self rakib ";
function repeat(){
	document.getElementById("rep").innerHTML=data.repeat(3);
}
// e19
let numb3,numb4,value;
  numb3 = 9;
  numb4 =6;
  value=numb3 > numb4;
 function getValue(){
 	document.getElementById("ans").innerHTML=value;
}
// e20
let numb5,numb6,valuee;
  numb5 = 9;
  numb6 =6;
  valuee=numb5 < numb6;
 function getValue1(){
 	document.getElementById("ans1").innerHTML=valuee;
}
// e21
let  numb7,numb8,values;
  numb7 = 9;
  numb8 =6;
  values=numb7 === numb8;
 function getValue2(){
 	document.getElementById("ans2").innerHTML=values;
}
// e22
let  num7,num8,valuess;
  num7 = 9;
  num8 = "6";
  valuess= num7 === num8;
 function getValue3(){
 	document.getElementById("ans3").innerHTML=valuess;
}
// e23
function classNamee() {
  document.getElementsByClassName('c1')[3].innerHTML='welcome';
}
// e24
function className1() {
  document.getElementsByClassName('c2')[2].innerHTML='welcome';
}
// e25
function className2() {
  document.getElementsByClassName('c3')[1].innerHTML='rakibul islam';
}
// e26
function findingTags(){
	var  info= document.getElementsByTagName('h3');
	alert(info.length);
}
// e27
let number7,number8,key;
  number7 = 9;
  number8 =6;
  key=number7 % number8;
 function getKey(){
 	document.getElementById("and").innerHTML=key;
}
// e28
let number10;
  number10 = 9;
  
  number10-- ;
 function getMinus(){
 	document.getElementById("minus").innerHTML=number10;
}
// e29
function textAdd(){
	let x = "Volvo" + 16;
    document.getElementById("add").innerHTML = x;
}
// e30
function textAdd2(){
	let x = 16 + 4 + "Volvo";
    document.getElementById("add2").innerHTML = x;
}
// e31
function callFunction(p1, p2){
  result = p1 * p2;
  document.getElementById("fuc").innerHTML = result;
  
}
// e32
function callFunction1(fahrenheit){
  text= (5/9) * (fahrenheit-32);
  document.getElementById("fuc1").innerHTML = "The temperature is " + text + " Celsius";
  
}
// e33
function smileOnn() {
  document.getElementById("feltImg").src = "images/smile.png";
}
function sadOfff() {
  document.getElementById("feltImg").src = "images/sad.png";
}

// e34
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

document.getElementById("demo34").innerHTML =carName1 + "<br>" + carName2; 

// e35
let x22 = 34.00;
let x23 = 34;
let x24= 3.14;
document.getElementById("demo35").innerHTML =x22 + "<br>" + x23 + "<br>" + x24;

// e36
function bulbOnn(){
	document.getElementById('img1').src='images/off.gif'
}
function bulbOfff(){
	document.getElementById('img1').src='images/on.gif'
}
// e37
function object(){
	let car = "Fiat";
    document.getElementById("object").innerHTML = "Car: " +  car;
}
// e38
function object1(){
	const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"}
 document.getElementById("object1").innerHTML = person.firstname + " is " + person.age + " years old.";
}

// e39
function viewTime(){
	document.getElementById('stime').innerHTML = Date()
}

// e40
function stringg(){
	let tex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	document.getElementById('str').innerHTML = tex.length;
}

// e41
function array(){
	const cars = ["Saab", "Volvo", "BMW"];
	document.getElementById('arr').innerHTML = cars;
}
// e42
function array1(){
	const cars = ["Saab", "Volvo", "BMW"];
	document.getElementById('arr1').innerHTML = cars[0];
}
// e43
function array2(){
	const cars = ["Saab", "Volvo", "BMW"];
	document.getElementById('arr2').innerHTML = cars[1];
}
// e44
function array3(){
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let size = fruits.length;
	document.getElementById('arr3').innerHTML = size;
}

// e45
function array4(){
	const cars = ["Saab", "Volvo", "BMW"];
	let size1 = cars.length;
	document.getElementById('arr4').innerHTML = size1;
}
// e46
function array5(){
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById('arr5').innerHTML = fruits.toString();
}
// e47
function array6(){
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById('arr6').innerHTML = fruits.sort();
}

// e48
function pie(){
	document.getElementById("demo48").innerHTML = Math.PI;
}
// e49
function round(){
	document.getElementById("demo49").innerHTML = Math.round(4.6);
}
// e50
function floor(){
	document.getElementById("demo50").innerHTML = Math.floor(4.7);
}





