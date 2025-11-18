//create an array of 3 fruits and print second fruit
let fruits=["apple","banana","orange"];
//console.log(fruits[1]);
//add mango at the end and pineapple at the beginning
fruits.push("mango");
fruits.unshift("pineapple");
//replace banana with kiwi
fruits[2]="kiwi";
//remove the last element from the array using method
let arr=[1,2,3,4];
arr.pop();
//insert red and blue at index 1 in this array
let colors=["green","yellow"];
colors.splice(1,0,"red","blue");
//extract only the middle 3 elements from this array
let items=[1,2,3,4,5,6];
let newarr=items.slice(1,4);
//console.log(newarr);
//sort this  array alphabetically and then reverse it
let names=["zara","arjun","mira","bhavya"];
names.sort().reverse();
//use .map() to square each number
let array=[1,2,3,4,5,6];
let newarray= array.map(function(val){
    return val*val;
});

//use.filter() to keep numbers greater than 10
let num=[5,12,8,20,3];
let newnum=num.filter(function(val){
    return val>10;

});

//use .reduce() to find sum of this array
let numbers=[10,20,30];
let new_numbers=numbers.reduce(function(acc,val){
    return acc+val;
},0)

//use.find() to get first numbers less than 10:
let nums=[12,3,15,78,25];
let new_nums=nums.find(function(val){
    return val<10;
})

//use.some() to check if any student has scored below 35
let marks=[88,95,78,45,28];
let check=marks.some(function(val){
    return val<35;
})

//use.every() to check if all numbers are even
let a=[2,4,6,8,11];
let checkeve=a.every(function(val){
    return val%2 ===0;
})