for (let i = 0; i < 10; i ++) {
    const ele = document.createElement("h1");
    ele.innerHTML = "Hello World";
    document.body.appendChild(ele);
    document.getElementById("hi").style.color = "magenta";
 };

var coworkers = [
    "Steve",
    "Larry",
    "Joe",
    "Shirley",
    "Steph",
    "Nate",
    "Rick",
    "Emily",
];

var namesList = document.getElementById("names")

for (var i = 0; i < coworkers.length; i++) {

var newName = document.createElement("li");
newName.textContent = coworkers[i];
namesList.append(newName);
 
};