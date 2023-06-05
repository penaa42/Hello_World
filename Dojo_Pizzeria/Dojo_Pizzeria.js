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

// let rand_sauce = Math.round(Math.random() * (pizza.sauceType.length -1))
// console.log(rand_sauce)
// let rand_cheese = Math.round(Math.random() * (pizza.cheeses.length -1))
// console.log(rand_cheese)
// let rand_topping = Math.round(Math.random() * (pizza.toppings.length -1))
// console.log(rand_topping)

console.log(random_pizza())
//console.log(crustType.length)

//console.log(Math.round(Math.random() * (pizza.crustType.length -1)))
//console.log(Math.round(Math.random() * (pizza.crustType.length -1)))



// let rand_sauce = Math.round(Math.random() * (snoopDog.weapons.length -1))
// let rand_cheese = Math.round(Math.random() * (snoopDog.weapons.length -1))
// let rand_topping = Math.round(Math.random() * (snoopDog.weapons.length -1))

