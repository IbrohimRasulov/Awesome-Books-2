let bookList = []

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(title, author) {
  const book = new Book(title, author);
  bookList.push(book);
}

function filterByTitle(item){
  return item.title != "title 1";
}

function removeBook(title, e){
  bookList = bookList.filter(filterByTitle);
  e.parentNode.parentNode.removeChild(e.parentNode);
  revomeFromStorage(title);
}

function display(title, author) {
  const div = document.createElement("div")
  div.innerHTML = `
  <p>${title}</p>
  <p>${author}</p>
  <button onClick = "removeBook('${title}', this)">Delete</button>`;
  const bookContainer = document.getElementById('bookContainer');
  bookContainer.appendChild(div)
}

for(let i = 0; i < localStorage.length; i++) {
  let title = localStorage.key(i);
  let author = localStorage.getItem(localStorage.key(i));
  display(title, author);
}

document.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  title = document.getElementById("book-title").value;
  author = document.getElementById("author").value;
  addBook(title, author);
  display(title, author);
  addBookToStorage(title, author);
  document.getElementById('book-form').reset();
});

function addBookToStorage(title, author) {
  window.localStorage.setItem(title, author);
}

function revomeFromStorage(title) {
  window.localStorage.removeItem(title);
}