function solve() {
   
   let textResult = document.getElementsByTagName('textarea')[0];
   let buttonElements = document.getElementsByClassName('add-product');
   buttonElements[0].value = 'Brea';
   buttonElements[1].value = 'Mil';
   buttonElements[2].value = 'Tomatoe';
   let checkOutBtn = document.getElementsByClassName('checkout')[0];
   checkOutBtn.value = 'check';
   let bodyElement = document.getElementsByTagName('body');
   bodyElement = bodyElement[0];
   let priceList = document.getElementsByClassName('product-line-price');
   let totalPrice= 0;
   let productsList = [];
   let enabled = true;

   bodyElement.addEventListener('click', onButtonClick);

   function onButtonClick(e) {
      if (enabled == true) {
         let current = e.target.value;
         let name;
         let money;
         switch (current) {
            case 'Brea':
               money = priceList[0].textContent;
               name = document.getElementsByClassName('product-title')[0].innerHTML;
               textResult.value += `Added ${name} for ${money} to the cart.\n`
               totalPrice += Number(money);
               break;
            case 'Mil':
               money = Number(priceList[1].textContent);
               name = document.getElementsByClassName('product-title')[1].innerHTML;
               textResult.value += `Added ${name} for ${money} to the cart.\n`
               totalPrice += Number(money);
               break;
            case 'Tomatoe':
               money = Number(priceList[2].textContent);
               name = document.getElementsByClassName('product-title')[2].innerHTML;
               textResult.value += `Added ${name} for ${money} to the cart.\n`
               totalPrice += Number(money);
               break;
            case 'check':
               textResult.value += `You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.`;
               enabled = false;
               break;
         };
         if (!productsList.includes(name) && name != undefined) {
            productsList.push(name);
         };
      }
   };
};