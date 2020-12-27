function tickets(input,sort) {
    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
            this.price = Number(price),
            this.status = status
        };
    };
    
    for (let line of input) {
        let [destination, price, status] = line.split('|');
        let current = new Ticket(destination, price, status);
        result.push(current);
    };
    let sorted = Object.values(result);
    sorted.sort((a, b) => sorting(a, b,sort));
    result = sorted;
    return result;

    function sorting(a, b,sort) {
        if (sort == 'price') {
            return (a[sort] - b[sort]);
        } else {
            return (a[sort].localeCompare(b[sort]));
        }
    };
};
tickets(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
)