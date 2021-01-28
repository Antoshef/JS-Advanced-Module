class Bank {
    #bankName;

    constructor(bankName) {
        this.#bankName = bankName,
        this.allCustomers = []
    }

    newCustomer = function({firstName, lastName, personalId}) {
        if (bank.validation(personalId)) {
            throw Error(`${firstName} ${lastName} is already our customer!`)
        } else {
            this.allCustomers.push({firstName, lastName, personalId, transactions: []});
            return {firstName, lastName, personalId}
        }
    }
    depositMoney = function(personalId, amount) {
        if (bank.validation(personalId)) {
            let result = this.allCustomers.find(x => x.personalId == personalId);
            if (!result.hasOwnProperty('totalMoney')) {
                result.totalMoney = 0;
            }
            result.totalMoney += amount;
            result.transactions.unshift(`${result.firstName} ${result.lastName} made deposit of ${amount}$!`);
            return result.totalMoney + '$';
        } else {
            throw Error('We have no customer with this ID!');
        }
    }
    withdrawMoney = function(personalId, amount) {
        if (bank.validation(personalId)) {
            let result = this.allCustomers.find(x => x.personalId === personalId);
            result.transactions.unshift(`${result.firstName} ${result.lastName} withdrew ${amount}$!`);
            return bank.moneyCheck(personalId, amount);
        } else {
            throw Error('We have no customer with this ID!');
        }
    }
    customerInfo = function(personalId) {
        if (!bank.validation(personalId)) {
            throw Error('We have no customer with this ID!');
        } else {
            let result = `Bank name: ${bank.#bankName}`;
            let customer = this.allCustomers.find(x => x.personalId === personalId);
            result += `\nCustomer name: ${customer.firstName} ${customer.lastName}`;
            result += `\nCustomer ID: ${customer.personalId}`;
            result += `\nTotal Money: ${customer.totalMoney}$`;
            result += `\nTransactions:`;
            let index = customer.transactions.length;
            customer.transactions.forEach(x => {
                result += '\n' + index + '. ' + x;
                index--;
            });
            return result
        }
    }

    validation = function(personalId) {
        return this.allCustomers.some(x => x.personalId === personalId);
    }
    
    moneyCheck = function(personalId, amount) {
        let result = this.allCustomers.find(x => x.personalId === personalId);
        if (result.totalMoney < amount) {
            throw Error(`${result.firstName} ${result.lastName} does not have enough money to withdraw that amount!`);
        } else {
            result.totalMoney -= amount;
            return result.totalMoney + '$';
        }
    }
    
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

// { firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 } 
// { firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }
// 500$
// 375$
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made depostit of 250$!
// 1. Svetlin Nakov made depostit of 250$!
