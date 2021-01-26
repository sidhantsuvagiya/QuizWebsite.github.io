// questions database

const quizDb = [
  {
    question: " Q1. Which of the following tag is used for drop down list?",
    a: " <select>",
    b: " <text>",
    c: " <textarea>",
    d: " <dropdown>",
    ans: "a",
  },
  {
    question: " Q2. The <hr> tag in HTML is used for -",
    a: "new line",
    b: "vertical ruler",
    c: "new paragraph",
    d: "horizontal ruler",
    ans: "d",
  },
  {
    question: " Q3. In CSS, styling elements can be done by ?",
    a: "id",
    b: "class",
    c: "tag",
    d: "All of the above",
    ans: "d",
  },
  {
    question:
      " Q4. CSS is the language we use to style an ___________ document.",
    a: "PHP",
    b: "HTML",
    c: "SQL",
    d: ".Net",
    ans: "b",
  },
  {
    question: " Q5. Inside which HTML element do we put the JavaScript?",
    a: "<style>",
    b: "<script>",
    c: "<Link>",
    d: "<div>",
    ans: "b",
  },
];

//  select tag
const ques = document.querySelector(".ques");
const options = document.querySelectorAll(".options");
const quizDiv = document.querySelector(".quiz_div");

const op1 = document.querySelector("#op1");
const op2 = document.querySelector("#op2");
const op3 = document.querySelector("#op3");
const op4 = document.querySelector("#op4");

const submit = document.querySelector(".submit");

const scoreDiv = document.querySelector(".score_div");
const footer = document.querySelector("footer");

let questions = 0;
let score = 0;

// load frist question
const loadQuestion = (lq) => {
  ques.innerText = quizDb[lq].question;
  op1.innerText = quizDb[lq].a;
  op2.innerText = quizDb[lq].b;
  op3.innerText = quizDb[lq].c;
  op4.innerText = quizDb[lq].d;
};

// check answer
const checkQues = () => {
  let userCheck;

  for (ele of options) {
    if (ele.checked) {
      userCheck = ele.id;
      ele.checked = false;
    }
  }

  if (userCheck == quizDb[questions].ans) {
    score++;
  }
};

// loadQuestion
loadQuestion(questions);

//   click on submit buttun
submit.addEventListener("click", () => {
  checkQues();
  if (questions < quizDb.length - 1) {
    questions++;
    loadQuestion(questions);
  } else {
    quizDiv.style.display = "none";
    scoreDiv.style.display = "flex";
    scoreDiv.children[0].innerText = `your score is ${score}/${quizDb.length} 📋`;
    footer.style.display = "block";
  }
});
