function solve(){
   
   let tr = document.getElementsByTagName('tr');
   let lastClicked;
   [...tr].slice(1).forEach(row => {
      row.addEventListener('click', (e) => {
         let current = e.target.parentNode.style;
         if (current.backgroundColor == '' || current.backgroundColor == undefined) {
            current.backgroundColor = 'rgb(65, 63, 94)';
            if (lastClicked) {
               lastClicked.backgroundColor = '';
            }
         } else if (current.backgroundColor == 'rgb(65, 63, 94)') {
            current.backgroundColor = '';
         }
         lastClicked = current;
      })
   })
}
