function notify(message) {
    
    let divNotify = document.getElementById('notification');
    let paragraphElement = document.createElement('p');
    paragraphElement.innerHTML = message;
    divNotify.appendChild(paragraphElement);
    divNotify.style.display = 'block';
 
    setTimeout(function() {
        divNotify.style.display = 'none';
        divNotify.innerHTML = '';
    },2000)
};