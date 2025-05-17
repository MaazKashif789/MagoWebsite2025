const navbtn = document.querySelector('.navbtn');
const navigation = document.querySelector('.navul');
const navcont = document.querySelector('#desktopnav');
const arrow = document.querySelector('.arrow')
let showstatus = false;



navbtn.addEventListener('click', collapse);


function collapse () {
    showstatus = !showstatus;
    navigation.classList.toggle('collapse');
    if(showstatus === true){
        navbtn.innerHTML = "<img src='images/cross.png' alt=''>";
        arrow.style.display = "none";
    } else {
        navbtn.innerHTML = "<img src='images/hamburger.png' alt=''>"
        arrow.style.display = "block";
    }

    
} 


/*  SLIDER */


const fwd = document.querySelector("#next");
const bwd = document.querySelector("#prev");
const slides = document.querySelectorAll(".s1");
let n = 0;


console.log(slides)


fwd.addEventListener('click', next);
bwd.addEventListener('click', prev);

function next (){
    if(n===2){
        n=0;
    } else {
        n = n + 1;
    };

    displayN()
}

function prev (){
    if(n===0){
        n=2;
    } else {
        n = n - 1;
    };

    displayN()
}


function displayN (){
    slides.forEach((slide)=>{
        slide.classList.remove('displayslide');
    })

    slides.item(n).classList.add('displayslide');

}




/* QUAD SLIDER */



const fwrd = document.querySelector("#nxt");
const bwrd = document.querySelector("#prv");
const qs = document.querySelector(".qslides");
const sc1 = document.querySelectorAll(".sc1");
const sc2 = document.querySelectorAll(".sc2");
const sc3 = document.querySelectorAll(".sc3");
const sc = document.querySelectorAll(".sc");
const s = document.querySelectorAll(".s2");
let c = 0;


fwrd.addEventListener('click', nxt);
bwrd.addEventListener('click', prv);

function nxt (){
    if(c===2){
        c=0;
    } else {
        c = c + 1;
    };

    displayC()
}

function prv (){
    if(c===0){
        c=2;
    } else {
        c = c - 1;
    };

    displayC()
}


function displayC (){
    sc.forEach((slide)=>{
        slide.classList.remove('show');
    })

    sc.item(c).classList.add('show');
    

}



 if(window.innerWidth < 960){
    qs.innerHTML = "";
    
};