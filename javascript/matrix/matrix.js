class Matrix {
    constructor(input) {
        let rowString = input.split("\n");
        this.rows = rowString.map(rowString => { 
            return rowString.split(" ").map(Number)
        });
        // A stupid way to numberise the element
        // this.rows = row2String.map(rowString =>
        //     {return rowString.map( element => {
        //         return Number(element);
        //     })
        //     })
        this.columns=  Array(this.rows[0].length).fill(null).map(()=> {return[]});

//         columns=  Array(4)
// Array(4) [ <4 empty slots> ]
//          columns=  Array(4).fill(null)
// Array(4) [ null, null, null, null ]
//          columns=  Array(4).fill(null).map(()=> {return[]});
// Array(4) [ [], [], [], [] ]
        for(let j=0;j< this.rows[0].length;j++){
            for (let i=0;i< this.rows.length;i++){
                this.columns[j].push(this.rows[i][j])
            }
        }
    }
}

module.exports = Matrix;