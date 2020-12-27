class Rectangle {
    constructor(x, y, color) {
        this.width = x,
        this.height = y,
        this.color = color
    }
    calcArea() {
        return this.width * this.height;
    }
};


let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
