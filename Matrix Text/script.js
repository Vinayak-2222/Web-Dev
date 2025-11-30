/*const para=document.querySelector("p")
const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text=para.innerText
let iteration=0*/

/*para.addEventListener('mouseenter',function(){
    setInterval(function(){
        const str=text.split('').map(function(char,index){
            if(index<iteration){
                return char
            }
            return characters.split("")[Math.floor(Math.random()*53)]
        }).join("")
        para.innerText=str
        iteration+=0.2

    },30)
})*/

/*function randomtext(){
   const str= text.split("").map(function(char,index){
        if(index<iteration){
            return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")
    para.innerText=str
    iteration +=0.2
}
setInterval(randomtext,20)*/


/*const para = document.querySelector("p")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText
let iteration=0


para.addEventListener("mouseenter", () => {


    setInterval(() => {

        const str = text.split('').map((char, index) => {
            if(index<iteration){
            return char
            }


            return characters.split("")[ Math.floor(Math.random() * 53) ]
        }).join("")

        para.innerText = str
        iteration +=0.1

    }, 30)



})*/

const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

let iteration = 0;
let intervalID = null;

para.addEventListener("mouseenter", () => {

  // Stop any previous animation
  clearInterval(intervalID);

  // Reset animation on every hover
  iteration = 0;

  intervalID = setInterval(() => {

    const str = text.split("").map((char, index) => {
      if (index < iteration) {
        return char;
      }

      return characters[Math.floor(Math.random() * characters.length)];
    }).join("");

    para.innerText = str;

    iteration += 0.25;

    // Stop animation when complete
    if (iteration >= text.length) {
      clearInterval(intervalID);
    }

  }, 40);

});
