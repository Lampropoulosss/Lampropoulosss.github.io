const resources = [
  {
    title: "MDN Web Docs",
    description:
      "Mozilla Developer Network (MDN) provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and HTML5 Apps.",
    link: "https://developer.mozilla.org/en-US/",
    buttonText: "Visit MDN Web Docs",
  },
  {
    title: "W3Schools",
    description:
      "W3Schools is a web developer's site, with tutorials and references on web development languages such as HTML, CSS, JavaScript, PHP, SQL, and Bootstrap.",
    link: "https://www.w3schools.com/",
    buttonText: "Visit W3Schools",
  },
  {
    title: "freeCodeCamp",
    description:
      "freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, and local organizations that intend to make learning web development accessible to anyone.",
    link: "https://www.freecodecamp.org/",
    buttonText: "Visit freeCodeCamp",
  },
  {
    title: "Codecademy",
    description:
      "Codecademy is an American online interactive platform that offers free coding classes in 12 different programming languages including Python, Java, JavaScript, Ruby, SQL, C++, and Sass, as well as markup languages HTML and CSS.",
    link: "https://www.codecademy.com/",
    buttonText: "Visit Codecademy",
  },
  {
    title: "Stack Overflow",
    description:
      "Stack Overflow is a question and answer site for professional and enthusiast programmers. It's built and run by you as part of the Stack Exchange network of Q&A sites.",
    link: "https://stackoverflow.com/",
    buttonText: "Visit Stack Overflow",
  },
  {
    title: "HTML&CSS Book",
    description:
      "HTML&CSS: Design and Build Websites by Jon Duckett is a full-color introduction to the basics of HTML and CSS. It covers everything from structuring and styling web pages to creating responsive designs.",
    link: "https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189",
    buttonText: "View on Amazon",
  },
  {
    title: "Net Ninja",
    description:
      "The Net Ninja provides video tutorials on web development, including HTML, CSS, JavaScript, React, Node.js, Firebase, and more.",
    link: "https://www.youtube.com/@NetNinja",
    buttonText: "Visit Net Ninja",
  },
  {
    title: "Traversy Media",
    description:
      "Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS, and much more.",
    link: "https://www.youtube.com/@TraversyMedia",
    buttonText: "Visit Traversy Media",
  },
  {
    title: "Fireship",
    description:
      "High-intensity ⚡ code tutorials and tech news to help you ship your app faster.",
    link: "https://www.youtube.com/@Fireship",
    buttonText: "Visit Fireship",
  },
  {
    title: "ByteGrad",
    description:
      "ByteGrad offers videos related to TypeScript, React and Next.js.",
    link: "https://www.youtube.com/@ByteGrad",
    buttonText: "Visit ByteGrad",
  },
];

const container = document.querySelector(".resources .container");

resources.forEach((resource) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = resource.title;

  const description = document.createElement("p");
  description.textContent = resource.description;

  const link = document.createElement("a");
  link.href = resource.link;
  link.textContent = resource.buttonText;
  link.target = "_blank";

  const resourceInfo = document.createElement("div");
  resourceInfo.classList.add("resource-info");

  resourceInfo.appendChild(title);
  resourceInfo.appendChild(description);

  card.appendChild(resourceInfo);
  card.appendChild(link);

  container.appendChild(card);
});
