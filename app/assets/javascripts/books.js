var id = window.location.href.split("/")[4];

class Books {
  constructor(id, title, authorFirst, authorLast, reviews) {
    this.id = id;
    this.title = title;
    this.authorFirst = authorFirst;
    this.authorLast = authorLast;
    this.reviews = reviews;
  }

  fetchBooks() {
    fetch(`http://localhost:3000/users/${id}/books.json`)
      .then(res => res.json())
      .then(json => this.createBookList(json));
  }

  createBookList(data) {
    let books = [];
    data.forEach(book =>
      books.push(
        new Books(
          book.id,
          book.title,
          book.author_first,
          book.author_last,
          book.reviews
        )
      )
    );
    console.log(books);
    books.forEach(book => {
      booksDiv.innerHTML += `
    <div class="row">
      <div class="col-md-2">
        <section class="center">
        </section>
      </div>
      <div class="col-md-8 well">
        <h4><a href="/books/${book.id}">${book.title}</a> By: ${
        book.authorFirst
      } ${book.authorLast}</h4>
      </div>
    </div>
    `;
    });
  }
}
let booksDiv;
let booksButton;
document.addEventListener("DOMContentLoaded", () => {
  let book = new Books();
  booksButton = document.getElementById("list-books");
  booksButton.addEventListener("click", () => {
    book.fetchBooks();
  });
  booksDiv = document.getElementById("books");
});
