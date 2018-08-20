document.addEventListener("DOMContentLoaded", e => {
  console.log("== DOMContentLoaded ==")
  document.querySelector("body")
   .addEventListener("click", e => console.log("Reggae, Reggae!"));
})
