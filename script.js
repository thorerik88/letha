const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".check-container input[type='submit']");
const modalCloseButton = document.querySelector(".modal-close");

const inputs = document.querySelectorAll("input");

// OPEN AND CLOSE MODAL
modalTrigger.addEventListener("click", function(e){
  e.preventDefault();
  modal.style.display = "block";
  modalCloseButton.addEventListener("click", function() {
    modal.style.display = "none";
  })
})

modal.addEventListener("click", function(e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
})

// REMOVE INPUT VALUE ON CLICK

inputs.foreach()
