const verifyMsg = document.querySelector(".message");
const discountBtn = document.querySelector(".discount button");

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

// verify code msg

discountBtn.addEventListener("click", function(){
  verifyMsg.style.display = "block";
  setInterval(function(){
    verifyMsg.style.display = "none";
  }, 5000)
})
