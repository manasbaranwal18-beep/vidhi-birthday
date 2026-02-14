/* Music */

const music = document.getElementById("music");

setTimeout(()=>{
  music.play().catch(()=>{});
},1000);


/* Typing Subtitle */

const subtitle = document.getElementById("subtitle");

const text = "A Small World Made Just For You 💖";

let i = 0;

function typeText(){

  if(i < text.length){

    subtitle.innerHTML += text.charAt(i);
    i++;

    setTimeout(typeText,70);
  }
}

setTimeout(typeText,2000);


/* Hearts Background */

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize(){
  const dpr = window.devicePixelRatio || 1;

  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  ctx.scale(dpr,dpr);
}

resize();
window.onresize = resize;


/* Heart Particles */

const hearts = [];

const colors = ["#ff6b9c","#ffd93d","#ff85a2","#ff9f45"];

for(let i=0;i<80;i++){

  hearts.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    s:8+Math.random()*6,
    v:0.5+Math.random(),
    c:colors[Math.floor(Math.random()*4)]
  });
}


/* Draw Heart */

function drawHeart(x,y,s,c){

  ctx.save();

  ctx.translate(x,y);
  ctx.scale(s/12,s/12);
  ctx.rotate(Math.PI/4);

  ctx.fillStyle=c;
  ctx.shadowColor=c;
  ctx.shadowBlur=8;

  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.arc(-6,0,6,0,Math.PI);
  ctx.arc(6,0,6,0,Math.PI);
  ctx.lineTo(0,14);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}


/* Loop */

function animate(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  hearts.forEach(h=>{

    h.y -= h.v;

    if(h.y < -20){
      h.y = canvas.height + 20;
      h.x = Math.random()*canvas.width;
    }

    drawHeart(h.x,h.y,h.s,h.c);
  });

  requestAnimationFrame(animate);
}

animate();


/* Show Button */

const heartBtn = document.getElementById("heartBtn");
const clickText = document.getElementById("clickText");

setTimeout(()=>{

  heartBtn.classList.add("show");
  clickText.classList.add("show");

},4500);


/* Click Action */

heartBtn.onclick = ()=>{

  document.body.classList.add("fade");

  setTimeout(()=>{
     window.location = "page2.html";
  },2000);

};


/* Autoplay Fix */

document.addEventListener("click",()=>{
  music.play();
},{once:true});