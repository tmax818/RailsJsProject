class NewBook {
  constructor(title, author_first, author_last, review) {
    this.title = title;
    this.author_first = author_first;
    this.author_last = author_last;
    this.review = review;
  }
}

let title = document.getElementById("title");
let first = document.getElementById("first");
let last = document.getElementById("last");
let review = document.getElementById("review");
let book = new NewBook();

document.getElementById("book").addEventListener("submit", e => {
  e.preventDefault();
  book.title = title.value;
  book.first = first.value;
  book.last = last.value;
  book.review = review.value;
  console.log(book);
});
