const menuBtn = document.querySelector("#hamburger-menu");
const munuMobile = document.querySelector("#mobile-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  munuMobile.classList.toggle("hidden");
  munuMobile.classList.toggle("flex");
});
