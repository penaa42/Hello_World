// creating one pizza:
// let pizza = {
//     crustType:   "deep dish",
//     sauceType:    "traditional",
//     cheeses  :    ["mozzarella", "feta"],
//     toppings :    ["mushrooms", "olives", "onions", "pepperoni", "sausage"]
// }
// console.log(pizza);

//creating multiple pizzas:
function pizza_oven(crustType, sauceType, cheeses, toppings) {
    let pizza = {}
    pizza.crustType =   crustType;
    pizza.sauceType =   sauceType;
    pizza.cheeses =     cheeses;
    pizza.toppings =    toppings;
    return pizza;
}
let pizza1 = pizza_oven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
//console.log(pizza1)

let pizza2 = pizza_oven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
//console.log(pizza2)

let pizza3 = pizza_oven("stuffed crust", "traditional", "provalone", ["bell peppers", "chili pepper", "green peppers"]);
//console.log(pizza3)

let pizza4 = pizza_oven("gluten free", "traditional", "mozzarella", ["bacon", "ham"]);
//console.log(pizza4)


// creating a random pizza
function random_pizza(crustType, sauceType, cheeses, toppings){
    let pizza = {}
    pizza.crustType=   ["deep dish", "gluten free", "thin crust", "stuffed crist"],
    pizza.sauceType=   ["traditional", "buffalo", "bbq"],
    pizza.cheeses=   ["mozzarella", "feta", "provalone"],
    pizza.toppings=    ["mushrooms", "olives", "onions", "pepperoni", "sausage", "bacon"]    
    return pizza;
}
let rand_crust = random_pizza.pizza
console.log(rand_crust)

console.log(random_pizza())
//console.log(crustType.length)

