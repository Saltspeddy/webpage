let slide = document.querySelector("#slide");
let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");
let k = 1;
let topOffset = window.pageYOffset
if(topOffset > 0){
    document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
}
let height = screen.width
console.log(height);

let boolCatedre = [];
for (let index = 1; index <= 16; index++) {
    boolCatedre[index] = true;
}
function dropCatedre(value){
    if(boolCatedre[value] === true){
        document.querySelector("#materie"+value).style.display = "flex";
        document.querySelector("#border"+value).style.borderBottom="thin solid rgb(27 27 27)";
    }
    else{
        document.querySelector("#materie"+value).style.display = "none";
        document.querySelector("#border"+value).style.borderBottom="none";
    }
    boolCatedre[value] = !boolCatedre[value]; 
}

function navmod(){
    let top = window.pageYOffset;
    if( top === 0 ){
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0)"
    }
    else{
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
    }
}

var images = ["url('./assets/scan0003.jpg')",
"url('./assets/scan0015.jpg')",
"url('./assets/scan0004.jpg')",
"url('./assets/scan0011.jpg')",
"url('./assets/scan0016.jpg')",
"url('./assets/scan0018.jpg')",
"url('./assets/scan0032.jpg')"];
var index = 0;
var div = document.createElement('div')

function makeImage() {
   
    if(screen.width>700)
        {div.style.width="80vw";
        div.style.height="80vh";
        div.style.backgroundSize="contain";}
    else
        {div.style.width="100vw";
        div.style.height="60vh";
        div.style.backgroundSize="contain";}   
   div.style.margin="auto"
   div.style.backgroundImage=images[0];
   div.style.backgroundPosition="center center";
   div.style.backgroundRepeat="no-repeat";
   document.getElementById('content').appendChild(div);
}

function moveRight(){
    var div = document.getElementById('content').getElementsByTagName('div')[2];
    div.style.position="center"
    if(index==7)
         index=0;
    index++;
    index = index % images.length;
    if(screen.width>700)
         {div.style.backgroundSize="contain";
         div.style.backgroundRepeat="no-repeat";}
     else
         div.style.backgroundSize="contain"; 
    div.style.backgroundImage="none";
    div.style.backgroundImage=images[index];
 }
 
 function moveLeft(){
     var div = document.getElementById('content').getElementsByTagName('div')[2];
     div.style.position="center"
     if(index==0)
         index=7;
     index--;
     index = index % images.length;
     if(screen.width>700)
         {div.style.backgroundSize="contain";
         div.style.backgroundRepeat="no-repeat";}
     else
         div.style.backgroundSize="contain";  
     div.style.backgroundImage="none";
     div.style.backgroundImage=images[index];
  }
////////////////////////////////////////////////////////////////////////////////////
function leftSlide(){
    if(k != 1){
        document.querySelector("#btn-right").style.opacity = "1";
        slide.style.transform = "translateX("+ (k-2)*-100 +"vw)"; 
        k--;
        for(let i = 1 ; i <= 5 ; i++){
            if( k === i ){
                document.querySelector("#i"+i).style.opacity = "0.8";
            }
            else{
                document.querySelector("#i"+i).style.opacity = "0.5";
            }
        }
    }
    if( k == 1 ){
        document.querySelector("#btn-left").style.opacity = "0.2";
    }
}
function rightSlide(){
    if(k != 5){
        document.querySelector("#btn-left").style.opacity = "1";
        slide.style.transform = "translateX("+ k*-100 +"vw)";
        k++;
        for(let i = 1 ; i <= 5 ; i++){
            if( k === i ){
                document.querySelector("#i"+i).style.opacity = "0.8";
            }
            else{
                document.querySelector("#i"+i).style.opacity = "0.5";
            }
        }
    }
    if(k == 5){
        document.querySelector("#btn-right").style.opacity = "0.2";
    }
}

function dropDown(){
    document.querySelector("#dropDown").style.display = "block";
    document.querySelector("#dropDown").style.opacity = "1";
}
function dropFade(){
    document.querySelector("#dropDown").style.display = "none";
    document.querySelector("#dropDown").style.opacity = "0";
}

let opened = true;
function secondaryMenu(){
    if(opened === true){
        document.querySelector("#secondaryMenu").style.transform = "translateX(0px)";
        opened = !opened;
    }
    else{
        document.querySelector("#secondaryMenu").style.transform = "translateX(250px)";
        opened = !opened;
    }
}

let boolInformatii = [];
for (let index = 1; index <= 2; index++) {
    boolInformatii[index] = true;
}
function dropInformatii(value){
    if(boolInformatii[value] === true){
        document.querySelector("#info"+value).style.display = "flex";
        document.querySelector("#arrow"+value).style.transform = "rotate(180deg)"
    }
    else{
        document.querySelector("#info"+value).style.display = "none";
        document.querySelector("#arrow"+value).style.transform = "rotate(0deg)"
    }
    boolInformatii[value] = !boolInformatii[value]; 
}

function test(){
    let top = window.pageYOffset;
    if( top === 0 ){
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0)"
    }
    else{
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
    }
}

document.querySelector("#vid").volume = 0.2;