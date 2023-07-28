var checkbox = document.getElementById("switch-Theme");
var body = document.querySelector("body");
var buttons = document.querySelectorAll(".btn");

checkbox.addEventListener("click", function() {
  if (checkbox.checked) {

    body.style.background = "linear-gradient(to right, #141e30, #243b55)";
    body.style.color = "white";
    buttons.forEach(button =>{
        button.style.background = "white";
        button.style.color = "black";
    })
    
    
  } else {
    body.style.background = "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)";
    body.style.color = "black";
    buttons.forEach(button =>{
        button.style.background = "black";
        button.style.color = "white";
    })
  }

});

