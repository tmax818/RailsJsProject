class Book {
  constructor(id, title, authorFirst, authorLast) {
    this.id = id;
    this.title = title;
    this.authorFirst = authorFirst;
    this.authorLast = authorLast;
  }

  fetchBooks() {
    fetch("http://localhost:3000/books/by_title.json")
      .then(res => res.json())
      .then(json => this.createBookList(json));
  }

  createBookList(data) {
    var books = [];
    data.forEach(book =>
      books.push(
        new Book(book.id, book.title, book.authorFirst, book.authorLast)
      )
    );
    books.forEach(book => {
      document.getElementById("books").innerHTML += `
      <ul>
        <li><a href="/books/${book.id}">${book.title}</a> By:${
        book.authorFirst
      } ${book.authorLast} </li>
        </ul>
      `;
    });
  }
}

let book = new Book();
book.fetchBooks();
