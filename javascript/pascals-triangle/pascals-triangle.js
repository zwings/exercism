class Triangle {
    constructor(numberOfRows){
        this.rows = pascal(numberOfRows);
        this.lastRow = pascal(numberOfRows)[(numberOfRows-1)];
    };
}

function pascal(numberOfRows){
   var c = [];
    
    for (var i=0; i < numberOfRows; i++ ){
        c[i] = new Array(i+1).fill(null);

        for (var j=0; j < i+1; j++){
            if (j == 0 || i == j){
                c[i][j]= 1;
            } else {
            c[i][j] = c[i-1][j-1] + c[i-1][j];
            }
        }
    }
    return c ;
}


module.exports = Triangle;