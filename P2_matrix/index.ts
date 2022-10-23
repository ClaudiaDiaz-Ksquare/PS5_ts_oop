/*
Two matrices can be added/subtracted if the number of rows and columns of both the matrices are same

Two matrices can be multiplied iff the number of column of the first matrix is equal to the number of rows of the second matrix.
*/

class Matrix{
    protected row: number;
    protected col: number;
    protected el: number[][];

    // The third parameter is optional
    constructor(row: number, col: number, el?: number){
        this.row = row;
        this.col = col;
        this.el = [];
        // 2D array of one same element (easy way of setting values)
        if (el) {
            for(let i = 0; i < row; i++) {
                this.el[i] = [];
                for(let j = 0; j < col; j++) {
                    this.el[i][j] = el;
                }
            }
        } 
        // 2D array default initialization (all 0's)
        else{
            for(let i = 0; i < row; i++) {
                this.el[i] = [];
                for(let j = 0; j < col; j++) {
                    this.el[i][j] = 0;
                }
            }
        }

    }

    // =============  1. get the number of rows  ===============
    get rowsNum(): number{
        return this.row;
    }
    
    // =============  2. get the number of columns  ===============
    get colsNum(): number{
        return this.col;
    }
    
    getElement(i: number, j: number): number{
        if(this.el[i][j] === undefined){
            throw Error('Out of the matrix range')
        }else{
            return this.el[i][j];
        }
    }
    
    // =============  3. set matrix elements at (i,j)  ===============
    setElement(i: number, j: number, val: number){
        this.el[i][j] = val;
        if(i < this.row && j<this.col){
            return this.el[i][j] = val;
        }else{
            console.log('Out of the matrix range');
        }
    }

    // =============  4. add 2 matrices (else -> "NOOP")  ===============
    addMatrices(Mat: Matrix){
        if ((this.row === Mat.row) && (this.col === Mat.col)) {
            let addedMatrices = new Matrix(this.row, this.col);
            for (let i = 0; i < this.row; i++) {
                for (let j = 0; j < this.col; j++) {
                    addedMatrices.setElement(i,j,(this.getElement(i,j) + Mat.getElement(i,j)));                  
                }
            }
            return addedMatrices;
        } else {
            return "NOOP";
        }
    }

    // =============  5. multiplying the two matrices  ===============
    multiplyMatrices(Mat: Matrix){
        const multiMatrices = new Matrix(this.row, Mat.col);
        if(this.col == Mat.row ){
            for(let k = 0; k < Mat.col; k++){
                for(let i = 0; i < this.row; i++) {
                    let val = 0;
                    for(let j = 0; j < this.col; j++) {
                        val += this.el[i][j] * Mat.el[j][k];
                    }
                    multiMatrices.setElement(i,k,val);
                }
            }
            this.row = multiMatrices.row;
            this.col = multiMatrices.col;
            this.el = multiMatrices.el;
            return multiMatrices;
        }else{
            return "NOOP";
        }
    }
}


// Defining a 3x5 matrix of 1's and logging it's number of rows and cols
const m1s = new Matrix(3,5,1);

// Defining a 3x3 matrix of 2's
const m2s = new Matrix(3,3,2);

// Defining a 3x3 matrix and setting the values
const MatA = new Matrix(3,3);
MatA.setElement(0,0,10);
MatA.setElement(0,1,20);
MatA.setElement(0,2,30);
// if omitted they are set to 0 by default
// MatA.setElement(1,0,10);
// MatA.setElement(1,1,20);
// MatA.setElement(1,2,30);
MatA.setElement(2,0,10);
MatA.setElement(2,1,20);
MatA.setElement(2,2,30);

// Defining a 3x3 matrix and setting the values
const MatB = new Matrix(3,3);
MatB.setElement(0,0,1);
MatB.setElement(0,1,2);
MatB.setElement(0,2,3);
MatB.setElement(1,0,4);
MatB.setElement(1,1,5);
MatB.setElement(1,2,6);
MatB.setElement(2,0,7);
MatB.setElement(2,1,8);
MatB.setElement(2,2,9);

const MatC = new Matrix(2,2)
MatC.setElement(0,0,1);
MatC.setElement(0,1,2);
MatC.setElement(1,0,3);
MatC.setElement(1,1,4);
const MatD = new Matrix(2,2)
MatD.setElement(0,0,5);
MatD.setElement(0,1,6);
MatD.setElement(1,0,7);
MatD.setElement(1,1,8);


// Logging matrices to the console
console.log("================== Get examples =================");
console.log(`This matrix has ${m1s.rowsNum} rows`);
console.log(`This matrix has ${m1s.colsNum} cols`);
console.log(MatA.getElement(1,2));
console.log("================ Some Matrix examples ===============");
console.log(m1s);
console.log(MatA);
console.log("================== Addition example =================");
console.log(MatA.addMatrices(MatB));
console.log("===================  NOOP example  ==================");
console.log(m1s.addMatrices(m2s)); // NOOP 
console.log("=============== Multiplication examples ==============");
console.log(MatA.multiplyMatrices(m1s));
console.log(MatC.multiplyMatrices(MatD));

// Ways to retrieve an element of a matrix
