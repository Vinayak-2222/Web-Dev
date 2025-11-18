//use rest parameter to accept any number of scores and return the total
/*function getscore(...scores){
    let total=0;
    scores.forEach(function(val){
        total=total+val;
                
    });
    return total;

}
console.log(getscore(10,20,30,40,50));*/

//early return
/*function checkage(age){
    if(age<18) return "too young";
    return "allowed";
}
console.log(checkage(3));*/

function abcd(val){
    val();
}
abcd(function(){
    console.log("kiniye");

});