const box = document.getElementById('box');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.backgroundColor = 'green';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.backgroundColor = 'black';
});


function mouseDown() {
    document.getElementById("box").style.backgroundColor = "yellow";
};
 
function mouseUp() {
    document.getElementById("box").style.backgroundColor = "blue";
};

function dblclick() {
document.getElementById("box").style.backgroundColor = "red";
    
};


page.addEventListener('mouseover', function handleMouseOver() {
    page.style.backgroundColor = 'purple';
  });
  
  // 👇️ Change text color back on mouseout
 page.addEventListener('mouseout', function handleMouseOut() {
    page.style.backgroundColor = 'white';
  });

    