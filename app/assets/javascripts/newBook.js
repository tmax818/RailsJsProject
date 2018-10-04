const form = document.getElementById("book");
const input = form.querySelectorAll("input");

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log(input);
});
