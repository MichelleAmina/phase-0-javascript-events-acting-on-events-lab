// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    // if the event key is ArrowRight, carry out function moveDodgerRight 
    else if (e.key === "ArrowRight") {
        moveDodgerRight(); 
    }
  });

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left < 400 - 40) {
      dodger.style.left = `${left + 1}px`;
    }
  }
 


  
    

