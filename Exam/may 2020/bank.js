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
            this.allCustomers.push({firstName, lastName, personalId});
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
            return result.totalMoney + '$';
        } else {
            throw Error('We have no customer with this ID!');
        }
    }
    withdrawMoney = function(personalId, amount) {
        if (bank.validation(personalId)) {
            return bank.moneyCheck(personalId, amount);
        } else {
            throw Error('We have no customer with this ID!');
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
