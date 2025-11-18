//DOM IS LIKE FRONTEND KI JS
//4 Pillars of DOM
//1.selection of element
//2.changing html
//3.changing css
//4.event listener
//var h1=document.querySelector('h1')
//console.log(h1);
/*var h1=document.querySelector('h1')
h1.innerHTML='I AM IRONMAN'
h1.style.color='pink'
h1.style.backgroundColor='black'*/
var h1=document.querySelector('h1')
var btn=document.querySelector('button')
btn.addEventListener('click',function(){
    h1.innerHTML='Im Batman'
    h1.style.color='red'
    h1.style.fontSize='60px'

})