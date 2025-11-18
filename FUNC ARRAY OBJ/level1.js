//LEVEL 1

//1. Write a function `sayHello()` that prints `"Hello
//JavaScript"`.
function sayhello(){
    console.log("hello javaScript");
}
sayhello();

//2. Create a function `add(a, b)` that returns their sum and log the result.
function add(a=0,b=0){
    console.log(a+b);
}
add(10,20);

//3. Write a function with a default parameter `name ="Guest"` that prints `"Hi <name>"`.
function greet(name="Guest"){
    console.log("hi "+ name);
}
greet();

//4. Use rest parameters to make a function that adds unlimited numbers.
function num(...val){
    console.log(val);
}
num(1,2,3,4,5,6,7,8,9,10);

//5. Create an IIFE that prints `"I run instantly!"`.
(function(){
    console.log("I run instantly");
         
})();

//6. Make a nested function where the inner one prints a variable from the outer one.
function abcd(){
    let a=12;
    return function(){
        console.log(a);

    };
}
abcd()();

//7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
let fruits=["apple","banana","guava","kiwi","orange"];
fruits.push("strawberry");
fruits.shift();

//8. Use a `for` loop to print all elements of an array.
let arr=[1,2,3,4,5];
arr.forEach(function(val){
    console.log(val);
})

/*9. Create an object `person` with keys `name`, `age`,
and `city`, and print each key’s value.

10. Use `setTimeout()` to log `"Time’s up!"` after 2
seconds.*/






