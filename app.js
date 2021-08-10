//* INDEX
//#region

let i = 0;
let qI = 0;
let pI = 0;
let nI = 0;

//#endregion

//* WHEEL ROTATION ARRAYS
//#region

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

//#endregion

//* VARIABLES
//#region

let spinsLeft = 12;
let canSpin = true;
let gameOver = false;
let currentDifficulty;
let deg = rotOrder[i];
let correctAnswer = "Option";
let currentPoitiveNews = null;

//#endregion

//* DOM REFERENCES
//#region

let spin = document.querySelector(".spin");
let wheel = document.querySelector(".wheel");

let spinCounter = document.querySelector(".spinCount");

let newsText = document.querySelector(".news");
let newsContinue = document.querySelector(".go");
let newsHead = document.querySelector(".news-cat");
let newsModal = document.querySelector(".news-modal");

let options = document.querySelector(".options");
let question = document.querySelector(".content");
let headCont = document.querySelector(".headCont");
let endModal = document.querySelector(".end-modal");

let restart = document.querySelector(".restart");
let quizModal = document.querySelector(".quiz-modal");

//#endregion

//* POSITVE NEWS
//#region

let positiveNews = [
  "British PM Boris Johnson has unveiled a plan to GPS track burglars released on probation. The plan is to extend this system to all serial offenders.",
  "A New York restaurant is selling the World's most expensive fries, they cost $200 a plate. The fries are made with the World's finest ingredients and are served with a cheese dip and edible 24-carat gold.",
  "Scientists have discovered light 'echoes' emitted from behind a black hole in the Milky Way galaxy. This discovery vindicates a century-old theory by Albert Einstein.",
  "China built the maximum number of skyscrapers in 2019. But now, it plans to ban their construction. After a skyscraper wobbled in Shenzhen, questions are being raised over the quality of such projects.",
  "Did you know that India is steering more than 500 development projects across 64 countries? India's development diplomacy is exposing China's 'belt and loan' trap.",
  "July 1 is celebrated as National Doctor's Day in India in honour of physician Dr. Bidhan Chandra Roy. He was called the first medical consultant of the Indian subcontinent. Dr. Roy went on to become the Chief Minister of West Bengal.",
  "In a heart-warming initiative, window cleaners turned into superheroes by donning different costumes while working to cheer up the kids being treated at a hospital in Canada.",
  "Eastern Siberia is known for the cold wintertime temperatures but this year the region has witnessed wildly high temperatures and fires.",
  "It was a big victory for Indian diplomacy on Monday as United Nations Security Council (UNSC) presidential statement had the United Nations Convention on the Law of the Sea (UNCLOS) as the key focus and China dropped its hesitations on it.",
  "NASA has announced that it is seeking a few good men and women to assist in the advancement of its goal of transporting people to Mars by 2037.",
  "Researchers for the first time have successfully observed a supernova in its initial phase while trawling through data from Nasa’s Kepler space telescope.",
  "India's maritime security meet at United Nations Security Council (UNSC) saw robust support from Russia and the African continent.",
];

//#endregion

//*NEGATIVE NEWS
//#region

let negativeNews = [
  "Guns are not toys, yet a U.S. gun-maker is selling a LEGO-style real handgun promoting it as a 'childhood dream come to life'. This is happening in a country where gun terror is rampant",
  "Herbal and dietary supplements are causing liver damage. In Australia, several people had to get a liver transplant after consuming supplements.",
  "In Canada, Salmon are being boiled alive in river water by the heatwave. Many are injured, covered in fungus, and are expected to die.",
  "From Afghanistan to Iraq, from the Atlantic to the Pacific, America is cutting down its military presence & pulling back from conflicts it escalated. For a country that wants to be seen as a superpower, this retreat is humiliating",
  "Chinese citizens are fleeing Chinese President Xi Jinping's rule. Since Xi Jinping took power at the end of 2012, more than 600,000 Chinese citizens have applied for asylum in another country",
  "Russian President Vladimir Putin has declared that in Russia only Russian wine can be called champagne. French producers from the region of Champagne are in a fizz over the new label law.",
  "Another mass grave of kids has been unearthed in Canada. By now, more than 1000 unmarked graves have been discovered. The findings have led to an angry backlash against the Trudeau government and the Catholic Church. Churches are being set on fire.",
  "On July 4, the US marked its Independence day. 2 days before that, it exited Afghanistan following a failed war and left Kabul in path of uncertainty. From Iraq to Afghanistan, the US has time and again botched up in wars abroad.",
  "The Iranian Health Ministry on Tuesday reported that Coronavirus pandemic has claimed 95,111 lives in the country so far after 508 new deaths were registered within 24 hours. ",
  "According to a recent study from Shaare Zedek Medical Center, neutralising antibodies begin to fade among kids who catch the virus after only four months",
  "Several Indian coastal cities will be submerged by up to 2.7 feet by the end of the century, the National Aeronautics and Space Administration (NASA) of the US has predicted.",
  "A report by IPCC Working Group-I study stated that greater heat waves and droughts, increased rainfall events, and higher cyclonic activity are projected to occur across India and the subcontinent during the next several decades. ",
];

//#endregion

//* WHEEL MECHANICS
//#region

function rotate() {
  if (gameOver == false) {
    document.querySelector(".wheel").style.transform = `rotate(${deg}deg)`;
    i++;
    deg = rotOrder[i];
  }

  currentDifficulty = sequence[i - 1];

  if (spinsLeft <= 0) {
    gameOver = true;
    endGame();
  }
}

//#endregion

//* QUIZ QUESTIONS
//#region

