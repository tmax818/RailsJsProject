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
