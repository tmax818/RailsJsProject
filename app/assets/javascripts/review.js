let id = window.location.href.split("/").pop();
console.log(id);
let length = 10000;

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
    review.id = data.id;
    review.contents = data.content;
    review.user = data.user.name;
    review.book = data.book.title;
    review.authorFirst = data.book.author_first;
    review.authorLast = data.book.author_last;
    document.getElementById("review").innerHTML = `
    <h3>${review.book} By: ${review.authorFirst} ${review.authorLast} </h3>
    <h4>Review By: ${review.user}</h4>
    <p>${review.contents}</p>
    `;
  }

  fetchUserReviews() {
    fetch(`http://localhost:3000/users/${id}.json`)
      .then(res => res.json())
      .then(json => this.showUserReviews(json));
  }

  showUserReviews(data) {
    ReviewsDiv.innerHTML = `<h3>${data.name}'s Reviews</h3>`;
    data.reviews.forEach(review => {
      ReviewsDiv.innerHTML += `
      <ul>
    <li><a href="/reviews/${review.id}">${review.book.title}</a></li>
    </ul>`;
      console.log(review.book.title);
    });
  }

  fetchNextReview(id) {
    fetch(`http://localhost:3000/reviews/${id}.json`)
      .then(res => res.json())
      .then(json => this.createReview(json));
  }

  fetchLength(id) {
    fetch(`http://localhost:3000/reviews.json`)
      .then(res => res.json())
      .then(json => json.length)
      .then(x => (length = x));
    length > id ? id : (id = 0);
    return id;
  }
}

let review = new Review();
review.fetchReview();
review.fetchUserReviews();

handleclick = () => {
  id++;
  console.log(id);
  review.fetchNextReview(id);
  id = review.fetchLength(id);
  console.log(id);
};
let ReviewsDiv;
let ReviewDiv;

document.addEventListener("DOMContentLoaded", () => {
  ReviewsDiv = document.getElementById("user-reviews");
});
