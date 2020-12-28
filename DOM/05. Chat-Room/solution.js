function solve() {

   let chatInput = document.getElementById('chat_input');
   let buttonElement = document.getElementById('send');
   buttonElement.addEventListener('click', function() {

      let newDiv = document.createElement('div');
      newDiv.className = 'message my-message';
      newDiv.textContent = chatInput.value;

      document.getElementById('chat_messages').appendChild(newDiv);
      document.getElementById('chat_input').value = '';
   });
};


