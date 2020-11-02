//Click on Btn Answer
let indexCount = 0;
let correctAnswersCount = 0;
let radioBtnChecked = document.querySelectorAll(".question-item input[name=country]");

radioBtnChecked.forEach((item) => {

    item.addEventListener('click', () => {
        
        btnAnswer.removeAttribute("disabled");
        
        btnAnswer.addEventListener('click', () => {
            checkCurrentAnswer(data[indexCount], document.querySelector(".question-item input[name=country]:checked").value);
            indexCount = indexCount + 1;
            if(indexCount <= data.length - 1){
                questionWrapper.innerHTML = generateQuestionItem(data[indexCount]);        
                questionCount.innerHTML = `question is ${indexCount + 1}/${data.length}</span>`; 
                
                questionWrapper.appendChild(btnAnswer); 
                questionWrapper.appendChild(questionCount);       
            }else{
                questionWrapper.innerHTML = `<div class='finish-quiz'>Congrats!!! You finish the Quiz!</div><div>Your results are ${correctAnswersCount}/${data.length}</div>`;
            }   
            //btnAnswer.setAttribute("disabled", "true");
        
        });
    
    });

});



//check the current answer
const checkCurrentAnswer = (currentQuestionItem, currentAnswer) => {
   
    if(currentQuestionItem.correctAnswer === currentAnswer){
        correctAnswersCount = correctAnswersCount + 1;
    }
   
};