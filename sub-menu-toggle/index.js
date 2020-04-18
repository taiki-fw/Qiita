const menuBtn = document.getElementById("menu-btn");
const dropDownMenu = document.getElementsByClassName("dropdown")[0];

menuBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
});