let questions = [
  {
    text: "Which was the capital city of The Mauryan Empire?",
    answers: [
      { text: "Taxila", correct: false },
      { text: "Persepolis", correct: false },
      { text: "Pataliputra", correct: true },
      { text: "All of the above", correct: false },
    ],
  },

  {
    text: "Who is the father of the Great Ashoka?",
    answers: [
      { text: "Chandragupta", correct: false },
      { text: "Bindusara", correct: true },
      { text: "Chanakya", correct: false },
      { text: "None of these", correct: false },
    ],
  },

  {
    text: "Where is the Satish Dhawan Space Centre located?",
    answers: [
      { text: "Tamil Nadu", correct: false },
      { text: "Chattisgarh", correct: false },
      { text: "Andhra Pradesh", correct: true },
      { text: "Telengana", correct: false },
    ],
  },

  {
    text: "In which country is the Newspaper published on clothing?",
    answers: [
      { text: "Rome", correct: false },
      { text: "France", correct: false },
      { text: "Spain", correct: true },
      { text: "New Zealand", correct: false },
    ],
  },

  {
    text: "Which is the largest freshwater lake in India?",
    answers: [
      { text: "Kaniari Lake", correct: false },
      { text: "Sukhna Lake", correct: false },
      { text: "Wular Lake", correct: true },
      { text: "Haflong Lake", correct: false },
    ],
  },

  {
    text: "Which was the First English Newspaper in India?",
    answers: [
      { text: "Bengal Gazette", correct: true },
      { text: "Times Of India", correct: false },
      { text: "TN Times", correct: false },
      { text: "Indian British", correct: false },
    ],
  },

  {
    text: "Which state has the longest coastal line in India?",
    answers: [
      { text: "Kerala", correct: false },
      { text: "Gujarat", correct: true },
      { text: "West Bengal", correct: false },
      { text: "Karnataka", correct: false },
    ],
  },

  {
    text: "Which is the world's largest bank in terms of the number of branches?",
    answers: [
      { text: "Swiss Bank", correct: false },
      { text: "State Bank of India", correct: true },
      { text: "American National Bank", correct: false },
      { text: "Indian Overseas Bank", correct: false },
    ],
  },

  {
    text: "Which is the highest dam in India?",
    answers: [
      { text: "Mettur Dam", correct: false },
      { text: "Tehri Dam", correct: true },
      { text: "Rihand Dam", correct: false },
      { text: "Tehri Dam", correct: false },
    ],
  },

  {
    text: "When was Indian Space Researcch Organisation found?",
    answers: [
      { text: "15 August 1969", correct: true },
      { text: "20 August 1969", correct: false },
      { text: "2 January 1970", correct: false },
      { text: "5 February 1969", correct: false },
    ],
  },

  {
    text: "In which year did The Winter Olympic Games start?",
    answers: [
      { text: "1935", correct: false },
      { text: "1888", correct: false },
      { text: "1950", correct: false },
      { text: "1924", correct: true },
    ],
  },

  {
    text: "Which is India's first super computer?",
    answers: [
      { text: "Param 8000", correct: false },
      { text: "Param 80000", correct: false },
      { text: "Param 8", correct: false },
      { text: "Param 800", correct: true },
    ],
  },
];

//#endregion

//* QUIZ MECHANICS
//#region

function loadQuiz(currentQuestion) {
  quizModal.classList.remove("hidden");
  quizModal.classList.add("visible");

  options.innerHTML = "";

  headCont.innerText = currentDifficulty;
  question.innerText = currentQuestion.text;

  currentQuestion.answers.forEach((answer) => {
    let opt = document.createElement("button");
    opt.className = "opt";
    opt.innerText = answer.text;
    if (answer.correct) {
      opt.dataset.correct = answer.correct;
    }
    opt.addEventListener("click", validateAnswer);
    options.appendChild(opt);
  });
}

function validateAnswer(e) {
  let selectedBtn = e.target;
  let correct = selectedBtn.dataset.correct;

  if (correct) displayPositiveNews();
  else displayNegativeNews();
}

//#endregion

//* NEWS MECHANICS
//#region

function displayPositiveNews() {
  canSpin = true;
  quizModal.classList.remove("visible");
  quizModal.classList.add("hidden");
  newsModal.classList.remove("hidden");
  newsModal.classList.add("visible");
  newsHead.innerHTML = "You were correct!";
  newsText.innerHTML = positiveNews[pI];
  pI++;
  qI++;
}

function displayNegativeNews() {
  canSpin = true;
  quizModal.classList.remove("visible");
  quizModal.classList.add("hidden");
  newsModal.classList.remove("hidden");
  newsModal.classList.add("visible");
  newsHead.innerHTML = "You were wrong :(";
  newsText.innerHTML = negativeNews[nI];
  nI++;
  qI++;
}

//#endregion

//* GAME STATE CONTROLS
//#region

function endGame() {
  gameOver = true;
  endModal.classList.remove("hidden");
  endModal.classList.add("visible");
}

function restartGame() {
  window.location.reload()
}

//#endregion

//* EVENT LISTENERS
//#region

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
  loadQuiz(questions[qI]);

  if (spinsLeft > 0) {
    spinsLeft--;
    spinCounter.innerHTML = `Spins Left: ${spinsLeft}`;
  }
});

newsContinue.addEventListener("click", (e) => {
  newsModal.classList.remove("visible");
  newsModal.classList.add("hidden");
  if (spinsLeft <= 0) {
    gameOver = true;
    endGame();
  }
});

restart.addEventListener("click", (e) => {
  restartGame();
  endModal.classList.remove("visible");
  endModal.classList.add("hidden");
});

//#endregion
