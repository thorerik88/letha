// delete selected shoe in Cart
const deleteShoe = document.querySelector(".delete");
deleteShoe.addEventListener("click", function() {
  customShoe.style.visibility = "hidden";
  totalCost.innerHTML = "$ 0"
})
