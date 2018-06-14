if (c == 0) {
function clock() {
    var myTimer = setInterval(myClock, 1000);
    var c = 60;
  
    function myClock() {
      document.getElementById("demo").innerHTML = --c;
        clearInterval(myTimer);
        alert("Reached zero");
      }
    }
  }
 
  $(document).ready(function () {

    function generateQuiz(questions, quizContainer, resultContainer, submitButton) {


        submitButton.onclick = function(){
            showResults(questions, quizContainer,resultsContainer);
        }
        
         var myQuestions = [ 

         {
            question1: "1. What is the definition of Cholecystitis?",

            answers: {
                
                a: 'Liver Inflammation',
                b: 'Renal Inflammation',

                c: 'Pancreatic Inflammation',

                d: 'Gallbladder Inflammation'
        },
                correctAnswer: 'd'
    },

    {
            question: "2. What is the definition of Nephrolithiasis?",

            answers: {
                a: 'Liver Ascites',

                b: 'Renal Calculi (Stones)',

                c: 'Pancreatic Cyst',

                d: 'Hydronephrosis'
               
        },
            correctAnswer: 'b'

    },

    {
         question: "3. What is the definition of an Aortic Aneurysm?",

         answers: {
                a: 'Enlaged Lymphnode',
                 
                b: 'Carotid Bulb Tumor',

                c: 'Localized outpouching of the Arterial Wall of the Aorta',

                d: 'Atherosclerosis of the Aorta',
               
        },
            correctAnswer: 'c'
    },

    {

        question: "4. What is the definition of an Ovarian Cyst?",

        answers: {
            a: 'Endometriosis',

            b: 'Fibroid',

            c: 'Endometrial Polyp',

            d: 'Fluid filled sac witin the Ovary'
           
    },
        correctAnswer: 'd'

},
{

    question: "5. What is the definition of Hashimoto's Thyroiditis?",

    answers: {
        a: 'Goiter',

        b: 'Thyroid Nodules',

        c: 'Autoimmune Disorder that Attacks the Thyroid',

        d: 'xcessive Production of the Thyroid Hormone'
       
},
        correctAnswer: 'c'

}

];

         function showQuestions(question, quizContainer) {
    
         var output = [];
         var answers;

        for (var i=o; i<questions.length; i++);
        answers = [];

        for(letter in questions[i].answers){
        answers.push(

        '<label>'
        +   '<input type="radio" name="question'+i+'" value="'+letter+'">'
            
        + letter + ':'
        
        + question[i].answers[letters]
        
        +'</label>'
    );
}

output:push(

    '<div class="question">' + questions[i].question + '</div>'
    

    + '<div class="answers">' + answers.join('') + '</div>'
    
);


    quizContainer.innerHTML = output.join('');


    showQuestions(questions, quizContainer);





function showResults(questions, quizContainer, resultContainer) {

    var answerContainer = quizContainer.querySelectorAll('.answers');
     
    var userAnswer = '';
    var numCorrect = 0;

    for (var i=0; i<questions.length; i++) {

        userAnswer = (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        if (userAnswer===questions[i].correctAnswer) {
            numCorrect++;

            answerContainer[i].style.color = 'orange';
        }
    
    else{
        answerContainer[i].style.color = 'blue';
    }

}

    resultContainer.innerHTML = numCorrect + 'outof' + questions.length;
 }


    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);

    }
    

    var quizContainer = document.write.getElementById('quiz');

    var resultsContainer = document.write.getElementById('results');

    var submitButton = document.getElementById('submit');

     
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)

 }

}

})




