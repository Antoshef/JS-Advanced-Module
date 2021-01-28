class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }
    // Add new Customer
    newCustomer = function(customer) {
        if (this.allCustomers.some(x => x.personalId === customer.personalId)) {
            throw Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        } else {
            customer.transactions = [];
            this.allCustomers.push(customer);
            return customer
        }
    }
    // Deposit Money
    depositMoney = function(personalId, amount) {
        if (this.allCustomers.some(x => x.personalId === personalId)) {
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
    // Withdraw Money
    withdrawMoney = function(personalId, amount) {
        if (this.allCustomers.some(x => x.personalId === personalId)) {
            let result = this.allCustomers.find(x => x.personalId === personalId);
            result.transactions.unshift(`${result.firstName} ${result.lastName} withdrew ${amount}$!`);
            let check = this.allCustomers.find(x => x.personalId === personalId);
            if (check.totalMoney < amount) {
                throw Error(`${check.firstName} ${check.lastName} does not have enough money to withdraw that amount!`);
            } else {
                check.totalMoney -= amount;
                return check.totalMoney + '$';
            };
        } else {
            throw Error('We have no customer with this ID!');
        }
    }
    // Customer Info Details
    customerInfo = function(personalId) {
        if (!this.allCustomers.some(x => x.personalId === personalId)) {
            throw Error('We have no customer with this ID!');
        } else {
            let result = `Bank name: ${this._bankName}`;
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
            return result;
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