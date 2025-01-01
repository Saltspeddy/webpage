let slide = document.querySelector("#slide");
let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");
let k = 1;
let topOffset = window.pageYOffset
let width = screen.width
let contor = 1;
let isDesktop;
let isButtons = true;
let numberOfSlides;
let intervalID;
window.addEventListener('DOMContentLoaded', function() {});
///////////////////////////////////INDEX/////////////////////////////////////////////////
if (window.location.pathname=='/index.html' || window.location.pathname=='/' || window.location.pathname=='/public/index.html' || window.location.pathname=='/public/anunturi.html' || window.location.pathname=='/anunturi.html' || window.location.pathname=='/public/istoric.html' || window.location.pathname=='/istoric.html') { // "/public/index.html" trebuie folosit numai pe proiectul local
    numberOfSlides = document.querySelector("#slideShow").children.length

    for( let i = 1 ; i < numberOfSlides; i++){
        if(window.location.pathname=='/istoric' || window.location.pathname=='/public/istoric.html'){
            
        }else{
            document.querySelector("#slideShowButtons").innerHTML += " <button onclick=slideShow("+ i +")><svg id='i"+ i +"' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-5 h-5 opacity-50 hover:opacity-70 duration-500'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/></svg></button>"
        }
    }
    let singleSlideWidth = document.querySelector("#container").clientWidth;
    document.querySelector("#slideShow").style.width = (numberOfSlides) * singleSlideWidth + "px"
 
    if(numberOfSlides > 1){
        intervalID = setInterval(() => {
            autoSlideShow();
        }, "5000");
    }
   
    if(window.location.pathname=='/index.html' || window.location.pathname=='/' || window.location.pathname=='/public/index.html'){
        document.querySelector("#vid").volume = 0.2;
    }
}

if(width > 1260) isDesktop = true;
else isDesktop =false

function openImagePhone(value, type){
   
    if(isDesktop == false)
    document.querySelector("#openImage").style.transform = "translateX(0px)";
    let bgImage = document.querySelector("#bgimage"+value).style.backgroundImage.slice(5,-2);
    document.querySelector("#openedImage").src = bgImage;
    document.querySelector("#downloadImage").href = bgImage;
}
function openImage(value, type){
    document.querySelector("#openImage").style.transform = "translateX(0px)";
    let bgImage = document.querySelector("#bgimage"+value).style.backgroundImage.slice(5,-2);
    document.querySelector("#openedImage").src = bgImage;
    document.querySelector("#downloadImage").href = bgImage;

}
function closeImage(){  
    document.querySelector("#openImage").style.transform = "translateX(100vw)";
}

function darken(value){
    if(isDesktop == true){
        document.querySelector("#container"+value).style.transform = "translateY(0px)";
    }
}

let isAuto = false
function arrowLeftSlide(){
    
    if(isAuto === true){ 
        contor--;
    };

   if(contor == 0 && isAuto === true){
    contor++;
   }
   else if(contor > 1 ){
        contor--;
        let singleSlideWidth = document.querySelector("#singleSlide").clientWidth;
        let Slider = document.querySelector("#slideShow");
        Slider.style.transitionDuration = "500ms";
        Slider.style.transform = "translateX("+ (contor - 1) * -singleSlideWidth +"px)";
        isAuto = false;
        clearInterval(intervalID);
        setTimeout(intervalID = setInterval(() => {
            autoSlideShow();
        }, "5000"), 10000)
    }
    if(contor === 1){
        document.querySelector("#leftArrow").style.color = "gray"
    }
    else{document.querySelector("#rightArrow").style.color = "black"
    document.querySelector("#leftArrow").style.color = "black"}
}

function arrowRightSlide(){
    if(isAuto === true && contor == 1){
    }
    else{
        if(isAuto === true){ 
            contor--;
            isAuto = false;
        }
        if(contor < numberOfSlides - 1){
            contor++;
            let singleSlideWidth = document.querySelector("#singleSlide").clientWidth;
            let Slider = document.querySelector("#slideShow");
            Slider.style.transitionDuration = "500ms";
            Slider.style.transform = "translateX("+ (contor - 1) * -singleSlideWidth +"px)";
            isAuto = false;
            clearInterval(intervalID);
            setTimeout(intervalID = setInterval(() => {
                autoSlideShow();
            }, "5000"), 10000)
        }
        if(contor === numberOfSlides - 1){
            document.querySelector("#rightArrow").style.color = "gray"
        }
        else{document.querySelector("#rightArrow").style.color = "black"
        document.querySelector("#leftArrow").style.color = "black"}
    }
}

