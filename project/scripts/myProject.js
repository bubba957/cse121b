import dogFacts from "./es2";

// let orderedElement = document.querySelector(`#`)
let choosenItem = document.querySelector(`#ordered`)

const displayFoods = foods => {
    foods.forEach(food => {
        let h3Element = document.createElement(`h3`);
        h3Element.innerHTML = food;
        
        document.getElementById(`#ordered`).appendChild(h3Element);
    });
};

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
            meat = `meat`;
            getPrice(food)

        default:
            break;
    }
};

document.querySelector(`#sortBy`).addEventListener(`change`, () => {
    orderedFood(foodsList);
});

dogFacts;