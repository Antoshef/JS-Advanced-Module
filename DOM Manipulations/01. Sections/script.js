function create(words) {

   let mainElement = document.getElementById('content');
   
   for (let line of words) {
      let current = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = line;
      paragraph.style.display = 'none';
      current.appendChild(paragraph);
      mainElement.appendChild(current);
   }

   mainElement.addEventListener('click', displayText);

   function displayText(event) {
      let childElement = event.target.children[0];
      childElement.style.display = 'block';
   };
};