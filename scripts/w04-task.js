/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: `Cody Smith`,
    photo: `images/temple.jpg`,
    favoriteFoods: [
        `marshmallows`,
        `bacon and rice`,
        `chicken puffs`,
        `waffles`,
        `cereal`,
        `cupcackes`,
    ],
    hobbies: [
        `video games`,
        `board games`,
        `sports`,
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: `West Jordan, UT`,
        length: `3 months`,
    },
    {
        place: `Dayton, OH`,
        length: `3 months`,
    },
    {
        place: `Winnemucca, NV`,
        length: `2 years`,
    },
    {
        place: `Spring Creek, NV`,
        length: `10 years`,
    },
    {
        place: `Las Vegas, NV`,
        length: `5 years`
    },
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector(`#name`).textContent = myProfile.name;

/* Photo with attributes */

let imageElement = document.querySelector(`#photo`);
imageElement.setAttribute(`src`, myProfile.photo);
imageElement.setAttribute(`alt`, `Profile image of ${myProfile.name}.`);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement(`li`);
    li.textContent = food;
    document.querySelector(`#favorite-foods`).appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement(`li`);
    li.textContent = hobbie;
    document.querySelector(`#hobbies`).appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(loc => {
    let dt = document.createElement(`dt`);
    dt.textContent = loc.place;
    document.querySelector(`#places-lived`).appendChild(dt);

    let dd = document.createElement(`dd`);
    dd.textContent = loc.length;
    document.querySelector(`#places-lived`).appendChild(dd);
});