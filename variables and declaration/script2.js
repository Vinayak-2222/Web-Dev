//1. console.log(nm);
//var nm="vinnz";
//2. console.log(age);
//let age=25;
/* var x=1;     //global
{
    var x=2;    //var doesnt respect the block.so this is also global and it overrides
}
console.log(x); */
/*let a=10;
{
    let a=20;
    console.log("Inside a:",a); //respects block
}
console.log("outside a:",a); */
if(true){
    var a=10;
    let b=20;
}
console.log(a);// a is functional so outside also we can print
console.log(b); // b is not defined bcoz it must be in block outside block if we r printing we dont get output