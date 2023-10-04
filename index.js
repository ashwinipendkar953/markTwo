import readlineSync from "readline-sync";
import chalk from 'chalk';
var score = 0;
var highScores = [
  {
    name: "Ashwini",
    score: 9,
  },
  {
    name: "Sam",
    score: 7,
  },

]

const reactQuestions = [
  {
    question: "What is React?",
    options: [
      { letter: "A", text: "A programming language" },
      { letter: "B", text: "A JavaScript library for building user interfaces" },
      { letter: "C", text: "A server-side framework" },
      { letter: "D", text: "A database management system" },
    ],
    answer: "B",
  },
  {
    question: "What does JSX stand for in React?",
    options: [
      { letter: "A", text: "JavaScript XML" },
      { letter: "B", text: "JavaScript XHR" },
      { letter: "C", text: "JSON Express" },
      { letter: "D", text: "JavaScript Express" },
    ],
    answer: "A",
  },
  {
    question: "Which component lifecycle method is called after a component is rendered?",
    options: [
      { letter: "A", text: "componentDidMount" },
      { letter: "B", text: "componentWillUpdate" },
      { letter: "C", text: "componentWillMount" },
      { letter: "D", text: "componentDidUpdate" },
    ],
    answer: "A",
  },
  {
    question: "What is the purpose of the state in React components?",
    options: [
      { letter: "A", text: "To store props" },
      { letter: "B", text: "To store component methods" },
      { letter: "C", text: "To manage data that can change over time" },
      { letter: "D", text: "To manage global application state" },
    ],
    answer: "C",
  },
  {
    question: "Which React hook is used to add state and lifecycle features to functional components?",
    options: [
      { letter: "A", text: "useState" },
      { letter: "B", text: "useEffect" },
      { letter: "C", text: "useLifecycle" },
      { letter: "D", text: "useStateAndEffect" },
    ],
    answer: "B",
  },
  {
    question: "What is a prop in React?",
    options: [
      { letter: "A", text: "A component's internal state" },
      { letter: "B", text: "A method to update the state" },
      { letter: "C", text: "A function used to render components" },
      { letter: "D", text: "A data passed from parent to child components" },
    ],
    answer: "D",
  },
  {
    question: "Which tool can be used to manage the state of a React application?",
    options: [
      { letter: "A", text: "Redux" },
      { letter: "B", text: "jQuery" },
      { letter: "C", text: "Express" },
      { letter: "D", text: "Angular" },
    ],
    answer: "A",
  },
  {
    question: "What is the purpose of the key prop in React lists?",
    options: [
      { letter: "A", text: "It defines the layout of the list" },
      { letter: "B", text: "It provides a unique identifier for each list item" },
      { letter: "C", text: "It adds styling to the list" },
      { letter: "D", text: "It defines the order of the list items" },
    ],
    answer: "B",
  },
  {
    question: "Which function is used to render multiple components in React?",
    options: [
      { letter: "A", text: "renderComponent" },
      { letter: "B", text: "mountComponents" },
      { letter: "C", text: "createComponent" },
      { letter: "D", text: "ReactDOM.render" },
    ],
    answer: "D",
  },
  {
    question: "What is the purpose of React Router?",
    options: [
      { letter: "A", text: "To manage application state" },
      { letter: "B", text: "To fetch data from APIs" },
      { letter: "C", text: "To navigate between different views in a single-page application" },
      { letter: "D", text: "To manage component styles" },
    ],
    answer: "C",
  },
];

function line() {
  console.log("--------------");
}

function welcome() {
  var userName = readlineSync.question("Enter your name: ");
  var welcomeMsg = `Welcome ${chalk.bold(userName)} to 'React Quiz!' Game. \nGet ready to test your knowledge?`;
  console.log(chalk.blue.underline(welcomeMsg));

  console.log(chalk.inverse("You can answer using the letter options (a, b, c, d)"));
}

function quiz(question, answer, option) {
  var userAnswer = readlineSync.question(question + "\n" + option);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("Right"));
    score++;
  } else {
    console.log(chalk.bgRed("Wrong"));
  }
  console.log(chalk.cyanBright("Score : " + score));
  line();
}



function play() {
  for (let i = 0; i < reactQuestions.length; i++) {
    let currentQuestion = reactQuestions[i];
    let options = "";
    currentQuestion.options.map(option => options += option.letter + ") " + option.text + "\n");
    quiz(currentQuestion.question, currentQuestion.answer, options);
  }
}


function showScore() {
  console.log(chalk.blue("YAY! You Scored " + score));
  console.log("Check out the high scores : ");
  highScores.map(score => console.log(chalk.inverse(score.name + " : " + score.score)));
  line();
  for (let i = 0; i < highScores.length; i++) {
    let currentScore = highScores[i];
    if (!(score < currentScore)) {
      console.log(chalk.yellow("Congratulations on your high score! Please share a screenshot of your score, and I will update the data."));
      break;
    }
  }
}


welcome();
line();
play();
showScore();
