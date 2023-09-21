/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = `Cody Smith`;
let currentYear = `2023`;
let profilePicture = `images/temple.jpg`;

/* Step 3 - Element Variables */

const nameElement = document.getElementById(`name`);
const foodElement = document.getElementById(`food`);
const yearElement = document.querySelector(`#year`);
const imageElement = document.querySelector(`img`);

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute(`src`, profilePicture);
imageElement.setAttribute(`alt`, `Profile image of ${fullName}`);

/* Step 5 - Array */

foods = [`marshmallows`, `bacon and rice`, `chicken puffs`, `waffles`, `cereal`];
foodElement.innerHTML = `${foods}`;
let oneFood = `cupcakes`;
foods.push(oneFood);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;