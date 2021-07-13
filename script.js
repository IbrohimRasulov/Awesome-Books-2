class Books {
  constructor() {
    this.bookList = [];
  }

  addBook(title, author) {
    const book = {title, author};
    this.bookList.push(book);
  }

  addBookToStorage(title, author) {
    window.localStorage.setItem(title, author);
  }

  display(title, author) {
    const div = document.createElement('div');
    div.innerHTML = `
    <p>${title}</p>
    <p>${author}</p>
    <button class = "delete-buttons">Delete</button>`;
    const bookContainer = document.getElementById('bookContainer');
    bookContainer.appendChild(div);
  }

  removeBook(title, e) {
    this.bookList = this.bookList.filter(this.filterByTitle);
    e.parentNode.parentNode.removeChild(e.parentNode);
    this.revomeFromStorage(title);
  }

  filterByTitle(item) {
    return item.title !== 'title 1';
  }

  revomeFromStorage(title) {
    window.localStorage.removeItem(title);
  }
}

for (let i = 0; i < localStorage.length; i += 1) {
  const title = localStorage.key(i);
  const author = localStorage.getItem(localStorage.key(i));
  const book = new Books();
  book.display(title, author);
}

document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('author').value;
  const book = new Books();
  book.addBook(title, author);
  book.display(title, author);
  book.addBookToStorage(title, author);
  document.getElementById('book-form').reset();
});


const dbtn = document.querySelector('#bookContainer');
dbtn.addEventListener('click',(e) => {
  const book = new Books();
  const title = e.target.parentNode.firstChild.nextSibling
  book.removeBook(title.textContent, title)
} );