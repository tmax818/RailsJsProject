var id = window.location.href.split("/").pop();
console.log(id);

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
      .then(json => this.createReview(json));
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
}

let review = new Review();
review.fetchReview();
console.log(review);
