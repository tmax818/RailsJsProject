var id = window.location.href.split("/").pop();
console.log(id);

class Review {
  fetchReview() {
    fetch(`http://localhost:3000/reviews/${id}.json`)
      .then(res => res.json())
      .then(json => console.log(json));
  }
}

let review = new Review();
review.fetchReview();
