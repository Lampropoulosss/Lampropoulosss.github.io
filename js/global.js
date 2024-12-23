const footer_text = document.getElementById("footer-paragraph");

footer_text.innerHTML = `&copy; ${new Date().getFullYear()} Ioannis Lampropoulos. All Rights Reserved.`;

window.scroll_to = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerIcon?.addEventListener("click", () => {
  hamburgerMenu?.classList.toggle("show");
});
