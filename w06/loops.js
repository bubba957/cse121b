myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
//   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// let hobbiesElement = document.querySelector(`#hobbies`);
// function createAndAppendHobby(hobby) {
//   let html = document.createElement(`li`);
//   html.textContent = hobby;
//   hobbiesElement.appendChild(html);
// }
// myInfo.hobbies.forEach(createAndAppendHobby);

// let favoritFoodsElement = document.querySelector(`#favorite-foods2`);
// function createAndAppendFood(food) {
//   let html = document.createElement(`li`);
//   html.textContent = food;
//   return html
// }
// function createAndAppendFoodSmall(food) {
//   return `<li>${food}</li>`
// }
// let favoriteFoodList = myInfo.favoriteFoods.map(createAndAppendFoodSmall)
// favoritFoodsElement.innerHTML = favoriteFoodList.join(``);

// let foodsElement = document.querySelector(`#favorite-foods3`);
// let foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// foodsElement.innerHTML = foodListElements.join(``);

let foodsElement = document.querySelector(`#favorite-foods4`);
let placesLivedElement = document.querySelector(`#places-lived`);
let foodListElements2 = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
function foodsTemplate(food) {
  return `<li>${food}</li>`
}
function placesTemplate(place) {
  return `<dt>${place.place}</dt>
  <dd>${place.length}</dd>`;
}
function generalListMarkup(list, callback) {
  let htmlList = list.map(callback);
  return htmlList.join(``);
}
foodsElement.innerHTML = generalListMarkup(myInfo.favoriteFoods, foodsTemplate);
placesLivedElement.innerHTML = generalListMarkup(myInfo.placesLived, placesTemplate);