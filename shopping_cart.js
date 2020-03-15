const queryString = window.location.search;
const size = queryString.substring(16, 18);
const qty = queryString.substring(28, 29);
const id = queryString.substring(4, 5);
const selected = document.querySelector(".selected");
const total = document.querySelector(".total");
const btn = document.querySelector(".shopping-cart a");
let totalCost = 0;
let newHTML = "";

data.forEach(shoe => {
  if (shoe.id == id) {
      setHTML(shoe.name, shoe.id, shoe.imageUrl, shoe.price, shoe.alt, size, qty)
  }
})



function setHTML(name, id, url, price, alt, size, qty) {
  totalCost += price * qty;
  console.log(id)
  newHTML += `<td>
                <img src="${url}" alt="${alt}">
              </td>
              <td>${name}</td>
              <td>${size}</td>
              <td>$ ${price}</td>
              <td class="number-input">
                <input class="quantity" type="text" name="quantity" value="${qty}">
              </td>
              <td class="delete"></td>
                `;

  selected.innerHTML = newHTML;

  newHTML = `<td></td>
             <td></td>
             <td>Total:</td>
             <td class="total-cost">$ ${totalCost}</td>
             <td></td>`;

  total.innerHTML = newHTML;

  newHTML = `check_out.html?id=${id}&total_cost=${totalCost}`;

  btn.href = newHTML;
}

// delete selected shoe in Cart
const deleteShoe = document.querySelector(".delete");
deleteShoe.addEventListener("click", function() {
  customShoe.style.visibility = "hidden";
  let costUpdate = document.querySelector(".total-cost");
  totalCost = 0;
  costUpdate.innerHTML = totalCost;

})



console.log(btn);
