function solve() {
   
   let btn = document.getElementById('searchBtn');
   let input = document.getElementById('searchField');


   btn.addEventListener('click', function(e) {
      let fieldElements = [...document.querySelectorAll('tbody > tr')];
      for (let line of fieldElements) {
         line.classList.remove('select');
         let arr = Array.from(line.children);
         arr.map(x => {
            if (x.innerHTML.includes(input.value)) {
               line.classList.add('select');
            } 
         });
      };
      input.value = '';
   });

};