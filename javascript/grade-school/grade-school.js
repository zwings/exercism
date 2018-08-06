class School {
    constructor() {
        this.database = {};
    };
    roster() {
        return this.database;
    };
    add(name, grade) {
        if (this.database[grade] === undefined) {
            this.database[grade] = [];
        };
        this.database[grade].push(name);
        if (this.database[grade].length > 1){
            this.database[grade].sort();
        };
    };
    grade(grade) {
        var sorted = [];
        sorted = this.database[grade];

        if (sorted === undefined){return sorted = []};

        for (let j = 0; j < sorted.length; j++) {
            for (let i = 0; i < (sorted.length - 1); i++) {
                if (sorted[i][0] > sorted[i+1][0]){
                     sorted[i+1] = [sorted[i], sorted[i] = sorted[i+1]][0];
                };
            };
        };
        return sorted;
        // return this.database[grade].sort();
    };
}

function swap (a,b){
    return b = [a, a = b][0];
}

module.exports = School;