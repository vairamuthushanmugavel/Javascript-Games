var grid = document.querySelector(".grid")
var cards =  [
    {
        name : "angularjs",
        src : "assets/angular.svg"
    },
    {
        name : "angularjs",
        src : "assets/angular.svg"
    },
    {
        name : "ember",
        src : "assets/ember.svg"
    },
    {
        name : "ember",
        src : "assets/ember.svg"
    },
    {
        name : "grunt",
        src : "assets/grunt.svg"
    },
    {
        name : "grunt",
        src : "assets/grunt.svg"
    },
    {
        name : "node",
        src : "assets/node.svg"
    },
    {
        name : "node",
        src : "assets/node.svg"
    },
    {
        name : "vue",
        src : "assets/vue.svg"
    },
    {
        name : "vue",
        src : "assets/vue.svg"
    },
    {
        name : "react",
        src : "assets/react.svg"
    },
    {
        name : "react",
        src : "assets/react.svg"
    }
]

//Array Shuffleing method
function shuffle(arr){
    arr.sort(()=>{
       return  0.5 -  Math.random();
    })
}
shuffle(cards);
//append to the dom 

const container = new DocumentFragment();
for(let card of cards){
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = card.src;
    img.className = "grid__cardimg"
    div.className = "grid__card"
    img.alt = "";
    div.appendChild(img);
    container.appendChild(div);
}
grid.appendChild(container);




