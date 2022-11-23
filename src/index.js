import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın

// document.querySelector("h1").addEventListener("click", function (e) {
//     alert("Bana tıkladın!")
// });

//  /*ANASAYFA , HAKKIMIZDA , BLOG VE İLETİŞMİ AYRI AYRI SEÇİP HER BİRİNE FARKLI YAZI YAZDIRMAK(UZUN YOL)*/
// const deneme=document.querySelectorAll('.nav-link');
// deneme[0].addEventListener("click", function(e){
//     alert("Bana tıkladığını göster");
// }
// )


// const deneme2=document.querySelectorAll('.nav-link');
// deneme[1].addEventListener("click", function(e){
//     alert("Görüntülendi mi?");
// }
// )


// const deneme3=document.querySelectorAll('.nav-link');
// deneme[2].addEventListener("click", function(e){
//     alert("Evet");
// }
// )


// const deneme4=document.querySelectorAll('.nav-link');
// deneme[3].addEventListener("click", function(e){
//     alert("Başardın");
// }
// )

// //ANASAYFA , HAKKIMIZDA , BLOG VE İLETİŞİMİ BİRLİKTE SEÇİP, HER BİRİNDE AYNI YAZIYI GÖRMEK İÇİN //

// const anchors=document.querySelectorAll('.nav-link');
// anchors.forEach((currentAnchor) => {
//     currentAnchor.addEventListener("click", function (e) {
//         alert("Bana tıkladın!")
//     }
//     )
// });

// const baslık= document.querySelector('header');
// const otobus=document.querySelector("h1");
// otobus.addEventListener('click', (event) => {  
//     baslık.style.backgroundColor = 'pink'; });
    
    
// const baslık1= document.querySelector('header');
// const bus=document.querySelector(".nav-link");
// bus[1].addEventListener('click', (event) => {  
//     baslık1.style.backgroundColor = 'blue'; });



//  load yöntemi
const ilkNavItem = document.querySelectorAll('.nav-link');
ilkNavItem.forEach((currentAnc) => {
    window.addEventListener("load", (event) => {
        currentAnc.style.display = 'block';
    });
}
);

// mouseover yöntemi
const resimler = document.querySelectorAll('img');
resimler.forEach((resim) => {
    resim.addEventListener("mouseover", (event) => {
        resim.style.filter = 'grayscale(100%)';
    });
}
);

//doubleclick yöntemi

const imageAll = document.querySelectorAll('img');
imageAll.forEach((oddImage) => {
    oddImage.addEventListener("dblclick", (event) => {
        oddImage.style.filter = 'unset';
    });
}
);


//wheel yöntemi
const imageAll2 = document.querySelectorAll('img');
imageAll2.forEach((oddImage2) => {
    oddImage2.addEventListener("wheel", (event) => {
        event.preventDefault();
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);
        oddImage2.style.transform = `scale(${scale})`;
    });
}
);
let scale = 1;

//keydown yöntemi
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}

//focus yöntemi
input.addEventListener('focus', (e) => {
    input.style.background = "pink";
}
)

//resize yöntemi

window.addEventListener('resize', (e) => {
    log.textContent = window.innerHeight;
});