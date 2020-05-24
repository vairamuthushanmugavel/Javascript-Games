var hitposition = null;
var score = 0;
let dirts = document.querySelectorAll(".dirt");
let scoreEle = document.querySelector(".score");
let startbtn = document.querySelector("#start");
let randomInterval = null;
let timeInterval = null;
let timeLeft = 60;
let timeleftEle = document.querySelector(".timeleft");
//Adding the event listener to start the game

startbtn.addEventListener("click", function () {
  randomInterval = setInterval(randomdirt, 1000);
  timeLeft =  60
  score = 0
  scoreEle.textContent = score;
  timeInterval = setInterval(() => {
    if (timeLeft == 0) {
      clearInterval(randomInterval);
      clearInterval(timeInterval);
      alert("Game over");
      return ;
    }
    timeLeft--;
    timeleftEle.innerHTML = timeLeft;
  }, 1000);
});

function randomdirt() {
  for (let dirt of dirts) {
    dirt.querySelector(".mole").classList.remove("show");
  }
  let pos = Math.floor(Math.random() * dirts.length);
  dirts[pos].querySelector(".mole").classList.add("show");
  hitposition = pos;
}

dirts.forEach((element) => {
  element.addEventListener("click", onHit);
});

//when user clicks the the box
function onHit() {
  // console.log(hitposition, this.id);
  if (Number(this.id) === hitposition) {
    score++;
    scoreEle.innerHTML = score;
  }
}
