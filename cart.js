var bookArr = JSON.parse(localStorage.getItem("books"));
var ids = JSON.parse(localStorage.getItem("ids"));



var unIds = [...new Set(ids)];
var price = 0;

for (var j = 0; j < unIds.length; j++) {
  for (var i = 0; i < bookArr.length; i++) {
    if (bookArr[i].id === unIds[j]){
        let item = `
          <div id="${bookArr[i].id}" class="item">
            <img
              src=${bookArr[i].img}>
              <div class="iteminfo">
                <h3 class="itemname">${bookArr[i].name}</h3>
                <h2 class="bookprice">${bookArr[i].price}$</h2>
              </div>

            <button class="remove" onclick="remove(${bookArr[i].id})"><i class="fas fa-trash-alt icon " aria-hidden="true"></i>remove</button>
          </div>`;
        document.getElementById('items').innerHTML += item;
        var price = price + parseInt(bookArr[i].price, 10);
        }
  }
}

document.getElementById("total-price").innerHTML = price;
      localStorage.setItem("totalvalues", price);


var numItems = document.getElementById('num');
numItems.innerHTML = unIds.length ;

function remove(id) {
  for (var i = 0;i < unIds.length; i++) {
    if (unIds[i] === id.toString()) {
      delete unIds[i];
    }
  }

localStorage.setItem('ids', JSON.stringify(unIds));
}






const sub = document.getElementById("sub");
const form = document.getElementById("form");


sub.addEventListener("click", (e) => {
    check();
})

function check() {
    if ( unIds.length !== 0){
        form.action = "Order.html";
    }
    else {
        alert("cart is empty");

    }

}







