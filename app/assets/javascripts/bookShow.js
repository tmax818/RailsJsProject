let id = window.location.href.split("/")[4];

class ShowBook {
  constructor(input) {
    console.log(input);
    this.id = input[0].id;
    this.title = input[0].title;
    this.author = `${input[0].author_first} ${input[0].author_last}`;
    this.reviews = input[0].reviews;
  }
}

fetchBooks = () => {
  fetch(`http://localhost:3000/users/${id}/books.json`)
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
