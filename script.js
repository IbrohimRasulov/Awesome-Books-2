const bookList = []

function book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(title, author) {
  const book = new Book(title, author);
  bookList.push(book);
}

function filterByTitle(item, title){
  item.title != title;
}

function removeBook(title){
  bookList = bookList.filter(filterByTitle(title));
}

function display(title, author) {
  const div = document.createElement("div")
  div.innerHTML = `
  <p>${title}</p>
  <p>${author}</p>
  <button onClick = "removeBook(${title})">Delete</button>`
  const bookContainer = document.getElemetById("bookContainer")
  bookContainer.appendChild(div)
}

