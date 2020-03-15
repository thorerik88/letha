
let shoeName, shoeId, shoeImageUrl, shoeDescription = "";
const imageBox = document.querySelector(".purchase");



data.forEach(shoe => {
  shoeName = shoe.name;
  shoeId = shoe.id;
  shoeImageUrl = shoe.imageUrl;
  shoeDescription = shoe.description;
  shoePrice = shoe.price;
  setHTML(shoeName, shoeId, shoeImageUrl, shoeDescription, shoePrice);
})

function setHTML (name, id, url, desc, price) {
    console.log(imageBox)
    imageBox.innerHTML += `
                      <div class="col-3">
                        <div class="shoe-display">
                          <img src="${url}" alt="">
                          <div class="shoe-display-container">
                            <div class="col-2">
                              <h5>${name}</h5>
                            </div>
                            <div class="col-2">
                              <h5>$ ${price}</h5>
                            </div>
                            <p>${desc}</p>
                          </div>
                          <button>
                            <a href="customize.html?id=${id}">SELECT</a>
                          </button>
                        </div>
                      </div>`;
}
const imageBoxBtn = document.querySelectorAll(".purchase .col-3 .shoe-display input[type='submit']")

imageBoxBtn.forEach(btn => {
  btn.addEventListener("click", function(e){
    let element = e.target.parentNode;
    let image = element.querySelector("img");
    let urlQuery = image.alt;

  })
})
