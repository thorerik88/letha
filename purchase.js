
let shoeName, shoeId, shoeImageUrl, shoeDescription = "";
const imageBox = document.querySelector(".purchase");



data.forEach(shoe => {
  setHTML(shoe.name, shoe.id, shoe.imageUrl, shoe.description, shoe.price, shoe.alt);
})

function setHTML (name, id, url, desc, price, alt) {
    console.log(imageBox)
    imageBox.innerHTML += `
                      <div class="col-3">
                        <div class="shoe-display">
                          <img src="${url}" alt="${alt}">
                          <div class="shoe-display-container">
                            <div class="col-2">
                              <h5>${name}</h5>
                            </div>
                            <div class="col-2">
                              <h5>$ ${price}</h5>
                            </div>
                            <p>${desc}</p>
                          </div>

                            <a href="customize.html?id=${id}"><button>SELECT</button></a>

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
