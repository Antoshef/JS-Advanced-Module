function objectFactory(input) {

    let json = JSON.parse(input);
    let result = json.reduce((acc, x) => {
        if (!acc.hasOwnProperty(x)) {
            return {...acc,...x}
        }
    },{});
    return result;
};

objectFactory(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);