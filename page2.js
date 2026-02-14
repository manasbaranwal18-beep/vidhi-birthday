const slide = document.getElementById("slide");
const caption = document.getElementById("caption");
const music = document.getElementById("music");

window.onload = () => {
  music.play().catch(()=>{});
};

// Images
const images = [];
for (let i = 1; i <= 31; i++) {
  images.push(`photos/pic${i}.jpg`);
}

const captions = [

"Is baby ko pata bhi nahi tha future mein itna attitude aane wala hai 😌",   //1
"Tab se hi camera friendly thi madam 📸",                                   //2
"Cutie version 1.0 🤍",                                                      //3
"Smile same hai, bas confidence upgrade ho gaya 😏",                        //4
"Already main character vibes 💅",                                           //5
"Confidence tab bhi zyada tha, height thodi kam thi 😂",                    //6
"Hero wali entry practice chal rahi thi 😎",                                 //7
"Boss baby energy from day one 👑",                                          //8

"Yeh phase… jab sabko lagta tha seedhi hai 😭",                              //9
"Apna vibe dhundhne ka era 🎧",                                              //10
"Chup rehke sab observe karne wali mode 👀",                                 //11
"Her own world, her own rules 🚶‍♀️",                                         //12
"Smile innocent… dimaag full active 🧠",                                     //13
"Grace naturally aati hai isko 🌸",                                          //14
"Aankhon mein already future ka plan 😌",                                    //15
"Comfort zone? Nah. Own zone ✨",                                            //16

"Glow-up quietly ho gaya, kisi ko pata bhi nahi chala 💥",                  //17
"Ab samajh aa raha hai future powerful hai 😎",                              //18
"Confidence level: unnecessarily high 🔥",                                   //19
"Dream big wali speeches yahin se start hui 🎤",                             //20
"Calm face, strong mind 🌊",                                                  //21
"Beauty + brains combo pack 💎",                                             //22
"Is pic mein full ‘I know I look good’ energy 😏",                           //23
"Future doctor vibes strong 🩺",                                             //24

"Ab pata hai life se kya chahiye 💯",                                        //25
"Soft voice, savage replies 🤍",                                              //26
"Main character permanently activated ✨",                                    //27
"Ye glow filter ka nahi hai btw 😌",                                         //28
"Ab rukne ka mood nahi hai 🚀",                                              //29
"Built different, accept it 🌟",                                             //30
"And honestly… best abhi aana baaki hai 😉💖"                                //31

];

let index = 0;

function changeSlide() {
  if (index >= images.length) {
    document.getElementById("finalScreen").classList.add("show");
    typeFinalMessage();
    return;
  }

  slide.classList.add("fade");

setTimeout(() => {
  slide.src = images[index];
  caption.textContent = "";
  slide.classList.remove("fade");

  slide.classList.remove("zoom");
  setTimeout(() => {
    slide.classList.add("zoom");
  }, 50);

  typeCaption(captions[index]);

  index++;
}, 800);
}

setInterval(changeSlide, 4000);
changeSlide();

// Final Message
const finalText = 
`Happy Birthday Dr Vidhi 💖🥼🩺

Un chhoti chhoti baaton se leke
random hasi tak,
tumne har moment ko thoda better bana diya ✨

Mujhe pura yakeen hai
tum ek amazing doctor banogi 🩺
aur exams me bhi solid score karogi 💯
kyunki dedication tumhari real superpower hai 💫

Bas yahi wish hai
yeh saal tumhe sab kuch de
jo tum quietly wish karti ho 🌸

Aur haan…
life me chahe kitna bhi change aaye,
I genuinely hope
hum dono ki yeh bond hamesha rahe 🤍

Aur shayad…
thodi aur memories
mere saath bhi 😉❤️

– Manas`;

let charIndex = 0;

function typeFinalMessage() {
  const el = document.getElementById("finalMessage");
  if (charIndex < finalText.length) {
    el.textContent += finalText.charAt(charIndex++);
    setTimeout(typeFinalMessage, 70);
  }
}

document.getElementById("replayBtn").onclick = () => location.reload();

// Stars
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.onresize = resize;

const stars = Array.from({ length: 150 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  s: Math.random() * 0.5 + 0.2
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    s.y += s.s;
    if (s.y > canvas.height) s.y = 0;
  });
  requestAnimationFrame(animate);
}
animate();
function typeCaption(text) {
  let i = 0;
  caption.textContent = "";

  function typing() {
    if (i < text.length) {
      caption.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 30);
    }
  }

  typing();
}