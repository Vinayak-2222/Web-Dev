//function declartion
/*function wish(){
    console.log("happy bday");
}
wish();*/

//another type function expression
/*let score=function(){
    console.log(25);
}
score();*/

//fat arrow function
/*let fnc= ()=>{
    console.log("fat arrow function");
}
fnc();*/

// parmeters vs arguemnets
/*function wishes(v1){
    console.log(`${v1} Good Mrng`);
}
wishes("vinayak");
wishes("vinutha");
wishes("Neha");

function add(a,b){    // a and b are parameters 
    console.log(a+b);
}
add(1,2);  // 1 and 2 are arguments
add(5,5);*/

//default,rest,spread parameter
//1.default parameter
/*function add(v1=0,v2=0){    // v1=0 and v2=0 are default we are setting the parameter
    console.log(v1+v2);
}
add();

//2.rest operator ...
function add(...val){
    console.log(val);
}
add(1,2,3,4,5,6);*/

//return values and early returns
/*function abcd(){
    return 10;
}
let val =abcd();
console.log(val);*/

//first classs function and higher order function[accept or return] theory using function we can use as value tht is function
/*function abcd(val){
    val();

}
abcd(function(){
    console.log("star");
});*/

//pure vs impure function

/*let a=12;
function abcd(){                      //pure function
    console.log("hooooluuu");
}
function ptr(){                           //impure function it effects a value
    a++;
}*/

//closure 
/*function abcd(){
    let a=12;
    return function(){
        console.log(a);

    }
}*/

//lexiscopping
/*function abcd(){
    let a=5;
    function efgh(){
        let b=6;
        function ijkl(){
            let c=7;
        }
    }
}*/

//immediately Invoked Function Expression(IIFE)
/*(function(){

})(); */

//hoisting but it doesnt work for function expression (let)
/*abcd();

function abcd(){
    console.log("heyy");
}*/

