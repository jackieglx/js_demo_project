//方法2： using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function (){
        questions.forEach(function(q){
            if (q !== question){
                q.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });

})




//方法1： traversing the dom
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(function (btn){
//     btn.addEventListener('click', function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
//
// })