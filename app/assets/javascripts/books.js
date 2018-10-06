var id = window.location.href.split("/")[4];

class Books {
  constructor(title, author_first, author_last) {
    this.title = title;
    this.author_first = author_first;
    this.author_last = author_last;
  }

  fetchBooks() {
    fetch(`http://localhost:3000/users/${id}/books.json`)
      .then(res => res.json())
      .then(json => this.createBookList(json));
  }

  createBookList(data) {
    var books = [];
    data.forEach(d =>
      books.push(new Books(d.title, d.author_first, d.author_last))
    );
    books.forEach(book => {
      document.getElementById("books").innerHTML += `
    <div class="row">
      <div class="col-md-2">
        <section class="center">
        </section>
      </div>
      <div class="col-md-8 well">
        <h4>${book.title} By: ${book.author_first} ${book.author_last}</h4>
      </div>
    </div>
    `;
    });
  }
}

let book = new Books();
book.fetchBooks();
