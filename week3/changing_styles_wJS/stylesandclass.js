var titles = [
    "Halo",
    "Red Dead",
    "Mario Kart",
    "Destiny 2",
    "Fortnite",
];

var namesList = document.getElementById("games");

for (var i = 0; i < titles.length; i++) {

var newName = document.createElement("li");
newName.textContent = titles[i];
namesList.append(newName);
 
};

const elem = document.getElementById('games');

elem.style.color= 'cornflowerblue';
elem.style.fontWeight = 'lighter';
elem.style.fontSize = '20px';
elem.style.fontFamily = 'sans-serif';

element.classList.add("games");
