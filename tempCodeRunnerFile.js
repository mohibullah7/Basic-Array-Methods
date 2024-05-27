const number =[12,10,9,20,25,30,40];
let first = number.find(myFunction);
console.log('it can return the greater value in array',first);
function myFunction(v,i,a){

return v > 30;
}