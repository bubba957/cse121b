/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector(`#temples`);
const templeList = `https://byui-cse.github.io/cse121b-ww-course/resources/temples.json`;

/* async displayTemples Function */

const displayTemples = temples => {
    temples.forEach(temple => {
        let articleElement = document.createElement(`article`);
        
        let h3Element = document.createElement(`h3`);
        h3Element.innerHTML = temple.templeName;

        let imgElement = document.createElement(`img`);
        imgElement.setAttribute(`src`, temple.imageUrl);
        imgElement.setAttribute(`alt`, `Located at ${temple.location}`);
        
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/

let getTemples = async () => {
    const response = await fetch(`https://byui-cse.github.io/cse121b-ww-course/resources/temples.json`);
    if (response.ok) {
        const templeList = await response.json();
        console.log(templeList);
        displayTemples(templeList);
    }
}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = ``;
}

/* sortBy Function */

const sortBy = (templeList) => {
    reset();
    const filter = document.querySelector(`#sortBy`).value;
    switch (filter) {
        case `utah`:
            displayTemples(templeList.filter((utah) => utah.location.includes("Utah")));
            break;
        
        case `notUtah`:
            displayTemples(templeList.filter((notUtah) => notUtah.location.selectedFields.includes("Utah")));
            break;

        case `older`:
            displayTemples(templeList.filter((older) => older.dedicated.includes(new Date(1950, 0, 1))));
            break;

        case `all`:
            displayTemples(templeList);
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