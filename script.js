const quizData = [
    {
        question: "What is your name?",
        a: "Priyanka",
        b: "Amit",
        c: "Arpita Narayan",
        d: "Family",
        correct: "a"
    },
    {
        question: "What is your age?",
        a: 67,
        b: 24,
        c: 65,
        d: 39,
        correct: "d"
    },
    {
        question: "Where do you live?",
        a: "Singapore",
        b: "Patna",
        c: "Ghaziabad",
        d: "Noida",
        correct: "c"
    },
    {
        question: "Who is the president of India?",
        a: "Priyanka",
        b: "Ram Nath Kovind",
        c: "Amit",
        d: "Arpita Narayan",
        correct: "b"
    },
    {
        question: "What is the most used programming language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does HTML stand for?",
        a: "Java Script",
        b: "Hyper Text My Language",
        c: "Hyper Text Markup Language",
        d: "Rubal",
        correct: "c"
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuizz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuizz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if(answer){

        if(answer === quizData[currentQuizz].correct){
            score++;
        }

        currentQuizz++;
        if(currentQuizz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }    
});