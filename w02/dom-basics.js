var newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

var newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

var newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

var newSection = document.createElement("section");
var newH2 = document.createElement("h2");
newH2.innerHTML = "CSE121b";
newSection.appendChild(newH2);
var newPara = document.createElement("p")
newPara.innerHTML = "Welcome to Javascript Language";
newSection.appendChild(newPara);
document.body.appendChild(newSection);

var newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);