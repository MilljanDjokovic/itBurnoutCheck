import {message2031, message3145, message4560, message6075, message7590, message90} from './messages.js';

// Get DOM elements
let form = document.getElementById('questionnaire');
let button = document.getElementById('formSubmit');
let showAdwice = document.getElementById('showAdwice');
let userScore = document.getElementById('score');
let modalOutput = document.getElementById('modalOutput');
let closeModalButton = document.getElementsByClassName('closeButton')[0];

//Show burnout message function using chained ternary operator

function showMessage(sum, showAdwice) {
      
        return sum >= 20 && sum <= 31 ? showAdwice.innerText = `${message2031}`
             : sum > 31 && sum <= 45 ? showAdwice.innerText = `${message3145}`
             : sum > 45 && sum <= 60 ? showAdwice.innerText = `${message4560}`
             : sum > 60 && sum <= 75 ? showAdwice.innerText = `${message6075}`
             : sum > 75 && sum <= 90 ? showAdwice.innerText = `${message7590}`   
             : showAdwice.innerText = `${message90}`;  
};

// Close modal function

function closeModal() {
    modalOutput.style.display = 'none';
}

// Initiate user scores Array
    let userScores = [];

// Add event listener 

button.addEventListener('click', e => {
    e.preventDefault();


    //Show outputModal with setTimeout

    setTimeout(()=> {
        modalOutput.style.display = 'block';
    }, 1000);
    
      
    //Sum user answers

    let sumUserAnswers = parseInt(form.q1.value) + parseInt(form.q2.value) + parseInt(form.q3.value) + parseInt(form.q4.value) + parseInt(form.q5.value) + parseInt(form.q6.value) + parseInt(form.q7.value) + parseInt(form.q8.value) + parseInt(form.q9.value) + parseInt(form.q10.value) + parseInt(form.q11.value) + parseInt(form.q12.value) + parseInt(form.q13.value) + parseInt(form.q14.value) + parseInt(form.q15.value) + parseInt(form.q16.value) + parseInt(form.q17.value) + parseInt(form.q18.value) + parseInt(form.q19.value) + parseInt(form.q20.value);
    
    // Move result to local storage

    userScores.push(sumUserAnswers);

    localStorage.setItem('burnScores', `${userScores}`);

    
    let scoresFromStorage = localStorage.getItem('burnScores');

    console.log(scoresFromStorage);

    //Scrol on top

        window.scrollTo({
            top: 0,
            left: 0,
        });
        
    //Animate score function

    let score = 0;

    function animateScore() {
      
        if(score === sumUserAnswers) {
            clearInterval(myInterval);
        } else {
            score++
            userScore.innerText = `Vaš rezultat iznosi ${score} poena.`;
        }
    }

    let myInterval = setInterval(animateScore, 35);

    //Initiate showMessage
    showMessage(sumUserAnswers, showAdwice);
   
});

// Add event listener on close modal button
closeModalButton.addEventListener('click', closeModal);

//Add escape keydown event listener on window object to close modal

window.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        closeModal();
    }

})