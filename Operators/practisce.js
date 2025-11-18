/*x=10;
y=20;
if(x>5 && y<25){
    console.log("A");
}else{
    console.log("B");
}*/
/*let isadmin=true;
let isloggedin=false;
if(isadmin || isloggedin){
    console.log("access granted");
}else{
    console.log("access denied");
}*/
/*let temp=35;
if(!(temp<30)){
    console.log("hot");
}else{
    console.log("cold");
}*/
/*let a=0;
if(a){
    console.log("truthy");
}else{
    console.log("falsy");
}*/
/*let score=25;
let grade=score>=90?"A":score>=75?"B":score>=60?"C":"fail";
console.log(grade);*/
/*let points=75;
let status=points>100?"gold":points>50 ?"silver":"bronze";
console.log(status);*/
/*let loggedin=true;
let hastoken=false;
let access=loggedin && hastoken ?"allow":"deny";
console.log(access);*/

//increment and decrement 
let a=5;
a++;
//console.log(a);
let b=7;
++b;
//console.log(b);
let x=3;
let y=x++;
//console.log(x,y);
let p=4;let q=++p;
//console.log(p,q);
let m=10;
/*console.log(m--);
console.log(m);*/
let n=5;
let result=n++ + ++n;
//console.log(result);
let likes=100;
function likepost(){
    return ++likes;
}
/*console.log(likepost());
console.log(likes);*/

