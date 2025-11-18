var arr=[
    {
        team:'RCB',
        fullname:'Royal Challengers Bengaluru',
        trophies:1,
        captain:"Rajath patidar",
        primary:'red',
        secondary:'black'

    },
    {
        team:'CSK',
        fullname:'Chennai Super Kings',
        trophies:5,
        captain:"M S Dhoni",
        primary:'yellow',
        secondary:'blue'

    },
    {
        team:'MI',
        fullname:'Mumbai Indians',
        trophies:5,
        captain:"Rohit Sharma",
        primary:'blue',
        secondary:'orange'

    },
    {
        team:'KKR',
        fullname:'Kolkata Knight Riders',
        trophies:3,
        captain:"Shreyas Iyer",
        primary:'purple',
        secondary:'gold'

    },
    {
        team:'DC',
        fullname:'Delhi Capitals',
        trophies:0,
        captain:"Axar patel",
        primary:'blue',
        secondary:'crimson'
    },
    {
        team:'RR',
        fullname:'Rajasthan Royals',
        trophies:1,
        captain:"Sanju Samson",
        primary:'dark blue',
        secondary:'pink'

    },
    {
        team:'SRH',
        fullname:'Sunsrisers Hyderabad',
        trophies:1,
        captain:"Pat cummins",
        primary:'orange',
        secondary:'yellow'
    },
    {
        team:'GT',
        fullname:'Gujarat Titans',
        trophies:1,
        captain:"Shubman Gill",
        primary:'dark blue',
        secondary:'yellow'
    },
    {
        team:'PBKS',
        fullname:'Kings XI Punjab',
        trophies:0,
        captain:"Shreyas Iyer",
        primary:'red',
        secondary:'gold'
    }
    

]
var btn=document.querySelector('button')
var h1=document.querySelector('h1')
var main=document.querySelector('main')

var fullname=document.getElementById('Full Name')
var captain=document.getElementById('Captain')
var trophies=document.getElementById('Trophies')

btn.addEventListener('click',function(){
   var winner=arr[Math.floor(Math.random()* arr.length)]

   h1.innerHTML=winner.team;
   h1.style.backgroundColor=winner.secondary;
   main.style.backgroundColor=winner.primary;

   fullname.innerHTML=winner.fullname;
   captain.innerHTML="Captain : "+ winner.captain;
   trophies.innerHTML="Trophies 🏆  "+winner.trophies;
})