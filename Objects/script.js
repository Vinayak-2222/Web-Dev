//creating and accessing obj
/*let obj={
    name:"vinayak",
    age:22,
}
console.log(obj.name);
console.log(obj.age);
console.log(obj['name']);
console.log(obj['age']);*/

//Nesting and Deep Access
const user={
    name:"vinayak",
    age:22,
    address:{
        city:"",
        pin:582102,
        location:{
            lat:25,
            lng:75,
        }
    }
}
//console.log(user.address.location.lat);

//object destructuring    //more useful in backend and react
let{lat,lng}=user.address.location;

//looping for in
let obj={
    name:"vinayak",
    age:22,
};
for(let key in obj){
   // console.log(key,obj[key]);
}

//copying objects spread and deep clone conept
let object={
    name:"vinayak",
    age:22,
}
let obj2={...object}


//deep clone
let objects={
    name:"vin",
    age:22,
    address:{
        city:"gadag",
    }
}

//let obj3={...objects}
//obj3.address.city="hubli";  //in output both objects and obj3 city is changed to hubli wr we changed only obj3
let obj3=JSON.parse(JSON.stringify(objects))

//optional chaining   here we wont get error
let obj4={
    name:"vin",
    age:22,
    addresses:{
        city:"gadag",
    }
}
obj?.address?.city

let role="admin";
let obj5={
    name:"vin",
    age:22,
    addresses:{
        city:"gadag",
    },
    [role]:"rahul",
};
