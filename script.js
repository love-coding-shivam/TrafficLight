const red=document.getElementById("button-1");
console.log(red);
const yellow=document.getElementById("button-2");
console.log(yellow);
const green=document.getElementById("button-3");
console.log(green);

const redCircle=document.getElementsByClassName("circle-1")[0];
console.log(redCircle);
const yellowCircle=document.getElementsByClassName("circle-2")[0];
console.log(yellowCircle);
const greenCircle=document.getElementsByClassName("circle-3")[0];
console.log(greenCircle);

 


//Add event listners to all the buttons.
//Inside the event listners change the backgroundColor of the circles.
red.addEventListener("mousedown",(events)=>{
    yellowCircle.style.backgroundColor="red";
    yellowCircle.style.boxShadow="10px 10px 20px 20px red";
    greenCircle.style.boxShadow="10px 10px 20px 20px red";
    redCircle.style.boxShadow="10px 10px 20px 20px red";
});
red.addEventListener("mousedown",(events)=>{
    greenCircle.style.backgroundColor="red";
});
red.addEventListener("mousedown",(event)=>{
    redCircle.style.backgroundColor="red";
})
yellow.addEventListener("mousedown",(events)=>{
    redCircle.style.backgroundColor="yellow";
    greenCircle.style.boxShadow="10px 10px 20px 20px yellow";
    redCircle.style.boxShadow="10px 10px 20px 20px yellow";
    yellowCircle.style.boxShadow="10px 10px 20px 20px yellow";
});
yellow.addEventListener("mousedown",(events)=>{
    greenCircle.style.backgroundColor="yellow";
});
yellow.addEventListener("mousedown",(event)=>{
    yellowCircle.style.backgroundColor="yellow";
})
green.addEventListener("mousedown",(events)=>{
    redCircle.style.backgroundColor="green";
    redCircle.style.boxShadow="10px 10px 20px 20px green";
    yellowCircle.style.boxShadow="10px 10px 20px 20px green";
    greenCircle.style.boxShadow="10px 10px 20px 20px green";
});
green.addEventListener("mousedown",(events)=>{
    yellowCircle.style.backgroundColor="green";
});
green.addEventListener("mousedown",(events)=>{
    greenCircle.style.backgroundColor="green";
})