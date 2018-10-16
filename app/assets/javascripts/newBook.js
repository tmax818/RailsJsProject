class NewBook {
  constructor(title, author_first, author_last) {
    this.title = title;
    this.author_first = author_first;
    this.author_last = author_last;
  }

  postBook(book, review) {
    console.log(review);
    let url = `http://localhost:3000/books`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": Rails.csrfToken()
      },
      credentials: "same-origin"
    })
      .then(x => x.json())
      .then(x => {
        console.log(x.id);
        this.displayBook(x);
        this.addReview(x.id, review);
      });
  }

  addReview(book, review) {
    let url = "http://localhost:3000/reviews";
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
