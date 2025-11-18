//1. print a number 1-10 using a for loop
/*for(let i=1;i<=10;i++){
    console.log(i);
}*/

//2.print a number 10-1 using a while loop
/*let i=10;
while(i>0){
    console.log(i);
    i--;
}*/

//3.even numbers 1-20 for loop
/*for(let i=1;i<=20;i++){
    if(i%2 ==0){
        console.log(i);
    }
}*/

//4.print odd num 1-15 using while loop
/*let i=1;
while(i<=15){
    if(i%2 != 0){
        console.log(i);  
    }
     i++; 
   
}*/

//5.print a multiplication table of 5
/*for(let i=1;i<=10;i++){
    console.log(`5 * ${i} = ${5*i}`);
}*/

//6.sum of numbers 1-100 using a loop
/*let sum=0;
for(let i=1;i<=100;i++){
    sum=sum+i;
    
}
console.log(sum);*/

//7. print all numbers 1 to 50 that are divisble by3.
/*for(let i=1;i<=50;i++){
    if(i%3 == 0){
        console.log(i);
    }
}*/

//8.ask the user for number and print whether each number from 1 to that number is even or odd
/*let val= prompt("Give the number");
for(let i=1;i<=val;i++){
    if(i%2 === 0){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}*/

//9. count how many numbers between 1 to 100 are divisble by both 3 and 5
let count=0;
for(let i=1;i<=100;i++){
    if(i%3 ===0 && i%5 ===0){
        count++;
       
    }
} 
console.log(count);
