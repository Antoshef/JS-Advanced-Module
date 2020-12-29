function solve() {
   
  let sections = document.getElementsByTagName('section');
  let quizElement = document.getElementById('quizzie');
  let rightAnswers = 0;
  let i = 0;

  quizElement.addEventListener('click', function(event) {

    let parent = event.target.parentElement.parentElement;
    let data = parent.getAttribute('data-quizIndex');
    if (data == '4' || data == '2') {
      if ((i == 0 && data == '2') || (i == 1 && data == '4') || (i == 2 && data == '2')) {
        rightAnswers++;
      }; 
      sections[i].style.display = 'none';
      i++;
      
      if (i > 2) {
        let result = document.getElementsByTagName('h1');
        result = result[1];
        document.getElementById('results').style.display = 'block';
        if (rightAnswers == 3) {
          result.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          result.textContent = `You have ${rightAnswers} right answers`;
        }
      } else {
        sections[i].style.display = 'block';
      };
    };
  });
};
