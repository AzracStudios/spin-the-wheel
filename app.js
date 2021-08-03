let rotOrder = [
  -3645, -7245, -9225, -11115, -12735, -14535, -16240, -18315, -19935, -21825,
  -23625, -25515,
];

let sequence = [
  "easy",
  "easy",
  "hard",
  "crazy",
  "medium",
  "medium",
  "easy",
  "crazy",
  "medium",
  "hard",
  "hard",
  "crazy",
];

let currentDifficulty;

// let wheel = document.querySelector(".spin")
let i = 0;
let deg = rotOrder[i];
let gameOver = false;

function rotate() {
	if(gameOver == false){		
	  document.querySelector(".wheel").style.transform = `rotate(${deg}deg)`;
  	i++;
  	deg = rotOrder[i];
	}
	
  currentDifficulty = sequence[i-1]	
  
  if(i == sequence.length){
    gameOver = true;
  }

  console.log(currentDifficulty)
}

window.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    rotate();
  }
});

// wheel.addEventListener("click", (e) => {
//   rotate()
// })

// wheel.addEventListener("transitionend", (e) => {
// 	console.log("THE WHEEL HAS STOPPED SPINNING")
// })
