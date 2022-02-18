 const content = "I'm \n A Web Publisher ";
 const text = document.querySelector(".typing");
 let i = 0;

 function typing(){
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if( i > content.length ) {
        text.textContent = "";        
        i = 0;
    }
}

setInterval(typing, 200)


const btnWrap = document.querySelector(".bgBtn")
const btn = document.querySelector('#night_day')
const body = document.querySelector('body')
const boder = document.querySelector(".btn > p")
const logo = document.querySelector(".logo")

btnWrap.addEventListener("click", ()=>{

    if( btn.value === 'night') {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        logo.style.backgroundColor="white";
        logo.style.color="black";
        logo.style.fontWeight="blod";
        boder.style.border = "1px solid #fff";
        btnWrap.style.backgroundColor="white";
        btn.style.backgroundColor="black";
        btn.style.right="0";
        btn.value = 'after'

    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        logo.style.backgroundColor="black";
        logo.style.color="white";
        boder.style.border = "1px solid #000";
        btnWrap.style.backgroundColor="black";
        btn.style.backgroundColor="white";
        btn.style.right="30px";
        btn.value = 'night'
    }
});


var myIndex = 0;
imgfadeIn();

function imgfadeIn() {
    var i;
    var x = document.querySelectorAll('.lf_img');
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(imgfadeIn,5000); 
}

const fadein = document.querySelector(".fadein")
const bgbtn = document.querySelector(".bgBtn")
const container = document.querySelector(".container")

function loding() {
    fadein.style.display = "none"
    bgbtn.style.display = "block"
    container.style.display = "block"
}
setTimeout(loding, 3000)

