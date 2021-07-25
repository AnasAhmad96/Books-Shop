'use strict';

let bookArray = [];

function ranDomnum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(ranDomnum(1,5));


function Book(nameBook, priceBook) {
  this.nameBook = nameBook;
  this.priceBook = priceBook;

  this.calRandompage = [];
  this.miNmum = 1;
  this.maXimum = 500;
  this.total = 0;
  bookArray.push(this);
  saveData();
}
Book.prototype.ranDpage = function () {
  this.calRandompage.calRandompage.push(ranDomnum(this.miNmum, this.maXimum));
};

let parent1 = document.getElementById('tableElement');
Book.prototype.render = function () {
  let table = document.createElement('table');
  parent1.appendChild(table);
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.nameBook;
  let td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = this.priceBook;
  handle();
};


let parent = document.getElementById('theForm');
let formBokk = parent.addEventListener('submit', handle);

function handle(event) {
  event.preventDefault();

  let namebook = event.target.bookName.value;
  console.log(namebook);

  let bookprice = event.target.bookPrice.value;
  console.log(bookprice);

  const newBook = new Book(namebook, bookprice);
  console.log(newBook);

  newBook.render();

}





function saveData() {
  localStorage.setItem('data', JSON.stringify(handle()));
}

function getData() {
  localStorage.getItem('data', JSON.parse(''));
}
getData();
