class NewBook {
  constructor(title, authorFirst, authorLast) {
    this.title = title;
    this.author_first = authorFirst;
    this.author_last = authorLast;
  }

  postBook(book, review) {
    const url = `http://localhost:3000/books`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": Rails.csrfToken()
      },
      credentials: "same-origin"
    })
      .then(res => res.json())
      .then(book => {
        this.displayBook(book);
        this.addReview(book.id, review);
      });
  }

  addReview(book, review) {
    const url = "http://localhost:3000/reviews";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        content: review,
        book_id: book
      }),
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": Rails.csrfToken()
      },
      credentials: "same-origin"
    });
  }

  displayBook(book) {
    div.innerHTML = `
    <ul>
      <li><a href="/books/${book.id}">${book.title}</a> By:${
      book.author_first
    } ${book.author_last} </li>
      </ul>
    `;
  }
}

let div;
let form;
document.addEventListener("DOMContentLoaded", () => {
  div = document.getElementById("new-book");
  form = document.getElementById("book-form");

  form.addEventListener("submit", e => {
    e.preventDefault();
    let title = form.elements["title"];
    let authorFirst = form.elements["author-first"];
    let authorLast = form.elements["author-last"];
    let review = form.elements["review"];
    let book = new NewBook(title.value, authorFirst.value, authorLast.value);
    console.log(book);
    book.postBook(book, review.value);
    book.displayBook(book);
  });
});
