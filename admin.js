
//profile menu toggle
document.querySelector('.settings .pic').onclick = function () {
    document.querySelector('.settings').classList.toggle("open");

}
document.onclick = function(e){
  if (e.target.id !== "pic" && e.target.id !== "settings" ) {
    document.querySelector('.settings').classList.remove("open");
  }
}
// books code
class book {
  constructor(id, img, name , price){
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
  }

}

//bookcode
let topBookArr= [ new book("1","imgs/book1.jpeg", "The Song Of Ice And Fire",  "20$"),
                new book("2","imgs/book2.jpeg", "A Game Of Thrones", "33$"),
                new book("3","imgs/book3.jpg", "HxH", "45$")];

let bookArr= [{"id":"1", "img":"imgs/book1.jpeg","name": "The Song Of Ice And Fire", "price":"60$"},
              {"id":"2", "img":"imgs/book2.jpeg","name": "A Game Of Thrones", "price":"33$"},
              {"id":"3", "img":"imgs/book3.jpg", "name":"HxH", "price":"45$"},
              {"id":"4", "img":"imgs/book4.jpeg","name": "Death Note", "price":"40$"},
              {"id":"5", "img":"imgs/book5.jpg", "name":"The Idiot Brain", "price":"30$"}];


let numIds = 0;

if (JSON.parse(localStorage.getItem('books')) == null) {

    localStorage.setItem('books', JSON.stringify(bookArr));
    numIds = bookArr.length;
  }
  else{
    let books = JSON.parse(localStorage.getItem('books'));
     numIds = books.length;
  }




function order(id) {
  window.location.href='file:///home/joe/Project/Order.html';

}





//Slides.....
let slide = "";
for (var i = 0; i < topBookArr.length; i++) {


   slide = `
    <div class="overlay3">
      <div class="S${i}">
          <div class="topBookSlide fade">
            <img class="img" src= ${topBookArr[i].img}>
            <br>
            <br>
            <span class="name">${topBookArr[i].name}</span>
            <br>
            <span class="price">${topBookArr[i].price}</span>
            <span class="icon" onclick="addToCart(${bookArr[i].id})">+</span>
            <input type="button" class="order" onclick="order()" value="Order">
          </div>
        </div>
      </div>
    `;
    document.getElementById('container').innerHTML += slide;

};
window.onload = document.querySelector('.S0').classList.add('active');


function deactivateBut(num) {

    for (var i = 0; i <3; i++) {
        if(i !== num) {
        document.querySelector('.S' + i).classList.remove('active');
        }

}
}
let currentSlide = 0;
function changeSlide(num) {

  if (num === 1) {
    switch (currentSlide){
      case 0:
        currentSlide++
        document.querySelector('.S' + currentSlide).classList.add('active');
        deactivateBut(currentSlide);
        break;
      case 1:
        currentSlide++
        document.querySelector('.S' + currentSlide).classList.add('active');
        deactivateBut(currentSlide);
        break;
      case 2:
        currentSlide = 0;
        document.querySelector('.S' + currentSlide).classList.add('active');
        deactivateBut(currentSlide);
      break;
    }


  }
  else {
    switch (currentSlide){
      case 0:
        currentSlide = 2;
        document.querySelector('.S' + currentSlide).classList.add('active');
        deactivateBut(currentSlide);
        break;
      case 1:
        currentSlide--
        document.querySelector('.S' + currentSlide).classList.add('active');
        deactivateBut(currentSlide);
        break;
      case 2:
        currentSlide--;
        document.querySelector('.S' + currentSlide).classList.add('active');
        deactivateBut(currentSlide);
      break;

  }
}
}
function addToCart(id) {

}




let currentBooks = JSON.parse(localStorage.getItem('books'));

for (var i = 0; i < currentBooks.length; i++) {


   slide = `
      <div class="s${i}">
          <div class="bookSlide">
            <img class="img" src= ${currentBooks[i].img}>
            <br>
            <br>
            <span class="name">${currentBooks[i].name}</span>
            <br>
            <span class="price">${currentBooks[i].price}</span>
            <span class="icon" onclick="addToCart(${currentBooks[i].id})">+</span>
            <input type="button" class="order" onclick="order()" value="Order">
            <i class="fas fa-trash-alt trash " aria-hidden="true" id="trash" onclick="trashit(${currentBooks[i].id})"></i>
          </div>
        </div>

    `;
    document.querySelector('.booksOverlay').innerHTML += slide;

};


localStorage.setItem('ids', '[]');


function addToCart(id) {
    let ids = JSON.parse(localStorage.getItem('ids'));
    ids.push(id.toString());
    localStorage.setItem('ids', JSON.stringify(ids));

}
function addBook() {
    document.querySelector('.addBook').classList.add('show');
}



// document.onclick = function(e){
//   if (e.target.id !== "formAdd" && e.target.id !== "edit" ) {
//     document.querySelector('.addBook').classList.remove("show");
//   }
// }



let sub = document.getElementById("subAdd");
let trash = document.getElementById("trash");


sub.onclick = function (e) {
  let newBooks = JSON.parse(localStorage.getItem('books'));
  var addname = document.getElementById("addname").value;
  let addimg = document.querySelector("#addimg").value;;
  let addprice = document.querySelector("#addprice").value;;
  numIds ++;
  var num = numIds.toString();


  let newbook = {};
  newbook.id = `${numIds}`;
  newbook.img = addimg;
  newbook.name = addname;
  newbook.price = addprice;

  newBooks.push(newbook);
  localStorage.setItem('books', JSON.stringify(newBooks));
  window.location.reload();
}



function trashit(id) {
  let newBooks = JSON.parse(localStorage.getItem('books'));
  numIds --;
  for (var i = 0; i < newBooks.length; i++) {
    if (newBooks[i].id === id.toString()) {
      newBooks.splice(i , 1);
    }

  }
  localStorage.setItem('books', JSON.stringify(newBooks));
  window.location.reload();


}


let exit = document.getElementById('exit');
exit.onclick = function() {
  window.location.reload();
}





