
function area() {
    return this.x * this.y;
};

function vol(input) {
    return this.x * this.y * this.z;
};

function solve(area, vol, input) {
    input = JSON.parse(input);
    let result = [];
    input.forEach(element => {
        let current = { 
            area: Number(area.call(element)), 
            volume: Number(vol.call(element))
        };
        if (current.area < 0) {
            current.area = current.area * -1;
        };
        if (current.volume < 0) {
            current.volume = current.volume * -1;
        }
        result.push(current);
    });
    return result;
};

solve(area, vol, '[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]'
    )