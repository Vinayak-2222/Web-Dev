//data types 
//  1. primitives = without brackets and if we copy  and if we get real copy ex: string,num,bool,null,undefined,symbol,bigint
//  2. reference = with brackets and if we copy we dont get real copy ex: arrays[],objects{},functions()
//string,num,bool,null,undefined,symbol,bigint
//symbol --unique immutable value
/*let u1=Symbol("uid");
let u2=Symbol("uid");*/
//let a=9007199254740991n;
//arrays
/*let a=[1,2,3];
let b=a;
b.pop(); //in array both a and b value have changed similarly */
//objects
let a={
    name:"vinayak",
};
let b=a;
b.name="vinutha";
//dynamic typing
let ab=12;
ab=true;
ab="vinutha";
ab=null;
ab=undefined;
ab=[];
//typeofquirks
typeof null;
typeof NaN;
//type coersion : converting the datatypes automatically by js
"5"+1 //concatenation of string
"5"-1 //coersion of string:converting string to num automat
// truthy vs falsy values
// 0 false  null "" undefined NaN document.all = falsyvalues


