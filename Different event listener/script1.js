/*var box =document.querySelector('#box')

box.addEventListener('mouseenter',function(){
    console.log("enter");
})
box.addEventListener('mouseleave',function(){
    console.log("leave")
})*/


/*var lana=document.querySelector('img')
var msg=document.querySelector('h2 span')
var body=document.body

lana.addEventListener('mouseenter',function(){
    msg.innerHTML="Say yes to heaven"
    body.style.backgroundColor='red'
})
lana.addEventListener('mouseleave',function(){
    msg.innerHTML="Say yes to me"
    body.style.backgroundColor='black'
})*/

/*var main=document.querySelector('#main')

main.addEventListener('mousemove',function(dets){
    console.log(dets.y)
})*/
var main=document.querySelector('#main')
var cursor =document.querySelector('#cursor')
 main.addEventListener('mousemove',function(dets){
    cursor.style.left=dets.x+'px'
    cursor.style.top=dets.y+'px'
 })

