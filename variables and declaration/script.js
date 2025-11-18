var a; //declaration
var a = 12; // dec and initiaization

let virat_score =25;
const pi_value=3.14;
//global,block,fuctional scope
var c=15; //global and if any fuction is tr this is used but it doesnt respect the block
function abcd(){
    if(true){
        var c=25;
    }
}
//let respects the block and works only in parent parenthesis
{
    let d=55;
}
function abcd(){
    if(true){
        let c=25;
    }
}
//reassignment and redeclaration
var a=10;
a=42;//reassignment
var a=55; //redeclaration is  possible for var
let b=55;
b=85;
//let b=66; //redeclaration is not possible for let
//tempoaral dead zone
//console.log(z);
let z=55;

//hoisting impact per type
var a=undefined;
console.log(a);
a=12;

