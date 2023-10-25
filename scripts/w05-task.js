/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector(`#temples`);
let templeList = null;

/* async displayTemples Function */

const displayTemples = temples => {
    temples.forEach(temple => {
        let articleElement = document.createElement(`article`);
        
        let h3Element = document.createElement(`h3`);
        h3Element.innerHTML = temple.templeName;

        let imgElement = document.createElement(`img`);
        imgElement.setAttribute(`src`, temple.imageUrl);
        imgElement.setAttribute(`alt`, `Located at ${temple.location}`);
        
        // articleElement.appendChild(h3Element);
        // articleElement.appendChild(imgElement);
        templesElement.appendChild(h3Element);
        templesElement.appendChild(imgElement);
    });
}

/* async getTemples Function using fetch()*/

let getTemples = async () => {
    const response = await fetch(`https://byui-cse.github.io/cse121b-ww-course/resources/temples.json`);
    if (response.ok) {
        templeList = await response.json();
        console.log(templeList);
        displayTemples(templeList);
    }
}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = ``;
}

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.querySelector(`#sortBy`).value;
    switch (filter) {
        case `utah`:
            displayTemples(temples.filter((utah) => utah.location.includes("Utah")));
            break;
        
        case `notutah`:
            displayTemples(temples.filter((notUtah) => !notUtah.location.includes("Utah")));
            break;

        case `older`:
            displayTemples(temples.filter((older) => new Date(older.dedicated) < new Date(1950, 0, 1)));
            break;

        case `all`:
            displayTemples(temples);
            break;

        default:
            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector(`#sortBy`).addEventListener(`change`, () => {
    sortBy(templeList);
});