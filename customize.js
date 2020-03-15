const queryString = window.location.search;
let id = queryString.substring(4);
id = parseInt(id, 10);

let shoeArray = [];

const shoeImg = document.querySelector(".customize img");
const shoeName = document.querySelector(".customize-container h5");
const shoePrice = document.querySelector(".customize-container .col-2:last-of-type p");
const hidden = document.querySelector(".customize input[name='id']");
const btn = document.querySelector(".customize-container input");


data.forEach(shoe => {
  if (shoe.id == id) {
      setHTML(shoe.name, shoe.id, shoe.imageUrl, shoe.price, shoe.alt)
  }
})

function setHTML(name, id, image, price, alt) {
  shoeImg.src = image;
  shoeImg.alt = alt;
  shoeName.innerHTML = name;
  shoePrice.innerHTML = `$ ${price}`;
  hidden.value = id;
}

btn.addEventListener("click", function(e) {
  // e.preventDefault();

  console.log(shoePrice)
})

let sizes = document.querySelectorAll(".shoe-size option");
