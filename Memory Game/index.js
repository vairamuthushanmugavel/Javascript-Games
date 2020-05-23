var grid = document.querySelector(".grid");
var cards = [
  {
    name: "angularjs",
    src: "assets/angular.svg",
  },
  {
    name: "angularjs",
    src: "assets/angular.svg",
  },
  {
    name: "ember",
    src: "assets/ember.svg",
  },
  {
    name: "ember",
    src: "assets/ember.svg",
  },
  {
    name: "grunt",
    src: "assets/grunt.svg",
  },
  {
    name: "grunt",
    src: "assets/grunt.svg",
  },
  {
    name: "node",
    src: "assets/node.svg",
  },
  {
    name: "node",
    src: "assets/node.svg",
  },
  {
    name: "vue",
    src: "assets/vue.svg",
  },
  {
    name: "vue",
    src: "assets/vue.svg",
  },
  {
    name: "react",
    src: "assets/react.svg",
  },
  {
    name: "react",
    src: "assets/react.svg",
  },
];

//Array Shuffleing method
function shuffle(arr) {
  arr.sort(() => {
    return 0.5 - Math.random();
  });
}
shuffle(cards);
//append to the dom

//unfliping the cards

function unFlipCards() {
  locked = true;
  setTimeout(() => {
    firstCard.classList.remove("grid__card--flip");
    secondCard.classList.remove("grid__card--flip");
    locked = false;
    resetBoard();
  }, 1000);
}

function resetBoard() {
  hasflipped = false;
  locked = false;
  firstCard = null;
  secondCard = null;
}

//diable the cards once it has matched

function disableCards() {
  firstCard.removeEventListener("click", flipcard);
  secondCard.removeEventListener("click", flipcard);
  resetBoard()
}

//function for checking the match

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unFlipCards();
}

//fliping the card.

let hasflipped = false;
let locked = false;
let firstCard = null;
let secondCard = null;
function flipcard() {
  console.log("entering");
  //if user clicks the same card again
  if (firstCard === this) {
    return;
  }
  if (locked) {
    return;
  }
  this.classList.add("grid__card--flip");
  if (!hasflipped) {
    hasflipped = true;
    firstCard = this;
    return;
  }
  console.log("locked");
  secondCard = this;
  hasflipped = true;
  checkForMatch();
}

const container = new DocumentFragment();
for (let card of cards) {
  let div = document.createElement("div");
  div.className = "grid__card";
  div.setAttribute("data-name", card.name);
  let frontface = document.createElement("img");
  frontface.src = card.src;
  frontface.className = "grid__cardimg frontface";
  div.appendChild(frontface);

  let backface = document.createElement("img");
  backface.src = "assets/js.svg";
  backface.className = "grid__cardimg backface";
  div.appendChild(backface);

  container.appendChild(div);
  div.addEventListener("click", flipcard);
}
grid.appendChild(container);
