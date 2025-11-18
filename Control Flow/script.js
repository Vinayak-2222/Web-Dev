//if else if else switch case early access pattern
function getgrade(score){
    if(score>=90 && score<=100){
        return "A";
    }else if(score>=80 && score<=89){
        return "B";
    }else if(score>=70 && score<=79){
        return "C";
    }else if(score>=60 && score<=69){
        return "D";
    }else if(score>=33 && score<=59){
        return "E";
    }else if(score>=0 && score<=32){
        return "Fail";
    }else{
        return "Invalid Marks";
    }
}
console.log(getgrade(7));

//early return pattern
function getgrade(score) {
    if (score < 0 || score > 100) return "Invalid Marks";
    if (score >= 90 && score <= 100) return "A";
    if (score >= 80 && score <= 89) return "B";
    if (score >= 70 && score <= 79) return "C";
    if (score >= 60 && score <= 69) return "D";
    if (score >= 33 && score <= 59) return "E";
    if (score >= 0 && score <= 32) return "Fail";
}

console.log(getgrade(7)); // Output: Fail
