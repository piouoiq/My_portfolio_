import type { Project } from "../Types/Project";

export const projects: Project[] = [
  {
    id: "transcrimorse",
    title: "TranscriMorse",
    description:
      "A website that transcript Morse-code to text and the other way around.",
    image: "src/assets/Pictures/screenshots/transcriMorse.png",
    demoUrl: "https://piouoiq.github.io/transcriMorse/",
    githubUrl: "https://github.com/piouoiq/transcriMorse",
    technologies: ["HTML", "CSS", "JavaScript", "DOM"],
    date: "November 2025",
    stared: true,
  },
  {
    id: "quiz",
    title: "Cartoons Quiz",
    description:
      "Team project - A quiz with custom functionalities about cartoons.",
    image: "src/assets/Pictures/screenshots/quiz-homepage.png",
    demoUrl: "https://piouoiq.github.io/projet-quiz-team-mejeda/",
    githubUrl: "https://github.com/piouoiq/projet-quiz-team-mejeda",
    technologies: ["HTML", "CSS", "JavaScript", "DOM"],
    date: "October 2025",
  },
  {
    id: "base-apparel",
    title: "Base Apparel Home Page",
    description:
      "A coming soon home page for a clothing brand built with mobile-first approach.",
    image: "src/assets/Pictures/screenshots/html_css_av_ex3.png",
    demoUrl: "/exercices/Exercice-3/index.html",
    githubUrl:
      "https://github.com/piouoiq/Ada_tech_School/tree/main/%5BGHN%5D%20%5BC20%5D%20HTML-CSS-avanc%C3%A9/Exercice-3",
    technologies: ["HTML", "CSS"],
    date: "October 2025",
  },
  // Ajoute les autres projets ici...
];
