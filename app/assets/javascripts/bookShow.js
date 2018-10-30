var id = window.location.href.split("/")[4];
console.log(id);

class ShowBook {
  constructor(input) {
    console.log(input);
    this.id = input.id;
    this.title = input.title;
    this.author = `${input.author_first} ${input.author_last}`;
    this.reviews = input.reviews;
  }
}

fetchBooks = () => {
  fetch(`http://localhost:3000/books/${id}.json`)
    .then(res => res.json())
    .then(json => {
      let book = new ShowBook(json);
      console.log(book);
      displayBook(book);
    });
};

displayBook = book => {
  ReviewDiv.innerHTML = `<h3>All Reviews for ${book.title}: </h3>`;
  book.reviews.forEach(review => {
    ReviewDiv.innerHTML += `
      <ul>
    <li><a href="/reviews/${review.id}">${review.user.name}</a></li>
    </ul>`;
  });
};
let ReviewDiv;
document.addEventListener("DOMContentLoaded", () => {
  ReviewDiv = document.getElementById("reviews-list");
  fetchBooks();
});
