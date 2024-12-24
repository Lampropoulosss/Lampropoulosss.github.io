const projects = [
  {
    title: "This Website",
    description:
      "A simple website to showcase my projects and skills. Built with HTML, CSS, and JavaScript",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/Lampropoulosss.github.io",
    githubUrl: "https://github.com/Lampropoulosss/Lampropoulosss.github.io",
    liveUrl: "https://lampropoulosss.github.io/",
  },
  {
    title: "Go Timer Application",
    description:
      "Simple Timer Desktop Application written in Go, the Wails Framework and Svelte.js",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/go-timer-app",
    githubUrl: "https://github.com/Lampropoulosss/go-timer-app",
  },
  {
    title: "Tauri Timer Application",
    description:
      "Simple Timer Desktop Application written in Rust, the Tauri Framework and Svelte.js",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/tauri-timer",
    githubUrl: "https://github.com/Lampropoulosss/tauri-timer",
  },
  {
    title: "HTTP Server in Rust",
    description:
      'Simple HTTP Server written in pure Rust. Currently supports only "GET" requests and serves files from the "public" directory',
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/Rust-HTML-Server",
    githubUrl: "https://github.com/Lampropoulosss/Rust-HTML-Server",
  },
  {
    title: "AI Study Assistant Workshop",
    description:
      "An application that uses Unbody's API to help students study more effectively. Built with React, Node.js, and Next.js with TypeScript",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/ai-study-assistant-workshop",
    githubUrl: "https://github.com/Lampropoulosss/ai-study-assistant-workshop",
  },
  {
    title: "React Blogs Application",
    description:
      "Simple Blog Full Stack Application using React.JS for the Front-End and Express.JS for the Back-End. Uses JsonWebToken for authentication and MySQL for the database",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/Simple-React-Blog",
    githubUrl: "https://github.com/Lampropoulosss/Simple-React-Blog",
  },
  {
    title: "HTTP Server in C",
    description:
      "Simple HTTP Server written in C. Currently supports only \"GET\" requests and serves files from the 'public' directory",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/C-HTML-Server",
    githubUrl: "https://github.com/Lampropoulosss/C-HTML-Server",
  },
  {
    title: "SMTP Server in C",
    description: "Simple SMTP Server written in C. UNFINISHED",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/C-SMTP-Server",
    githubUrl: "https://github.com/Lampropoulosss/C-SMTP-Server",
  },
  {
    title: "Youtube to MP3 Converter",
    description:
      "Old MP3 Converter Project (mp3convert.tv) written in Next.js. It is no longer maintained",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/mp3convert.tv",
    githubUrl: "https://github.com/Lampropoulosss/mp3convert.tv",
  },
  {
    title: "WebM Parser in C",
    description: "Simple WebM Parser written in C. UNFINISHED",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/webm_parser",
    githubUrl: "https://github.com/Lampropoulosss/webm_parser",
  },
  {
    title: "Simple Shell in C",
    description: "Simple Shell written in C. It supports quotes and pipes",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/c-shell",
    githubUrl: "https://github.com/Lampropoulosss/c-shell",
  },
  {
    title: "Simple Projects in C",
    description: "A few simple starting projects written in C",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/simple-c-projects",
    githubUrl: "https://github.com/Lampropoulosss/simple-c-projects",
  },
  {
    title: "Tic Tac Toe Game in C++",
    description:
      'Simple Tic Tac Toe Game written in C++ with two game options: "Player vs Player" and "Player vs Computer"',
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/tic-tac-toe-cpp",
    githubUrl: "https://github.com/Lampropoulosss/tic-tac-toe-cpp",
  },
  {
    title: "Simple Rest API Server",
    description:
      "A Simple Rest API Server With User Authentication using JsonWebToken, written in Node.js with Express.js, the ejs view engine and MongoDB",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/Rest-API-Server",
    githubUrl: "https://github.com/Lampropoulosss/Rest-API-Server",
  },
  {
    title: "Website for Chaotic Destiny Hosting",
    description:
      "A website for Chaotic Destiny Hosting, a Discord bot and Minecraft server hosting company. Built with HTML, CSS, and JavaScript",
    imageUrl:
      "https://opengraph.githubassets.com/208ce1ceef3c54433632b916a87dfee40dbf201537e4a8bf087cedfc69f6bf8c/Lampropoulosss/Chaotic-Destiny-Hosting",
    githubUrl: "https://github.com/Lampropoulosss/Chaotic-Destiny-Hosting",
    liveUrl: "https://lampropoulosss.github.io/Chaotic-Destiny-Hosting/",
  },
];

const projectsContainer = document.querySelector(".projects");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");

  const imageElement = document.createElement("img");
  imageElement.src = project.imageUrl;
  imageElement.alt = `${project.title} screenshot`; // Add alt for accessibility
  projectElement.appendChild(imageElement);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const titleElement = document.createElement("h3");
  titleElement.textContent = project.title;
  infoDiv.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = project.description;
  infoDiv.appendChild(descriptionElement);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttonsDiv");

  const githubElement = document.createElement("a");
  githubElement.href = project.githubUrl;
  githubElement.textContent = "GitHub";
  githubElement.target = "_blank"; // Open in a new tab
  githubElement.rel = "noopener noreferrer"; // Security best practice
  buttonsDiv.appendChild(githubElement);

  if (project.liveUrl) {
    const liveElement = document.createElement("a");
    liveElement.href = project.liveUrl;
    liveElement.textContent = "Live";
    liveElement.target = "_blank"; // Open in a new tab
    liveElement.rel = "noopener noreferrer"; // Security best practice
    buttonsDiv.appendChild(liveElement);
  }

  infoContainer.appendChild(infoDiv);
  infoContainer.appendChild(buttonsDiv);
  projectElement.appendChild(infoContainer);
  projectsContainer.appendChild(projectElement);
});
