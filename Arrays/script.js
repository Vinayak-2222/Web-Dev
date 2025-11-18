//create,access and modify array
/*let marks=[99,98,96,95,94];
console.log(marks[2]);
marks[3]=55;*/

//push pop shift unshift
/*let arr=[1,2,3,4,5,6,7,8,9];
/*arr.push(6);
arr.push(7);
arr.pop();
arr.shift();
arr.unshift(0,1);
//arr.splice(2,2);*/
/*let newarr = arr.slice(0,4);
arr.reverse();*/

//let arr=[89,98,46,25,99,105];
/*let sr=arr.sort(function(a,b){
    return b-a;
});
arr.forEach(function(val){
    console.log(val+5);
});*/
/*let newarr=arr.map(function(val){    //map is like foreach
    return 15;
});*/
/*let newarr=arr.map(function(val){
    if(val>50) return val;
})*/

//let arr=[1,2,3,4,5,6,7,8,9];
/*let newarr=arr.filter(function(val){
    if(val>4) return true;
})*/
/*let ans=arr.reduce(function(accumulator,val){
    return accumulator+val;

},0);
let va=arr.find(function(val){
    return val ===3;
})*/

//let marks=[20,30,80,90];
/*let any_pass=marks.some(function(val){
    return val>75;
})*/
/*let eve=marks.every(function(val){
    return val>15;
})*/

//destructuring array
/*let arr=[1,2,3,4,5];
let[a,b,,c]=arr;*/

//spread operator
let arr=[1,2,3,4,5,6,7,8,9];
let arr2=[...arr];
