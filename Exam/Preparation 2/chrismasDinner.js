class ChristmasDinner {
    
    constructor(budget, dishes, products, guests) {
        if (budget < 0) {
            return "The budget cannot be a negative number";
        };
        this.budget = budget,
        this.dishes = [],
        this.products = [],
        this.guests = {}
    };

    shopping([product, price]) {
        if (this.budget >= price) {
            this.products.push(product);
            this.budget -= price;
            return `You have successfully bought ${product}!`;
        } else {
            return "Not enough money to buy this product";
        };
    };

    recipes({recipeName, productsList}) {
        for (let prod of productsList) {
            if (!this.products.includes(prod)) {
                return "We do not have this product";
            };
        }
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`;
    };

    inviteGuests(name, dish) {
        if (!this.dishes.some(({recipeName}) => recipeName === dish)) {
            return "We do not have this dish";
        } else if (this.guests.hasOwnProperty(name)) {
            return "This guest has already been invited";
        } else {
            this.guests[name] = dish;
            return `You have successfully invited ${name}!`;
        };
    };

    showAttendance() {
        let result = ``;
        for (let guest in this.guests) {
            let dish = this.guests[guest];
            let productsUsed = this.dishes.find(x => {
                if (x.recipeName === dish) {return x};
            });
            result+=`${guest} will eat ${dish}, which consists of ${productsUsed.productsList.join(', ')}\n`;
        }
        result = result.slice(0, result.length-1);
        return result;
    };
};

let dinner = new ChristmasDinner(20);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
dinner.recipes({
     recipeName: 'Oshav',
     productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
let actual = dinner.showAttendance();