function lightup(value){
    if(isDesktop == true){
    let containerHeight = document.querySelector("#container"+value).offsetHeight;
    document.querySelector("#container"+value).style.transform = "translateY(" + containerHeight + "px)";
    }
}
let startSlide = false;
function autoSlideShow(){

    isAuto = true;
    let singleSlideWidth = document.querySelector("#singleSlide").clientWidth;
    let sliderWidth = document.querySelector("#slideShow").clientWidth;
    let Slider = document.querySelector("#slideShow");
    Slider.style.transform = "translateX("+ (contor - 1) * -singleSlideWidth +"px)";
   if(window.location.pathname != "/public/istoric.html")
    for( let i = 1 ; i < document.querySelector("#slideShow").children.length ; i++){
        if(isButtons === true){
            if(i != contor ){
                document.querySelector("#i"+i).style.opacity = "0.5";
                document.querySelector("#i"+i).style.height = "1.25rem";
                document.querySelector("#i"+i).style.width = "1.25rem";
            }
            else{
                document.querySelector("#i"+i).style.opacity = "0.8";
                document.querySelector("#i"+i).style.height = "1.5rem";
                document.querySelector("#i"+i).style.width = "1.5rem";
            }
        }
    }
    if( contor === numberOfSlides - 1 ){
        if(window.location.pathname === "/public/istoric.html"){
            document.querySelector("#leftArrow").style.color = "gray"
            document.querySelector("#rightArrow").style.color = "gray"}
        Slider.style.transitionDuration = "500ms";
        setTimeout(function(){
            Slider.style.transform = "translateX(-"+ (sliderWidth - singleSlideWidth) +"px)";
        },4500)
        contor = 1;
    }
    else if( contor === 1 ){
        if(window.location.pathname === "/public/istoric.html"){
        document.querySelector("#leftArrow").style.color = "gray"
        document.querySelector("#rightArrow").style.color = "black"
    }
        Slider.style.transitionDuration = "0s";
        contor++;
    }
    else if( contor != numberOfSlides - 1 && contor != 1){
        if(window.location.pathname === "/public/istoric.html"){
        document.querySelector("#rightArrow").style.color = "black"
        document.querySelector("#leftArrow").style.color = "black"
    }
        contor++;
        Slider.style.transitionDuration = "500ms";
    }
}

function slideShow(value){
    let Slider = document.querySelector("#slideShow");
    Slider.style.transitionDuration = "500ms";
    let singleSlideWidth = document.querySelector("#singleSlide").clientWidth;
    document.querySelector("#slideShow").style.transform = "translateX("+ (value - 1) * -singleSlideWidth +"px)";

    for( let i = 1 ; i < document.querySelector("#slideShow").children.length ; i++){
        if(i != value){
            document.querySelector("#i"+i).style.opacity = "0.5";
            document.querySelector("#i"+i).style.height = "1.25rem";
            document.querySelector("#i"+i).style.width = "1.25rem";
        }
        else{
            document.querySelector("#i"+i).style.opacity = "0.8";
            document.querySelector("#i"+i).style.height = "1.5rem";
            document.querySelector("#i"+i).style.width = "1.5rem";
        }
    }
    contor = value;
    setTimeout(function(){

    },20000)
}

function scrollNavBar(){
    let top = window.pageYOffset;
    if( top === 0 ){
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0)"
    }
    else{
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
    }
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

///////////////////////////////////CATEDRE/////////////////////////////////////////////////

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

///////////////////////////////////INFORMATII/////////////////////////////////////////////////
let boolInformatii = [];
for (let index = 1; index <= 9; index++) {
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

///////////////////////////////////CONTACT/////////////////////////////////////////////////
if (window.location.pathname=='/contact.html' || window.location.pathname=='/public/contact.html') {
    let inputs = document.querySelector("form").childNodes;
    for( let i  = 1 ; i <= inputs.length ; i = i + 2 ){
        inputs[i].style.outline = "none";
    }
    }

///////////////////////////////////CREARE PROIECT/////////////////////////////////////////////////
if (window.location.pathname=='/creare%20proiect.html' || window.location.pathname=='/public/creare%20proiect.html') {
    function previewBeforeUpload(id){
        document.querySelector("#"+id).addEventListener("change",function(e){
          if(e.target.files.length == 0){
            return;
          }
          let file = e.target.files[0];
          let url = URL.createObjectURL(file);
          document.querySelector("#preview-image").src = url;
        });
      }
      
      previewBeforeUpload("file");

      
}

///////////////////////////////////GENERAL/////////////////////////////////////////////////

let opened = false;
function secondaryMenu(){
    if(opened === false){
        document.querySelector("#secondaryMenu").style.transform = "translateX(0px)";
        opened = !opened;
    }
    else{
        document.querySelector("#secondaryMenu").style.transform = "translateX(250px)";
        opened = !opened;
    }
}

if(topOffset > 0){
    document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
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

function dropdown(){
    document.querySelector("#dropdown").style.display = "block";
    console.log(3);
    document.querySelector("#searchBar").style.bor = 0;
}
///////////////////////////////////NUME/////////////////////////////////////////////////

let personNames = ["Matu Dragos Gabriel", "Filip Miriam-Valentina"]
let functions = ["billionaire", "trilionaire"]
function appearFunctions(value){
    document.querySelector("#function"+value).innerHTML = functions[value]
}

function appearPersonNames(value){
    document.querySelector("#function"+value).innerHTML = personNames[value]
}
