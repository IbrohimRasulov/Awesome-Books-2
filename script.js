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

