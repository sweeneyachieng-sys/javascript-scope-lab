// Write your solution in this file!
let burgers = ["Hamburger","Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

function addBurger() {
    var newBurger = "Flatburger";
    burgers.push(newBurger);
}
if(true) {
    let anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
}


function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";
}

addBurger();
changeFeaturedDrink();

console.log(burgers);
console.log(featuredDrink);

