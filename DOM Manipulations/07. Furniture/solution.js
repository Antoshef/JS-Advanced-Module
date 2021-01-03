function solve() {

    document.querySelector('button').addEventListener('click', () => {
    let input = document.querySelector('textarea');
    let product = JSON.parse(input.value);

    product.forEach(element => {
    let {name, img, price, decFactor} = element;
      let htmlString = 
                    `<tr>\n
                        <td><img src="${img}"></td>\n
                        <td><p>${name}</p></td>\n
                        <td><p>${price}</p></td>\n                    
                        <td><p>${decFactor}</p></td>\n                
                        <td><input type="checkbox" /></td>\n
                    </tr>`;

    document
    .querySelector('tbody')
    .insertAdjacentHTML('beforeend', htmlString);
    });
  input.value = '';      
  });

  document.querySelectorAll('button')[1].addEventListener('click', () => {
    let [products, prices, factors] = [[], [], []];
    [...document.querySelectorAll('tbody tr')].forEach(tr => {
      if (tr.querySelectorAll('input')[0].checked) {
        let data = tr.querySelectorAll('p');
        products.push(data[0].textContent);
        prices.push(Number(data[1].textContent));
        factors.push(Number(data[2].textContent));
      };
    });

    let totalPrice = prices.reduce((sum, num) => sum += num);
    let totalFactor = factors.reduce((sum, num) => sum += num);
    totalFactor = totalFactor / factors.length;
    document.querySelectorAll('textarea')[1].textContent = `Bought furniture: ${products.join(', ')}`+'\n' + 
    `Total price: ${totalPrice.toFixed(2)}` + '\n' + 
    `Average decoration factor: ${totalFactor}`;
  });
};