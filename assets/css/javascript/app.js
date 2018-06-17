$(document).ready(function () {


    var myQuestions = [

        {
            question: "What is the definition of Cholecystitis?",

            answers: {

                a: 'Liver Inflammation',

                b: 'Renal Inflammation',

                c: 'Pancreatic Inflammation',

                d: 'Gallbladder Inflammation'
            },
            correctAnswer: 'd'
        },

        {
            question: "What is the definition of Nephrolithiasis?",

            answers: {
                a: 'Liver Ascites',

                b: 'Renal Calculi (Stones)',

                c: 'Pancreatic Cyst',

                d: 'Hydronephrosis'

            },
            correctAnswer: 'b'

        },

        {
            question: " What is the definition of an Aortic Aneurysm?",

            answers: {
                a: 'Enlaged Lymphnode',

                b: 'Carotid Bulb Tumor',

                c: 'Localized outpouching of the Arterial Wall of the Aorta',

                d: 'Atherosclerosis of the Aorta'

            },
            correctAnswer: 'c'
        },

        {

            question: " What is the definition of an Ovarian Cyst?",

            answers: {
                a: 'Endometriosis',

                b: 'Fibroid',

                c: 'Endometrial Polyp',

                d: 'Fluid filled sac witin the Ovary'

            },
            correctAnswer: 'd'

        },
        {

            question: " What is the definition of Hashimoto's Thyroiditis?",

            answers: [
                {
                    answerText: 'Goiter',
                    answerLetter: 'a'
                },
                {
                    answerText: 'Thyroid Nodules',
                    answerLetter: 'b'
                },
                {
                    answerText: 'Autoimmune Disorder that Attacks the Thyroid',
                    answerLetter: 'c'
                },
                {
                    answerText: 'Excessive Production of the Thyroid Hormone',
                    answerLetter: 'd'
                }
            ],
            correctAnswer: 'c'

        }

    ];



    function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

        //function showQuestions(questions, quizContainer) {
            console.log("called showQuestions");
            var output = [];
            var answers;

            for (var i = 0; i < questions.length; i++) {
                console.log("questions.length", questions.length)
                console.log("first loop")
                answers = [];
                console.log(questions);
                console.log(i)


                
                for (letter in questions[i].answers) {
                    console.log("second loop");
                    // var radioInput = $("<input type='radio'>");
                    // radioInput.attr("value", letter.answerLetter);

                    // var radioLabel = $("<label>");
                    // radioLaberl.text(letter.answerText);
\

                    answers.push(
                        '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'

                        + letter + ':'

                        + questions[i].answers[letter]

                        + '</label>'
                    );
                }




                output.push(
                    '<div class="question">' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'

                );
            }

            console.log(output);

            quizContainer.textContent = output.join("");

        //}
        //showQuestions(questions, quizContainer);




        function showResults(questions, quizContainer, resultContainer) {

            var answerContainer = quizContainer.querySelectorAll('.answers');
            var userAnswer = '';
            var numCorrect = 0;


            for (var i = 0; i < questions.length; i++) {

                userAnswer = (answerContainer[i].querySelector('input[name=question' + i + ' ]:checked') || {}).value;

                if (userAnswer === questions[i].correctAnswer) {

                    numCorrect++;


                }

            }

            resultsContainer.innerHTML = numCorrect + 'outof' + questions.length;
        }

        submitButton.onclick = function () {
            showResults(questions, quizContainer, resultsContainer);

        }
    }



    var quizContainer = document.getElementById('#quiz');
    var resultsContainer = document.getElementById('#results');
    var submitButton = document.getElementById('#submit');




    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    clock();
})

function clock() {
    var mytimer = setInterval(myClock, 1000);
    var c = 60;

    function myClock() {
        document.getElementById("demo").innerHTML = --c;
        if (c == 0) {
            clearInterval(myTimer);
            alert("Reached zero");


        }
    }
}





// still can't get it to work--thanks for the help-timer was working- can not generate questions on page---///














