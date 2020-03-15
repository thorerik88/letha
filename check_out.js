const queryString = window.location.search;
const totalCost = queryString.substring(17)
const id = queryString.substring(4, 5);
const setName = document.querySelector(".check-summary .col-2:first-of-type p");
const setPrice = document.querySelector(".check-summary .col-2:last-of-type p");
let newHTML = "";

console.log(setName)

data.forEach(shoe => {
  if (shoe.id == id) {
      setName.innerHTML = shoe.name;
      setPrice.innerHTML = `$ ${totalCost}`;
  }
})
