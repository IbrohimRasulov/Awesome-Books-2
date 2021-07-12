const bookList = []

function book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(title, author) {
  const book = new Book(title, author);
  bookList.push(book);
}

