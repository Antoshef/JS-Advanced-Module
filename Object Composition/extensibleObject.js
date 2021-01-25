
myObj = () => ({
    __proto__ : {},
    extend: function(input) {
        Object.entries(input).forEach(element => {
            if (typeof element[1] !== 'function') {
                this[element[0]] = element[1]
            } else {
                this.__proto__ = {[element[0]]: element[1]}
            }
        });
    }
})

myObj().extend({
    extensionMethod: function () {},
    extensionProperty: 'someString'
})
  