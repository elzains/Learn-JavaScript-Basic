// Destructuring Object
let menu;
menu = {
    makanan: 'lalapan',
    minuman: 'es teh',
    cemilan: 'kacang',
}

let {makanan: food, minuman: drink, cemilan: snack} = menu;
console.log(food);
console.log(drink);
console.log(snack);