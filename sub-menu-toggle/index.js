const menuBtn = document.getElementById("menu-btn");
const dropDownMenu = document.getElementsByClassName("dropdown")[0];
const overlay = document.createElement("div");
overlay.classList.add("overlay");

menuBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
  if (dropDownMenu.classList.contains("active")) menuBtn.appendChild(overlay);
  else menuBtn.removeChild(overlay);
});
