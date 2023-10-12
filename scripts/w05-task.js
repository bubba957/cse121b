/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector(`#temples`);
const templeList = null;

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

const sortBy = (temples) => {
    reset();
    const filter = document.querySelector(`#sortBy`).value;
    switch (filter) {
        case `utah`:
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            // displayTemples(isUtah);
            break;
        
        // case `notUtah`:
        //     const notUtah = temples.filter((temple) =>
        //         temple.location.toLowerCase().selectedFields.includes(`utah`)
        //     );
        //     displayTemples(notUtah)
        //     break;

        // case `older`:
        //     const before1950 = temples.filter((temple) =>
        //         temple.dedicated.toLowerCase().includes(new Date(1950, 0, 1))
        //     );
        //     displayTemples(before1950)
        //     break;

        // case `all`:
        //     displayTemples(temples);
        //     break;

        default:
            // displayTemples(temples)
            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector(`#sortBy`).addEventListener(`change`, () => {
    sortBy(templeList);
});