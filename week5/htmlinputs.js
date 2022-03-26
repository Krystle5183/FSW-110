var form = document.getElementById("work");

function myAlert() {

    var name = form.elements["name"].value;
    var last = form.elements["last"].value;
    var age = form.elements["age"].value;
   
    alert ("name: " + name + "\nlast: " + last + "\nage: " + age);

    form.reset();
};

submit.addEventListener("click", myAlert);

