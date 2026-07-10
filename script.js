// ==========================
// MUSIC
// ==========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        playing = true;

        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();

        playing = false;

        musicBtn.innerHTML = "🎵 Play Music";

    }

});

// ==========================
// ENVELOPE
// ==========================

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    setTimeout(() => {

        document.querySelector(".birthday")
        .scrollIntoView({
            behavior:"smooth"
        });

    },1200);

});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// ==========================
// NAVBAR
// ==========================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>100){

nav.style.background="rgba(5,15,45,.75)";
nav.style.backdropFilter="blur(20px)";

}else{

nav.style.background="transparent";

}

});

// ==========================
// FLOATING HEARTS
// ==========================

const hearts = document.querySelector(".hearts");

function createHeart(){

const heart = document.createElement("span");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*18+10)+"px";

heart.style.animationDuration=(Math.random()*5+6)+"s";

heart.style.opacity=Math.random();

heart.style.color="rgba(255,255,255,.35)";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,350);

// ==========================
// PARALLAX
// ==========================

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

document.body.style.backgroundPosition=
`${50+x*5}% ${50+y*5}%`;

});

// ==========================
// GALLERY
// ==========================

const photos=document.querySelectorAll(".gallery img");

photos.forEach(photo=>{

photo.addEventListener("mouseenter",()=>{

photo.style.transform="scale(1.08)";

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="scale(1)";

});

});

// ==========================
// TYPE EFFECT
// ==========================

const title=document.querySelector(".hero h1");

const original=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<original.length){

title.innerHTML+=original.charAt(i);

i++;

setTimeout(typing,90);

}

}

typing();

// ==========================
// CONFETTI
// ==========================

function confetti(){

for(let i=0;i<70;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=
`hsl(${Math.random()*360},90%,70%)`;

c.style.animationDuration=
Math.random()*3+2+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}

setTimeout(confetti,4000);

// ==========================
// AUTO PLAY WHEN FIRST CLICK
// ==========================

document.body.addEventListener("click",()=>{

music.play().catch(()=>{});

},{once:true});

// ==========================
// SCROLL INDICATOR
// ==========================

window.addEventListener("scroll",()=>{

let scroll=
window.scrollY/
(document.body.scrollHeight-window.innerHeight);

document.documentElement.style.setProperty(
"--scroll",
scroll
);

});

// ==========================
// CURSOR GLOW
// ==========================

const glow=document.createElement("div");

glow.className="cursor";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ==========================
// END
// ==========================
