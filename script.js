const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".check-container input[type='submit']");
const modalCloseButton = document.querySelector(".modal-close");
const newsletterMsg = document.querySelector(".message");
const inputs = document.querySelectorAll("input[type='email']");

const customShoe = document.querySelector(".shopping-cart .selected");
const totalCost = document.querySelector(".total-cost");

// REMOVE INPUT VALUE ON CLICK
inputs.forEach(input => {
  input.addEventListener('click', function(){
    input.value = "";
  })
})

// Newsletter success message
const newsletterButton = document.querySelector(".newsletter form input[type='submit']");
newsletterButton.addEventListener("click", function(e){
  e.preventDefault();
  newsletterMsg.style.display = "block";
  setInterval(function() {
    newsletterMsg.style.display = "none";
  }, 3000)
})
