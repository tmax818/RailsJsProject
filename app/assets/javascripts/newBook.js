class NewBook {
  constructor(title, author_first, author_last, review) {
    (this.title = title),
      (this.author_first = author_first),
      (this.author_last = author_last),
      (this.review = review);
  }

  hello() {
    console.log("inside hello");
  }
}
