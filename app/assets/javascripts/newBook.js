const form = document.getElementById("book");
const input = form.querySelectorAll("input");

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log(input);
});

class NewBook {
  constructor(title, author_first, author_last, review) {
    this.title = title;
    this.author_first = author_first;
    this.author_last = author_last;
    this.review = review;
  }

  postNewBook() {}
}

let book = new NewBook();
console.log(book);
