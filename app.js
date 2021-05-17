const colors = ["Red", "Yellow","Black","Gray","Brown","Teal","Orange"];

const  colorName= document.querySelector(".color-name");
// selecting click me button 
const navStyle = document.querySelectorAll(".nav-style");

const clickme = document.querySelector(".btn");
const navbar = document.querySelector(".navbar-container");
clickme.addEventListener("click",(e)=>{

 
 let random = getRandom();

 let random2 = getRandom();
 
    navbar.style.backgroundColor= colors[random2];
    navbar.style.color = "white";
 document.body.style.backgroundColor= colors[random];
    colorName.innerHTML= colors[random];
    if(random===2){
        colorName.style.color= "white";
    }else{
        colorName.style.color= colors[random];
    }
    navStyle.forEach(element => {
        element.style.color= "white";
    });
});

function getRandom(){
    return(Math.floor(Math.random()*colors.length));
}