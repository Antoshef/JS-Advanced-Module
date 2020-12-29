function solve() {
  
  let ulElement = document.getElementsByClassName('current');
  let listElements = document.getElementsByClassName('quiz-answer');
  let sectionElements = document.getElementsByTagName('section');
  let quizElement = document.getElementById('quizzie');
  let rightAnswers = 0;
  let i = 0;

  quizElement.addEventListener('click', function(event) {

    let current = (event.target.parentElement.parentElement);
    console.log(current.getAttribute(quizIndex));
    if (event.target.innerHTML == 'onmouseclick') {
      console.log(true);
    } else if (current.dataset.quizIndex == '4') {
      console.log(false);
    }
  });

}
