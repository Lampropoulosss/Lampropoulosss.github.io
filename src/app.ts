const footer_text = document.getElementById(
  "footer-paragraph"
) as HTMLParagraphElement;

footer_text.innerHTML = `&copy; ${new Date().getFullYear()} Ioannis Lampropoulos. All Rights Reserved.`;
