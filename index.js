document.getElementById("yourH1_element_Id").innerHTML = "Welcome to my JS site"

var newP = document.createElement('p')
newP.textContent = 'All of this was created with Javascript'
document.body.appendChild(newP)