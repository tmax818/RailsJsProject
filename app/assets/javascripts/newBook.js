class NewBook {
  constructor(title, author_first, author_last, review) {
    (this.title = title),
      (this.author_first = author_first),
      (this.author_last = author_last),
      (this.review = review);
  }

  postBook(book) {
    console.log(book);
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
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  }
}
