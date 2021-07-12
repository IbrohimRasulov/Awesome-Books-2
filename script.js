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