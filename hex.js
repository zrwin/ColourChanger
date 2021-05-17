

const hex= ["0","1","2","3","4","5","6","7",
"8","9","0","A","B","C","D","E","F"];


const  colorName= document.querySelector(".color-name");



const clickme = document.querySelector(".btn");
const navbar = document.querySelector(".navbar-container");
const navStyle = document.querySelectorAll(".nav-style");


clickme.addEventListener("click",()=>{

    
  let  hex1= appendHex();

    navbar.style.backgroundColor= hex1;
    navbar.style.color = "white";
     navStyle.forEach(element => {
        element.style.color= "white";
    });

    document.body.style.backgroundColor= hex1;
    colorName.innerHTML= hex1;
    colorName.style.color= "white";

});



//document.body.style.backgroundColor= appendHex();


function appendHex(){
    let i;
    let hexColor="#";
    for(i=0;i<6;i++){

        let random = getRandom();
        hexColor+= hex[random];
    }
    return hexColor;
}

function getRandom(){

    return(Math.floor(Math.random()*hex.length));

}