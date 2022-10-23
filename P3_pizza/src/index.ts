// Allowed pizza sizes
type Size = "small" | "medium" | "large" | "extra-large"

// 0,1,2,3 values of each size for calculating the prices
enum Values {
  sm,
  md,
  lg,
  xl
}

// Checking for Extra Cheese --> false = 0, true = 1
enum Extra{
  false,
  true
}

class Pizza{
  // private properties
    private size: Size
    private value: Values
    private extraCheese: Extra
    private pepperoni:number
    private ham:number
    private pineapple: number
    
    constructor (size:Size, value:Values, extraCheese:Extra = 0, pepperoni:number = 0, ham:number = 0, pineapple:number = 0){
      this.size = size;
      this.value = value;
      this.extraCheese = extraCheese;
      this.ham = ham;
      this.pepperoni = pepperoni;
      this.pineapple = pineapple;
    }

    get cost(){
      let price: number
      let baseCost: number[] = [10, 12, 14, 18]
      let toppingsTimes: number[] = [2, 2, 3, 4]
      let cheeseTimes: number[] = [2, 4, 6, 6]
      
      price = baseCost[this.value] + (toppingsTimes[this.value] * (this.pepperoni + this.ham + this.pineapple)) + (cheeseTimes[this.value] * this.extraCheese)
      return price
    }

    get pepperoniAmount(){
      return this.pepperoni;
    }

    get pineappleAmount(){
      return this.pineapple;
    }

    get hamAmount(){
      return this.ham;
    }

    get extraCh(){
      return this.extraCheese;
    }

    set xtraCheese(extraCheese: Extra){
      this.extraCheese = extraCheese;
    }

    orderSummary(){
      return `\n  ******** Order Summary: ********  \nA ${this.size} pizza with ${this.pepperoni+this.ham+this.pineapple} ingredients`; 
    }
}

// Creating a pizza for each size
const smallPizza = new Pizza("small",0,1,4,0,2)
const mediumPizza = new Pizza("medium",1,1,1,1,1)
const largePizza = new Pizza("large",2,1,3,4,5)
const extraLargePizza = new Pizza("extra-large",3,1,3,4,5)

// Loging to the console
console.log(smallPizza.orderSummary())
console.log(`\nToppings \n  Pepperoni: ${smallPizza.pepperoniAmount}`)
console.log(`  Pineapple: ${smallPizza.pineappleAmount}`)
console.log(`  Ham: ${smallPizza.hamAmount}`)
console.log(`\nTotal = $${smallPizza.cost}`)

console.log(mediumPizza.orderSummary())
console.log(`\nTotal = $${mediumPizza.cost}`)

console.log(largePizza.orderSummary())
console.log(`\nTotal = $${largePizza.cost}`)

console.log(extraLargePizza.orderSummary())
console.log(`\nTotal = $${extraLargePizza.cost}`)
  