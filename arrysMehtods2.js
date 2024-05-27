let mohib =['name','age','reg','number','sem','sim','polls'];
let chk = mohib.indexOf('age');
console.log(chk);

let mohib1 =['name','age','reg','number','sem','sim','polls'];
let chk1 = mohib1.lastIndexOf();
console.log(chk1);

let mohib2 =['name','age','reg','number','sem','sim','polls'];
let chk2 = mohib2.findLast();
console.log(chk2);

//lets try include method 
let value1 = ['mohib','khan','mahsud','age'];
console.log(value1.includes('min'));

//ok so incluse mthdi is one of the best to find out element in array and this is best thing to find lost values and check for it 

//lets try out find() function with use of function and return value using arguments in functions 

const number =[12,10,9,20,25,30,40];
let first = number.find(myFunction);
console.log('it can return the greater value in array',first);
function myFunction(v,i,a){
// so writung value and and index array just for represenation of arguments 
return v > 30;
}