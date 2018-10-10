class Book {
  constructor(id, title, author_first, author_last) {
    this.id = id;
    this.title = title;
    this.author_first = author_first;
    this.author_last = author_last;
  }

  fetchBooks() {
    fetch("http://localhost:3000/books/by_title.json")
      .then(res => res.json())
      .then(json => this.createBookList(json));
  }

  createBookList(data) {
    var books = [];
    data.forEach(d =>
      books.push(new Book(d.id, d.title, d.author_first, d.author_last))
    );
    books.forEach(book => {
      document.getElementById("books").innerHTML += `
      <ul>
        <li><a href="/books/${book.id}">${book.title}</a> By:${
        book.author_first
      } ${book.author_last} </li>
        </ul>
      `;
    });
  }
}

let book = new Book();
book.fetchBooks();
