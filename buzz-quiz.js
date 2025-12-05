const quizData = [
  {question:"Question 1: What’s your perfect plan for a weekend?",answers:[{text:"A. Going on an adventure — hiking, traveling, exploring new places",value:1},{text:"B. Chilling at home with snacks and friends",value:2},{text:"C. Doing something creative — art, music, writing",value:3},{text:"D. Solving puzzles or mysteries",value:4}]},
  {question:"Question 2: When faced with a difficult situation, you usually:",answers:[{text:"A. Dive in headfirst — act now, figure out later.",value:1},{text:"B. Stay calm — rely on support from friends/family.",value:2},{text:"C. Think outside the box — use creativity or empathy.",value:3},{text:"D. Analyze every detail before acting.",value:4}]},
  {question:"Question 3: What kind of story do you enjoy most?",answers:[{text:"A. Action-packed adventures.",value:1},{text:"B. Feel-good comedies or light stories.",value:2},{text:"C. Magical, fantastical, creative tales.",value:3},{text:"D. Mysteries, thrillers, or dramas.",value:4}]},
  {question:"Question 4: If you had a superpower, which would you choose?",answers:[{text:"A. Super strength / survival instinct — unstoppable and brave.",value:1},{text:"B. The power to make people laugh or feel safe — bring comfort and joy.",value:2},{text:"C. Magic or creative powers — shape worlds with imagination.",value:3},{text:"D. Super-sharp mind — see through deception, plan ahead, solve mysteries.",value:4}]},
  {question:"Question 5: What’s your favourite way to spend spare time?",answers:[{text:"A. Doing something active — adventure sports, exploring, travel.",value:1},{text:"B. Hanging out with friends or family, watching shows, relaxing.",value:2},{text:"C. Drawing, writing, playing instruments — being creative.",value:3},{text:"D. Playing strategy games, solving puzzles, reading mysteries/thrillers.",value:4}]},
  {question:"Question 6: In a group, you are usually the one who",answers:[{text:"A. Takes the lead, motivates others, makes bold moves.",value:1},{text:"B. Keeps everyone comfortable, jokes around, cheers people up.",value:2},{text:"C. Brings new ideas, encourages imagination and dreams.",value:3},{text:"D. Observes carefully, offers insight, solves problems.",value:4}]},
  {question:"Question 7: Which of these animals do you feel most like?",answers:[{text:"A. Eagle — fierce, free, always exploring.",value:1},{text:"B. Dog — loyal, friendly, fun to be with.",value:2},{text:"C. Owl — wise, dreamy, a little mysterious.",value:3},{text:"D. Fox — clever, quick-witted, always thinking.",value:4}]},
  {question:"Question 8: How do you deal with changes or surprises in life?",answers:[{text:"A. Jump right in — you love unpredictability.",value:1},{text:"B. Go with the flow — rely on friends and positivity.",value:2},{text:"C. Adapt with creativity — adjust and reinvent if needed.",value:3},{text:"D. Analyze first — plan carefully before adjusting.",value:4}]}
];

const results = [
  { minScore: 8,  maxScore: 10, text: "UNMARRY", img: "https://i.ibb.co/PzcqR6C9/UNMARRY.jpg" },
  { minScore: 11, maxScore: 13, text: "SHAKE, RATTLE & ROLL EVIL ORIGINS", img: "https://i.ibb.co/MmjvmWV/SHAKE-RATTLE-ROLL.jpg" },
  { minScore: 14, maxScore: 16, text: "REKONEK", img: "https://i.ibb.co/FbsL1Gt0/REKONEK.jpg" },
  { minScore: 17, maxScore: 19, text: "MANILA'S FINEST", img: "https://i.ibb.co/Mkf5Vqsx/MANILAS-FINEST.jpg" },
  { minScore: 20, maxScore: 22, text: "LOVE YOU SO BAD", img: "https://i.ibb.co/hxhhSSMj/LOVE-YOU-SO-BAD.jpg" },
  { minScore: 23, maxScore: 25, text: "I'MPERFECT!", img: "https://i.ibb.co/NgHzhTP8/IMPERFECT.jpg" },
  { minScore: 26, maxScore: 28, text: "BAR BOYS: AFTER SCHOOL", img: "https://i.ibb.co/ds5tv55s/BAR-BOYS-AFTER-SCHOOL.jpg" },
  { minScore: 29, maxScore: 32, text: "CALL ME MOTHER", img: "https://i.ibb.co/sdmW6VzH/CALL-ME-MOTHER.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
  let currentQuestion = 0;
  let score = 0;

  const questionContainer = document.getElementById("question-container");
  const answerButtons = document.getElementById("answer-buttons");
  const resultContainer = document.getElementById("result-container");

  function showQuestion() {
    questionContainer.innerHTML = `<h3>${quizData[currentQuestion].question}</h3>`;
    answerButtons.innerHTML = "";
    quizData[currentQuestion].answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.innerText = answer.text;
      btn.onclick = () => selectAnswer(answer.value);
      answerButtons.appendChild(btn);
    });
  }

  function selectAnswer(value) {
    score += value;
    currentQuestion++;
    if(currentQuestion < quizData.length){
      showQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    questionContainer.style.display = "none";
    answerButtons.style.display = "none";
    const result = results.find(r => score >= r.minScore && score <= r.maxScore);
    resultContainer.innerHTML = `<h3>${result.text}</h3><img src="${result.img}">`;
  }

  showQuestion();
});
