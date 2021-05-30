/*
*
*Created  by Shannonlee Gafney, this is my footer scripts javascrpt file
*
*/
//check if scroll if not display scroll to toop button
let button_menu = document.getElementById('button-menu')


//auto scroll nav and set active || To top auto scroll

//smoothscroll
$(document).ready(function() {

    $('#top').click(function(){
        $('#main').animate({scrollTop:0}, 'slow');
        return false;
    });


});

$(document).ready(function() {

    $('#tohome').click(function(){
        $('#main').animate({scrollTop:0}, 'slow');
        return false;
    });
});

$("#toabout").click(function() {
  document.getElementById("about").scrollIntoView( {behavior: "smooth" })
})

$("#toprojects").click(function() {
  document.getElementById("portfolio").scrollIntoView( {behavior: "smooth" })
})


//Website Loader

function LoaderTimer() {
  var Timer = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("MainDiv").style.display = "block";
}

//Mobile support menu

let button_top = document.getElementById('top')
let main = document.getElementById('main')
button_menu.addEventListener("click", e=>{
  button_menu.classList.toggle("active")
  button_top.classList.toggle("active")
  main.classList.toggle("active")
})

function navClick()
{
  
  if (button_menu.classList.contains("active")) {
    button_top.classList.toggle("active");
    button_menu.classList.toggle("active");
  }
  
  main.classList.toggle("active");
}

//Word scrambler

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars =
      "qwertyuiopasdfghjklzxcvbnm()@£^%&!<>-_\\/~;:|[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.18) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  "Software Engineer",
  "Machine-learning Engineer",
  "Freelancer",
  "Tech passionate"
];

const el = document.querySelector(".text");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 2000);
  });
  counter = (counter + 1) % phrases.length;
};

next();

