const footer_text = document.getElementById(
  "footer-paragraph"
) as HTMLParagraphElement;

footer_text.innerHTML = `&copy; ${new Date().getFullYear()} Ioannis Lampropoulos. All Rights Reserved.`;

(window as any).scroll_to = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerIcon?.addEventListener("click", () => {
  hamburgerMenu?.classList.toggle("show");
});
