//Parse Question
const generateQuestionItem = (questionItem) => {
    return `
        <div class="question-item">
            <h3>${questionItem.title}</h3>
            ${questionItem.questions.map((item, index) => {
                return `<input type="radio" name="country" id="${index}" value="${item}"/><span>${item}</span>`;
            })}            
        </div>`;
}