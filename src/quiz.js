class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions; // array of instances of the class Question
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }

    moveToNextQuestion() {
        this.currentQuestionIndex += 1
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]]
        }
    }

    checkAnswer(answer) {
        if (answer) {
            this.correctAnswers += 1;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        }
        if (this.currentQuestionIndex = this.questions.length) {
            return true
        }
    }

    filterQuestionsByDifficulty(difficulty) {
        if (typeof difficulty !== "number" || difficulty > 3 || difficulty < 1) {
            return this.questions;
        }

        this.questions = this.questions.filter((question) => {
            return question.difficulty === difficulty;
        })
    }

    averageDifficulty() {
        const total = this.questions.reduce(function (acc, dif) {
            return acc + dif.difficulty
        }, 0)

        return total / this.questions.length
    }
}