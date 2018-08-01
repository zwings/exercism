"use strict"
class Binary {
    constructor(number) {
        this.number = number;
    }

    toDecimal() {
        let arr = [];
        arr = (this.number).split("");
        var boolean = false;
        var result = 0;
        (arr.map((e) => {
            if (isNaN(e)) {
                boolean = true;
            } else if (e > 1) {
                boolean = true;
            }
        }));
        if (boolean) {
            result = 0;
        } else {
            arr.map((e) => {
                return Number(e);
            });
            for (let i = arr.length - 1; i >= 0; i--) {
                arr[i] = arr[i] * Math.pow(2, (arr.length - 1 - i));
            };
            function getSum(total, num) {
                return total + num;
            }
            result = arr.reduce(getSum, 0);
        };
        return result;
    }
}

module.exports = Binary;