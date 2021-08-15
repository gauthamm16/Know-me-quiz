const readlineSync = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
var count = 0;

questions = {
  questionOne: "Where does Gautham live: ",
  answerOne: "Chennai",
  questionTwo: "Whats Gautham's age: ",
  answerTwo: "20",
  questionThree: "Where does he study: ",
  answerThree: "VIT",
  questionFour: "What is his major: ",
  answerFour: "Computer Science and Engineering",
  questionFive: "What is he trying to learn: ",
  answerFive: "web dev",
};

function qna(q, a) {
  const answer = readlineSync.question(q);
  if (answer === a) {
    log(chalk.green("Correct Answer "));
    count++;
  } else {
    log(chalk.red("Oops, the answer is: ") + chalk.cyan(a));
  }
}

log(chalk.yellow("Alright, Let's see how well you know Gautham\n"));
const playerName = readlineSync.question("To start off, What's your name: ");
log(
  chalk.yellow("So ") +
    chalk.yellow(playerName) +
    chalk.yellow(" the quiz starts ") +
    chalk.bgRed("NOW!")
);

qna(questions.questionOne, questions.answerOne);
qna(questions.questionTwo, questions.answerTwo);
qna(questions.questionThree, questions.answerThree);
qna(questions.questionFour, questions.answerFour);
qna(questions.questionFive, questions.answerFive);

log(chalk.yellow("\n\nYour total score is: " + chalk.bgCyanBright(count)));
if (count < 4) {
  log(chalk.yellow("High scores"));
  log(chalk.red("Gautham\t") + chalk.cyan("5"));
  log(chalk.red("Jigyasa\t") + chalk.cyan("4"));
  log(chalk.red(`${playerName}\t`) + chalk.cyan(`${count}`));
} else {
  log(chalk.yellow("High scores"));
  log(chalk.red("Gautham\t") + chalk.cyan("5"));
  log(chalk.red(`${playerName}\t`) + chalk.bgYellow(`${count}`));
  log(chalk.red("Jigyasa\t") + chalk.cyan("4"));
}
