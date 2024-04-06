const form=document.querySelector('form');
const correctAnswer=["A","C","C","B","A"];
const result=document.querySelector('.result');
const div=document.querySelectorAll(".question");
const icon=document.querySelector('.quiz');
const btn=document.querySelector('.night-icon')



icon.addEventListener("click",(event)=>{
    if(event.target.classList.contains('night-icon')){
        console.log(event.target)
        if(icon.classList.contains('quiz')){
            icon.classList.remove('quiz')
            icon.classList.add('night-mode');
            // console.log("exe")
        }
        else{
            icon.classList.remove('night-mode')
            icon.classList.add('quiz')
            // console.log("exe")
        }
    }

});

btn.addEventListener("click",(event)=>{
    if(btn.classList.contains('bi-moon-fill')){
        btn.classList.remove('bi-moon-fill')
        btn.classList.add('bi-brightness-low-fill');
    }
    else{
        btn.classList.remove('bi-brightness-low-fill')
        btn.classList.add('bi-moon-fill')
    }

});
    

    


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let score=0;
    const userAnswers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    

    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswer[index]){
            score+=1;
            div[index].classList.add("correct");
        }
        else{
            div[index].classList.add("wrong");
        }
    });
    scrollTo(0,0);
    result.classList.remove('hide');
    result.querySelector("p").textContent=`You scored ${score}/5!`;
    
});


