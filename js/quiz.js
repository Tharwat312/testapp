import { formSelector, rowDataSelector } from "./index.js";

class Quiz {
    constructor({ category, difficulty, numbers }) {
        this.score = 0;
        this.category = category;
        this.difficulty = difficulty;
        this.numbers = numbers;
    }
    getQuestions = async () => {
        // await try .. catch
        // not used await .then .catch
        try {
            let payload = await fetch(`https://opentdb.com/api.php?amount=${this.numbers}&category=${this.category}&difficulty=${this.difficulty}`);
            let response = await payload.json();
            return response.results;
        }
        catch (error) {
            console.log(error);
        }
    }
    hideForm = () => {
        formSelector.classList.replace("d-flex", "d-none");
    }
    showFinalResult = () => {
        rowDataSelector.innerHTML = `
        <div
            class="question shadow-lg col-lg-12  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3">
        <h2 class="mb-0 text-center">
            ${this.score == this.numbers ? `Congratulations! 🎉` : `Better luck next time, You answered ${this.score} out of ${this.numbers} questions!`}
        </h2>
            <button class="again btn btn-primary rounded-pill"><i class="bi bi-arrow-repeat"></i> Try Again</button>
        </div>
        `;
        const againBtnSelector = document.querySelector(".again");
        againBtnSelector.addEventListener("click", () => {
            window.location.reload(); //refresh the document
        })
    }
};

export default Quiz;