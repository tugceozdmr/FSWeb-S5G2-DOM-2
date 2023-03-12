import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!


window.addEventListener("load", (event) => {
  document.querySelector(".nav-link").style.color="red"
});

const tumResimler = document.querySelectorAll("img")

tumResimler.forEach((resim) => {
    resim.addEventListener("dblclick", (event) => {
    resim.style.filter = "grayscale(100%)"; 
    })
})

tumResimler.forEach((resim) => {
    resim.addEventListener("click", (event) => {
    resim.style.filter = "unset"; 
    })
})

document.querySelector(".intro img").addEventListener("click", function(e){
console.log("Resme tıkladın!")
})

document.querySelector(".intro p").addEventListener("wheel", myFunc)

function myFunc(e) {
    e.target.style.color="orangered"
}

document.querySelectorAll(".text-content p")[0].addEventListener("click", myFunc)

document.querySelectorAll(".text-content p")[1].addEventListener("click", function(e) {
    e.target.style.fontSize = "20px"
})

document.querySelectorAll(".destination div")[0].addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor="rgb(255, 250, 205)";    
})

document.querySelectorAll(".destination div")[0].addEventListener("mouseout", function(e) {
    e.target.style.backgroundColor="#17A2B8";    
})

document.querySelectorAll(".destination div")[0].addEventListener("mouseover", function(e) {
    e.target.textContent= "Kaçmaz Fırsat!"  
})

document.querySelectorAll(".destination div")[0].addEventListener("mouseout", function(e) {
    e.target.textContent= "Beni de Al!"   
})


document.querySelectorAll(".destination div")[1].addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor="rgb(216, 191, 216)";    
})

document.querySelectorAll(".destination div")[1].addEventListener("mouseover", function(e) {
    e.target.textContent= "Kaçmaz Fırsat!"  
})
document.querySelectorAll(".destination div")[1].addEventListener("mouseout", function(e) {
    e.target.textContent= "Beni de Al!"   
})

document.querySelectorAll(".destination div")[1].addEventListener("mouseout", function(e) {
    e.target.style.backgroundColor="#17A2B8";    
})

document.querySelectorAll(".destination div")[2].addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor="rgb(255, 245, 238)";    
})

document.querySelectorAll(".destination div")[2].addEventListener("mouseout", function(e) {
    e.target.style.backgroundColor="#17A2B8";    
})

document.querySelectorAll(".destination div")[2].addEventListener("mouseover", function(e) {
    e.target.textContent= "Kaçmaz Fırsat!"  
})

document.querySelectorAll(".destination div")[2].addEventListener("mouseout", function(e) {
    e.target.textContent= "Beni de Al!"   
})

const input = document.querySelector('input');
const log = document.getElementById('log');
const tumButonlar = document.querySelectorAll(".btn")

input.addEventListener('keydown', logKey);
input.addEventListener("keyup",logKey1)
function logKey(e) {
 // log.textContent += ` ${e.key}`;  //e.code
  if(e.key == 1) {
    tumButonlar[0].style.fontSize="30px"
  }
}

function logKey1(e) {
    // log.textContent += ` ${e.key}`;  //e.code
     if(e.key == 1) {
       tumButonlar[1].style.fontSize="30px"
     } else if (e.key==2) {
    tumButonlar[2].style.fontSize="35px"
     } else {
        input.setAttribute("disabled","disabled")
     }
}


input.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
  });

window.addEventListener("resize", (e) => {
    log.textContent =window.innerWidth;
})