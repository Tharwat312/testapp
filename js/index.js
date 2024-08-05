//https://opentdb.com/api.php?amount=5&category=9&difficulty=easy

import Quiz from "./quiz.js";
import Questions from "./question.js";
//DOM Selection
const categorySelector = document.querySelector("#categoryMenu");
const difficultySelector = document.querySelector("#difficultyOptions");
const numbersSelector = document.querySelector("#questionsNumber");
const btnSelector = document.querySelector("#startQuiz");
export const formSelector = document.querySelector("#quizOptions");
export const rowDataSelector = document.querySelector("#rowData");
export let questions = [];
export let myQuiz = {};
//Event Listeners
btnSelector.addEventListener("click", async () => {
    let values = {
        category: categorySelector.value,
        difficulty: difficultySelector.value,
        numbers: numbersSelector.value
    }
    //Create Quiz
    myQuiz = new Quiz(values); //Instantiate a new object from Quiz Class.
    questions = await myQuiz.getQuestions();
    console.log(questions);
    myQuiz.hideForm();
    //Create Question
    let myQuestion = new Questions(0); // Insatnaite a new object from Questions Class
    myQuestion.displayQuestions();
});
