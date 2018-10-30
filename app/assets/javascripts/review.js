let id = window.location.href.split("/").pop();

class Review {
  constructor(id, contents, user, book, authorFirst, authorLast) {
    this.id = id;
    this.contents = contents;
    this.user = user;
    this.book = book;
    this.authorFirst = authorFirst;
    this.authorLast = authorLast;
  }

  fetchReview() {
    fetch(`http://localhost:3000/reviews/${id}.json`)
      .then(res => res.json())
      .then(json => {
        this.createReview(json);
      });
  }

  createReview(data) {
    console.log(data);
    review.id = data.id;
    review.contents = data.content;
    review.user = data.user.name;
    review.book = data.book.title;
    review.authorFirst = data.book.author_first;
    review.authorLast = data.book.author_last;
    ReviewDiv.innerHTML = `
    <h3>${review.book} By: ${review.authorFirst} ${review.authorLast} </h3>
    <h4>Review By: ${review.user}</h4>
    <p>${review.contents}</p>
    `;
  }
}
fetchUserReviews = () => {
  fetch(`http://localhost:3000/users/${id}.json`)
    .then(res => res.json())
    .then(json => showUserReviews(json));
};

showUserReviews = data => {
  ReviewsDiv.innerHTML = `<h3>${data.name}'s Reviews</h3>`;
  data.reviews.forEach(review => {
    ReviewsDiv.innerHTML += `
      <ul>
    <li><a href="/reviews/${review.id}">${review.book.title}</a></li>
    </ul>`;
    console.log(review.book.title);
  });
};

let review = new Review();

let ReviewsDiv;
let ReviewDiv;

document.addEventListener("DOMContentLoaded", () => {
  ReviewsDiv = document.getElementById("user-reviews");
  ReviewDiv = document.getElementById("review");
  review.fetchReview();
  fetchUserReviews();
});
