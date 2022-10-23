"use strict";
class Matrix {
    constructor(row, col, el) {
        this.row = row;
        this.col = col;
        this.el = [];
        if (el) {
            for (let i = 0; i < row; i++) {
                this.el[i] = [];
                for (let j = 0; j < col; j++) {
                    this.el[i][j] = el;
                }
            }
        }
        else {
            for (let i = 0; i < row; i++) {
                this.el[i] = [];
                for (let j = 0; j < col; j++) {
                    this.el[i][j] = 0;
                }
            }
        }
    }
    get rowsNum() {
        return this.row;
    }
    get colsNum() {
        return this.col;
    }
    getElement(i, j) {
        if (this.el[i][j] === undefined) {
            throw Error('Out of the matrix range');
        }
        else {
            return this.el[i][j];
        }
    }
    setElement(i, j, val) {
        this.el[i][j] = val;
        if (i < this.row && j < this.col) {
            return this.el[i][j] = val;
        }
        else {
            console.log('Out of the matrix range');
        }
    }
    addMatrices(Mat) {
        if ((this.row === Mat.row) && (this.col === Mat.col)) {
            let addedMatrices = new Matrix(this.row, this.col);
            for (let i = 0; i < this.row; i++) {
                for (let j = 0; j < this.col; j++) {
                    addedMatrices.setElement(i, j, (this.getElement(i, j) + Mat.getElement(i, j)));
                }
            }
            return addedMatrices;
        }
        else {
            return "NOOP";
        }
    }
    multiplyMatrices(Mat) {
        const multiMatrices = new Matrix(this.row, Mat.col);
        if (this.col == Mat.row) {
            for (let k = 0; k < Mat.col; k++) {
                for (let i = 0; i < this.row; i++) {
                    let val = 0;
                    for (let j = 0; j < this.col; j++) {
                        val += this.el[i][j] * Mat.el[j][k];
                    }
                    multiMatrices.setElement(i, k, val);
                }
            }
            this.row = multiMatrices.row;
            this.col = multiMatrices.col;
            this.el = multiMatrices.el;
            return multiMatrices;
        }
        else {
            return "NOOP";
        }
    }
}
const m1s = new Matrix(3, 5, 1);
const m2s = new Matrix(3, 3, 2);
const MatA = new Matrix(3, 3);
MatA.setElement(0, 0, 10);
MatA.setElement(0, 1, 20);
MatA.setElement(0, 2, 30);
MatA.setElement(2, 0, 10);
MatA.setElement(2, 1, 20);
MatA.setElement(2, 2, 30);
const MatB = new Matrix(3, 3);
MatB.setElement(0, 0, 1);
MatB.setElement(0, 1, 2);
MatB.setElement(0, 2, 3);
MatB.setElement(1, 0, 4);
MatB.setElement(1, 1, 5);
MatB.setElement(1, 2, 6);
MatB.setElement(2, 0, 7);
MatB.setElement(2, 1, 8);
MatB.setElement(2, 2, 9);
const MatC = new Matrix(2, 2);
MatC.setElement(0, 0, 1);
MatC.setElement(0, 1, 2);
MatC.setElement(1, 0, 3);
MatC.setElement(1, 1, 4);
const MatD = new Matrix(2, 2);
MatD.setElement(0, 0, 5);
MatD.setElement(0, 1, 6);
MatD.setElement(1, 0, 7);
MatD.setElement(1, 1, 8);
console.log("================== Get examples =================");
console.log(`This matrix has ${m1s.rowsNum} rows`);
console.log(`This matrix has ${m1s.colsNum} cols`);
console.log(MatA.getElement(1, 2));
console.log("================ Some Matrix examples ===============");
console.log(m1s);
console.log(MatA);
console.log("================== Addition example =================");
console.log(MatA.addMatrices(MatB));
console.log("===================  NOOP example  ==================");
console.log(m1s.addMatrices(m2s));
console.log("=============== Multiplication examples ==============");
console.log(MatA.multiplyMatrices(m1s));
console.log(MatC.multiplyMatrices(MatD));
