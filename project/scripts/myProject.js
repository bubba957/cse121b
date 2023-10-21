import dogFacts from "./es2";

// let orderedElement = document.querySelector(`#`)
let choosenItem = document.querySelector(`#ordered`)

function getPrice(food) {
    if (food === meat) {
        price = 12.99
    }
    return price
}

function orderedFood(food) {
    const price = document.querySelector(`#sortBy`).value;
    switch (price) {
        case `meat`:
            getPrice(food)

        default:
            break;
    }
};