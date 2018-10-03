class BookByTitle {
  constructor(id, title, firstName, lastName) {
    this.id = id
    this.title = title,
    this.firstName = firstName,
    this.lastName = lastName
  }

  fetchBooks() {
    fetch("http://localhost:3000/books/by_title.json").then(res => res.json()).then(res => console.log(res))
  }
}
