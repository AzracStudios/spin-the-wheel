let rotOrder = [
  -3645, -7245, -9225, -11115, -12735, -14535, -16240, -18315, -19935, -21825,
  -23625, -25515,
];

let sequence = [
  "Easy",
  "Easy",
  "Hard",
  "Crazy",
  "Medium",
  "Medium",
  "Easy",
  "Crazy",
  "Medium",
  "Hard",
  "Hard",
  "Crazy",
];

let easyQuiz = [
  [
    "Which was the capital city of The Mauryan Empire?",
    "Taxila",
    "Persepolis",
    "Pataliputra",
    "All of the Above",
    "Pataliputra",
  ],
  [
    "Who is the father of the Great Ashoka?",
    "Chandragupta",
    "Bindusara‎",
    "Chanakya",
    "None of these",
    "Bindusara‎",
  ],
  [
    "Which state has the longest coastal line in India?",
    "Kerala",
    "Gujarat",
    "West Bengal",
    "Karnataka",
    "Gujarat",
  ],
];

let mediumQuiz = [
  [
    "Which is the largest freshwater lake in India?",
    "Kaniari Lake",
    "Sukhna Lake",
    "Wular Lake",
    "Haflong Lake",
    "Wular Lake",
  ],
  [
    "Which was the First English Newspaper in India?",
    "Bengal Gazette",
    "Times Of India",
    "TN Times",
    "Indian British",
    "Bengal Gazette",
  ],
  [
    "Which is the highest dam in India?",
    "Mettur Dam",
    "Tehri Dam",
    "Rihand Dam",
    "Sardar Sarovar Dam",
    "Tehri Dam",
  ],
];

let hardQuiz = [
  [
    "Where is the Satish Dhawan Space Centre located?",
    "Tamil Nadu",
    "Chattisgarh",
    "Andhra Pradesh",
    "Telengana",
    "Andra Pradesh",
  ],
  [
    "When was Indian Space Research Organization?",
    "15 August 1969",
    "20 August 1969",
    "2 January 1970",
    "5 February 1969",
    "15 August 1969",
  ],
  [
    "In which year, the Winter Olympic Games started?",
    "1935",
    "1888",
    "1950",
    "1924",
    "1924",
  ],
];

let crazyQuiz = [
  [
    "In which country is the Newspaper published on clothing?",
    "Rome",
    "France",
    "Spain",
    "New Zealand",
    "Spain",
  ],
  [
    "Which is the world's largest bank in terms of the number of branches?",
    "Swiss Bank",
    "State Bank of India",
    "American National Bank",
    "Indian Overseas Bank",
    "State Bank of India",
  ],
  [
    "Which is India's first super computer?",
    "Param 8000",
    "Param 80000",
    "Param 800",
    "Param 8",
    "Param 800",
  ],
];

let i = 0;
let gameOver = false;
let currentDifficulty;
let deg = rotOrder[i];
let canSpin = true;
let spin = document.querySelector(".spin");
let wheel = document.querySelector(".wheel");

let quest = document.querySelector(".content");
let options = document.querySelectorAll(".opt");
let questHead = document.querySelector(".headCont");
let quizModal = document.querySelector(".quiz-modal");

let newsText = document.querySelector(".news");
let newsContinue = document.querySelector(".go");
let newsHead = document.querySelector(".news-cat");
let newsModal = document.querySelector(".news-modal");

let eI = 0;
let mI = 0;
let hI = 0;
let cI = 0;

function rotate() {
  if (gameOver == false) {
    document.querySelector(".wheel").style.transform = `rotate(${deg}deg)`;
    i++;
    deg = rotOrder[i];
  }

  currentDifficulty = sequence[i - 1];

  if (i == sequence.length) {
    gameOver = true;
  }

  console.log(currentDifficulty);
}

function loadQuiz() {
  if (currentDifficulty == "Easy" && eI < 3) {
    questHead.innerHTML = "Easy";
    quest.innerHTML = easyQuiz[eI][0];
    console.log(eI);
    for (x = 1; x <= 4; x++) {
      options[x - 1].innerHTML = easyQuiz[eI][x];
    }
  } else if (currentDifficulty == "Medium" && mI < 3) {
    (questHead.innerHTML = "Medium"), (quest.innerHTML = mediumQuiz[mI][0]);

    for (x = 1; x <= 4; x++) {
      options[x - 1].innerHTML = mediumQuiz[mI][x];
    }

    mI++;
  } else if (currentDifficulty == "Hard" && hI < 3) {
    (questHead.innerHTML = "Hard"), (quest.innerHTML = hardQuiz[hI][0]);

    for (x = 1; x <= 4; x++) {
      options[x - 1].innerHTML = hardQuiz[hI][x];
    }

    hI++;
  } else if (currentDifficulty == "Crazy" && cI < 3) {
    (questHead.innerHTML = "Crazy"), (quest.innerHTML = crazyQuiz[cI][0]);

    for (x = 1; x <= 4; x++) {
      options[x - 1].innerHTML = crazyQuiz[cI][x];
    }

    cI++;
  } else {
    endGame();
  }

  startQuiz();
}

function startQuiz() {
  if (currentDifficulty == "Easy") {
    for (x = 0; x < options.length; x++) {
      options[x].addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        console.log(easyQuiz[eI][5]);
        if (e.target.innerHTML == easyQuiz[eI][5]) {
          endQuiz(true);
          console.log(eI);
        } else if (e.target.innerHTML != easyQuiz[eI][5]) {
          endQuiz(false);
          console.log(eI);
        }
      });
    }
  }
}

function endQuiz(correct) {
  let displayNews =
    correct == true ? displayPositiveNews() : displayNegativeNews();
  quizModal.classList.remove("visible");
  quizModal.classList.add("hidden");
  console.log(eI);
}

function endGame() {
  gameOver = true;
}

function displayPositiveNews() {
  canSpin = true;
  newsModal.classList.remove("hidden");
  newsModal.classList.add("visible");
  newsHead.innerHTML = "You were correct!";
  newsText.innerHTML = "Positive News";

  if (currentDifficulty == "Easy") {
    eI += 1;
  }

  console.log(eI);
}

function displayNegativeNews() {
  canSpin = true;
  newsModal.classList.remove("hidden");
  newsModal.classList.add("visible");
  newsHead.innerHTML = "You were wrong :(";
  newsText.innerHTML = "Negative News";
}

window.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && canSpin == true) {
    rotate();
    canSpin = false;
  }
});

spin.addEventListener("click", (e) => {
  if (canSpin == true) {
    rotate();
    canSpin = false;
  }
});

wheel.addEventListener("transitionend", (e) => {
  quizModal.classList.remove("hidden");
  quizModal.classList.add("visible");
  questHead.innerHTML = currentDifficulty;
  loadQuiz();
});

newsContinue.addEventListener("click", (e) => {
  newsModal.classList.remove("visible");
  newsModal.classList.add("hidden");
});
