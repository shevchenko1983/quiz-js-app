let data = [
    {
        title: "What's the capital of Ukraine",
        questions: [ "Moscow", "Harkov", "Kiev"],
        correctAnswer: "Kiev",
    },
    {
        title: "What's the capital of Spain",
        questions: ["Moscow", "Madrid", "Real"],
        correctAnswer: "Madrid",
    },
    {
        title: "What's the capital of Canada",
        questions: ["New York", "Toronto", "Montreal"],
        correctAnswer: "Toronto",
    },
    {
        title: "What's the capital of Italy",
        questions: ["Rome", "Neapol", "Florencia"],
        correctAnswer: "Rome",
    }, 
];


let root = document.querySelector('#root');

let questionWrapper =  document.createElement("div");
questionWrapper.classList.add("question-wrapper");

let btnAnswer = document.createElement("button");
btnAnswer.innerHTML = "Answer";
btnAnswer.classList.add("btn-answer");
btnAnswer.setAttribute("disabled","true");

//Append Question Item to the root
//data.forEach((questionItem, index) => questionWrapper.innerHTML = generateQuestionItem(questionItem));
let indexOfQuestion = 0;
let questionCount = document.createElement("span");
questionCount.innerHTML = `question is ${indexOfQuestion + 1}/${data.length}</span>`; 
questionWrapper.innerHTML = generateQuestionItem(data[indexOfQuestion]);


questionWrapper.appendChild(btnAnswer);
questionWrapper.appendChild(questionCount);
root.appendChild(questionWrapper);



