const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
let data = [];

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  };
};

function doStuff(data) {
  results = data;
  console.log("first: ", results);
  let outputElement = document.querySelector(`#output`);
  let html = `<h2>${results.name}</h2>
              <img src = "${results.sprites.front_default}" alt = "Image of ${results.name}">`;
  outputElement.innerHTML = html;
};

function doStuffList(data) {
    console.log(data);
    let outputList = document.querySelector(`#outputList`);
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((currentItem) => {
        let html = `<li>${currentItem.name}</li>`;
        outputList.innerHTML += html;
    });
};

function compare(a, b) {
    if (a.name > b.name) {
        return 1;
    }
    else if (a.name < b.name) {
        return -1;
    }
    else return 0;
}

function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList
};

getPokemon(url, doStuff);
console.log("second: ", results);
getPokemon(urlList, doStuffList);
// sortPokemon(urlList);

// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// const urlList = "https://pokeapi.co/api/v2/pokemon";
// let results = null;

// async function getPokemon(url, doThis) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     // execute the callback
//     doThis(data);
//   }
// }

// function doStuff(data) {
//   results = data;
//   const outputElement = document.querySelector("#output");
//   const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
//   outputElement.innerHTML = html;
//   console.log("first: ", results);
// }

// function doStuffList(data) {
//   console.log(data);
//   const pokeListElement = document.querySelector("#outputList");
//   const pokeList = data.results;
//   pokeList.forEach((currentItem) => {
//     const html = `<li>${currentItem.name}</li>`;
//     // note the += here...
//     pokeListElement.innerHTML += html;
//   });
// }
// getPokemon(url, doStuff);
// console.log("second: ", results);
// // Notice that by just passing a different callback function in
// // we can totally change what happens when the data comes back.
// // It's like we gave the getPokemon function superpowers!
// getPokemon(urlList, doStuffList);