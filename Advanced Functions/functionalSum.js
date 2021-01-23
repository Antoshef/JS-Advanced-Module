
function add(x) {

    function sum(a) {
        x += a;
        return sum;
    }

    sum.toString = () => x;
    return sum;
};

add(1)(5)(4);