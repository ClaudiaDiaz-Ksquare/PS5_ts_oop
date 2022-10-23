"use strict";
var Values;
(function (Values) {
    Values[Values["sm"] = 0] = "sm";
    Values[Values["md"] = 1] = "md";
    Values[Values["lg"] = 2] = "lg";
    Values[Values["xl"] = 3] = "xl";
})(Values || (Values = {}));
var Extra;
(function (Extra) {
    Extra[Extra["false"] = 0] = "false";
    Extra[Extra["true"] = 1] = "true";
})(Extra || (Extra = {}));
class Pizza {
    constructor(size, value, extraCheese = 0, pepperoni = 0, ham = 0, pineapple = 0) {
        this.size = size;
        this.value = value;
        this.extraCheese = extraCheese;
        this.ham = ham;
        this.pepperoni = pepperoni;
        this.pineapple = pineapple;
    }
    get cost() {
        let price;
        let baseCost = [10, 12, 14, 18];
        let toppingsTimes = [2, 2, 3, 4];
        let cheeseTimes = [2, 4, 6, 6];
        price = baseCost[this.value] + (toppingsTimes[this.value] * (this.pepperoni + this.ham + this.pineapple)) + (cheeseTimes[this.value] * this.extraCheese);
        return price;
    }
    get pepperoniAmount() {
        return this.pepperoni;
    }
    get pineappleAmount() {
        return this.pineapple;
    }
    get hamAmount() {
        return this.ham;
    }
    get extraCh() {
        return this.extraCheese;
    }
    orderSummary() {
        return `\n  ******** Order Summary: ********  \nA ${this.size} pizza with ${this.pepperoni + this.ham + this.pineapple} ingredients`;
    }
}
const smallPizza = new Pizza("small", 0, 1, 4, 0, 2);
const mediumPizza = new Pizza("medium", 1, 1, 1, 1, 1);
const largePizza = new Pizza("large", 2, 1, 3, 4, 5);
const extraLargePizza = new Pizza("extra-large", 3, 1, 3, 4, 5);
console.log(smallPizza.orderSummary());
console.log(`\nToppings \n  Pepperoni: ${smallPizza.pepperoniAmount}`);
console.log(`  Pineapple: ${smallPizza.pineappleAmount}`);
console.log(`  Ham: ${smallPizza.hamAmount}`);
console.log(`\nTotal = $${smallPizza.cost}`);
console.log(mediumPizza.orderSummary());
console.log(`\nTotal = $${mediumPizza.cost}`);
console.log(largePizza.orderSummary());
console.log(`\nTotal = $${largePizza.cost}`);
console.log(extraLargePizza.orderSummary());
console.log(`\nTotal = $${extraLargePizza.cost}`);
