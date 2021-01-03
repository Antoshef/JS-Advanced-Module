function solve() {

   let upperCards = document.querySelectorAll('div')[0];
   let downCards = document.querySelectorAll('div')[2];
   let leftSpan = document.getElementById('result').querySelectorAll('span')[0];
   let rightSpan = document.getElementById('result').querySelectorAll('span')[2];
   let history = document.getElementById('history');
   let top = [...upperCards.children];
   let bottom = [...downCards.children];
   
   document.getElementsByClassName('cards')[0].addEventListener('click', onClick);
 
   function onClick(e) {
      let currentCard = e.target;

      e.target.src = 'images/whiteCard.jpg';
      if (currentCard.parentElement == upperCards) {
         leftSpan.textContent = currentCard.name;
      } else if (currentCard.parentElement == downCards){
         rightSpan.textContent = currentCard.name;
      };

      if (leftSpan.textContent > 0 && rightSpan.textContent > 0) {
         history.textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent} ]`;
         let topElement;
         let botElement;
         // Setting borders arround picked cards
         for (let i = 0; i < top.length; i++) {
            
            if (top[i].name == leftSpan.textContent) {
               topElement = upperCards.querySelectorAll('img')[i];
            };
            if (bottom[i].name == rightSpan.textContent) {
               botElement = downCards.querySelectorAll('img')[i];
            };
         };
         if (+topElement.getAttribute('name') > +botElement.getAttribute('name')) {
            topElement.style.border = '2px solid green';
            botElement.style.border = '2px solid red';
         } else if (+topElement.getAttribute('name') < +botElement.getAttribute('name')) {
            botElement.style.border = '2px solid green';
            topElement.style.border = '2px solid red';
         };

         
         leftSpan.textContent = '';
         rightSpan.textContent = '';
      };
   };

};