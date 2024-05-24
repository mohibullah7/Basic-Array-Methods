let crt = ['hello','one ','two','three','four'
]
crt.push('five');
console.log(crt);
console.log(crt.length);
console.log(crt.indexOf('one'));

crt.pop();
console.log(crt);
console.log(crt.join());
console.log(crt.at(3));

let bnb = ['3223','3232','for ','each ',
'err'
]
console.log(bnb.join());

let calc= ["400 + 200 + 900"+"2+3+4"];
// console.log(calc);
let kl =calc.join();
console.log(eval(kl));


let ts =['this can ','string','from ','commas'];
let cv = ts.toString();
console.log(cv);

//ok there is another way to get element to get element from arrays using index value the first one is at( ) method of array and second to assign inddex value to the arrays

let hj = ['one','two','three','four','five','six','seven'];
let ji =hj[3];
console.log(ji);

let ui = [323,323,323,232,3232,3232];
let ux = ui[3];
console.log(ux);

//Both ways can use to find out index value in array 
//now to acces element from back index apposite direction -sign is used with index 
let hji = ['one','two','three','four','five','six','seven'];
let jii =hj[-1];
console.log(jii);
//Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.

// This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.

// The at() method was introduced in ES2022 to solve this problem.

//shift() method remove the first elemnet in array and shift other element in left lets try it how it works

let klo = ['one','two','three','four','five'];
console.log(klo);
klo.shift();
console.log(klo);
//unshift() add value like push() method and add it to the right 
let lp  = ['one ','two','three','four'];
lp.unshift('six');
console.log(lp);
lp.push('nine');
console.log(lp);

//so shift() method remove element from left and pop ( ) method remove array element from most right value and unshift() add element in left and push() add element from right to the array 

//lets ;earn conactetion
let boys =[ 'mohib','khan','mahsud','me'];
let girls =['jk','lo','kp ','mo'];
let gays =['hehe','ueue','ieioei','ekjeje']
let bh = boys.concat(girls,gays,'this is string pass as argumnet',909909);
// boys.concat(girls);
console.log(bh);

// what if we wan to add array to convert it 
let mydata =['this ','is ','my ','name ','and ','I ','worked','here'];
document.getElementById('demo3').innerHTML= mydata;