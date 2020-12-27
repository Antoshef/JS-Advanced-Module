class List {
    constructor() {
        this.arr = [],
        this.size = 0;
    };
    add(num) {
        this.arr.push(num);
        this.size += 1;
        return this.arr.sort((a, b) => a - b);
    };
    remove(index) {
        if (index >= this.arr.length || index < 0) {
            return 'failsafe';
        } else {
            let removed = this.arr.splice(index,1);
            this.size -= 1;
            return this.arr;
        }
    };
    get(index) {
        if (index >= this.arr.length || index < 0) {
            return 'failsafe';
        } else {
            return this.arr[index];
        };
    };
};


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.size);
console.log(list.get(1));
