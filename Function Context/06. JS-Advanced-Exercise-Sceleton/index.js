function solve(){
   
   let tr = document.getElementsByTagName('tr');
   let lastClicked;
   [...tr].slice(1).forEach(row => {
      row.addEventListener('click', (e) => {
         let current = e.target.parentElement.style;
         if (current.backgroundColor == 'rgb(65, 63, 94)') {
            current.backgroundColor = '';
         } else if (current.backgroundColor == '' || lastClicked == undefined) {
            current.backgroundColor = 'rgb(65, 63, 94)';
            if (!lastClicked) {
               lastClicked = current;
            }
            lastClicked.backgroundColor = '';
         }
         lastClicked = current;
      })
   })
}
