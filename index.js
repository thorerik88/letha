const shoeDisplay = document.querySelector(".limited");
const imgOne = 1;
const imgTwo = 2;
let newHTML = "";

console.log(shoeDisplay)


data.forEach(shoe => {
  if (shoe.id === imgOne || shoe.id === imgTwo) {
    setHTML(shoe.name, shoe.id, shoe.imageUrl, shoe.description, shoe.price, shoe.alt);
  }
})

function setHTML (name, id, url, desc, price, alt) {
  let expirePrice = price * 0.75;
  newHTML += `<div class="col-2">
  <div class="shoe-display">
    <img src="${url}" alt="${alt}">
    <h4 class="expire">Expires 01.04.20</h4>
    <div class="shoe-display-container">
      <div class="col-2">
        <h5>${name}</h5>
      </div>
      <div class="col-2">
        <h4>$ ${price}</h4>
        <h4><strike>$ 229.00</strike></h4>
      </div>
      <p>${desc}</p>
    </div>

      <a href="customize.html?id=${id}"><button>SELECT</button></a>

  </div>
              </div>
              `;

  shoeDisplay.innerHTML = newHTML;
}
