function solve() {

  let input = ([{
    "img":"https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG",
    "name": "Sofa",
    "price": "259",
    "decFactor":"0.4"

},
{
    "img":"https://cdn.jysk.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/0/7011671065_3dr_sonoma.jpg",
    "name": "Wardrobe",
    "price": "120",
    "decFactor":"1.2"
}]);



class Item {
  constructor(img, name, price, decor) {
    this.image = img,
    this.name = name,
    this.price = price,
    this.deFactor = decor
  }
};

let inputText = document.getElementById('exercise').querySelector('textarea');

for (let item of input) {
  let current = [...item];
  for (let line of current) {
    inputText.textContent += line;
  }
}

};