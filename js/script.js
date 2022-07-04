function Hamburger(size) {
    this.burger = size;
    this.modifiers = [];
    this.getPrice = () => {
        return this.burger.price;
    }
    this.getCalories = () => {
        return this.burger.calories;
    }
    this.addModifier = (modifier) => {
        this.burger.price += modifier.price;
        this.burger.calories += modifier.calories;
        this.modifiers.push(modifier);
    }
}

const SIZE_SMALL = {price: 50, calories: 20};
const SIZE_AVERAGE = {price: 75, calories: 30};
const SIZE_LARGE = {price: 100, calories: 40};


const CHEESE = {name: 'Cheese', price: 10, calories: 20};
const SALAD = {name: 'Salad', price: 20, calories: 5};
const POTATO = {name: 'Potato', price: 15, calories: 10};
const SPICE = {name: 'Spice', price: 15, calories: 0};
const TOPPING_MAYO = {name: 'Mayo', price: 20, calories: 5};

const hamburger = new Hamburger(SIZE_SMALL);

hamburger.addModifier(CHEESE);
hamburger.addModifier(SALAD);
hamburger.addModifier(POTATO);
hamburger.addModifier(SPICE);
hamburger.addModifier(TOPPING_MAYO);

console.log(hamburger.getPrice());
console.log(hamburger.getCalories());
console.log(hamburger.modifiers);