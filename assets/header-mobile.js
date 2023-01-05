let mobile_dropdowns = document.querySelectorAll(".mobile--dropdown");
mobile_dropdowns.forEach(dropdown => {
  dropdown.addEventListener("click", e => {
    e.target.classList.toggle("active");
    e
      .target
      .nextElementSibling
      .classList
      .toggle("active");
  });
});

let mobile_header = document.querySelector(".header__mobile");
let mobile_close = document.querySelector(".header__close");
let mobile_open = document.querySelector(".header__mobile--icon");

mobile_open.addEventListener("click", e => {
  mobile_header.style.display = "block";
  showOverlay();
  setTimeout(() => {
    mobile_header.classList.add("active");
  }, 10);
});
mobile_close.addEventListener("click", e => {
  mobile_header.classList.remove("active");
  hideOverlay();
  setTimeout(() => {
    mobile_header.style.display = "none";
  }, 260);
});