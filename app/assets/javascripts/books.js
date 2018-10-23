var id = window.location.href.split("/")[4];

class Books {
  constructor(id, title, authorFirst, authorLast) {
    this.id = id;
    this.title = title;
    this.authorFirst = authorFirst;
    this.authorLast = authorLast;
  }

  fetchBooks() {
    fetch(`http://localhost:3000/users/${id}/books.json`)
      .then(res => res.json())
      .then(json => this.createBookList(json));
  }

  createBookList(data) {
    var books = [];
    data.forEach(book =>
      books.push(
        new Books(book.id, book.title, book.author_first, book.author_last)
      )
    );
    books.forEach(book => {
      document.getElementById("books").innerHTML += `
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

let book = new Books();
book.fetchBooks();
