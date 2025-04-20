const questions = [
    {
        question: "What is 25 * 9?",
        options: ["225", "474", "585", "526"],
        answer: "225"
    },
    {
        question: "Aam Admi Bima Yojna was launched on?",
        options: ["Nov 14,2011", "March 5,2009", "March 10,2008","October 2,2007"],
        answer: "October 2,2007"
    },
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Bihar", "Tamil nadu", "I"],
        answer: "Delhi"
    },
    {
        question: "What is the qualification for CDS?",
        options: ["12th pass", "Graduate", "Post graduate", "Metric pass"],
        answer: "Graduate"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;

const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timeElement = document.getElementById('time');
const resultElement = document.getElementById('result');

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.classList.add('hide');
    startTimer();
    showQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        endQuiz();
        return;
    }

    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
    
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }
    
    currentQuestion++;
    showQuestion();
}

function endQuiz() {
    clearInterval(timer);
    questionElement.classList.add('hide');
    optionsElement.classList.add('hide');
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
}