const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const menuLinks = menu.querySelectorAll("a"); 

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  menu.classList.toggle("active");
  closeBtn.textContent = menu.classList.contains("active") ? "✖" : "menu";
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !closeBtn.contains(e.target)) {
    menu.classList.remove("active");
    closeBtn.textContent = "menu";
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    closeBtn.textContent = "menu";
  });
});