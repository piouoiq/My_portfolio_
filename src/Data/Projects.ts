import type { Project } from "../Types/Project";

export const projects: Project[] = [
  {
    id: "Dataviz",
    title: "Dataviz",
    description:
      "A data visualization website displaying various charts using Recharts library in a React  application.",
    image: "/Pictures/screenshots/Dataviz.png",
    demoUrl: "https://dataviz-omega.vercel.app/",
    githubUrl: "https://github.com/piouoiq/dataviz",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "TailwindsCSS",
      "Recharts",
      "DaisyUI",
    ],
    date: "December 2025",
    stared: true,
  },
  {
    id: "quiz",
    title: "Cartoons Quiz",
    description:
      "Team project - A quiz with custom functionalities about cartoons.",
    image: "/Pictures/screenshots/quiz-homepage.png",
    demoUrl: "https://piouoiq.github.io/projet-quiz-team-mejeda/",
    githubUrl: "https://github.com/piouoiq/projet-quiz-team-mejeda",
    technologies: ["HTML", "CSS", "JavaScript", "DOM"],
    date: "October 2025",
    stared: true,
  },
  {
    id: "transcrimorse",
    title: "TranscriMorse",
    description:
      "A website that transcript Morse-code to text and the other way around.",
    image: "/Pictures/screenshots/transcriMorse.png",
    demoUrl: "https://piouoiq.github.io/transcriMorse/",
    githubUrl: "https://github.com/piouoiq/transcriMorse",
    technologies: ["HTML", "CSS", "JavaScript", "DOM"],
    date: "November 2025",
    stared: false,
  },
  {
    id: "paws-agency",
    title: "Paw's Model Agency",
    description:
      "A mini portfolio for the Paw's model agency with a grid layout for displaying pictures.",
    image: "/Pictures/screenshots/html_css_av_ex1.png",
    githubUrl:
      "https://github.com/piouoiq/Ada_tech_School/tree/main/%5BGHN%5D%20%5BC20%5D%20HTML-CSS-avanc%C3%A9/Exercice-1",
    technologies: ["HTML", "CSS"],
    date: "October 2025",
    stared: false,
  },
  {
    id: "guess-a-number",
    title: "Guess a Number",
    description:
      "A JavaScript mini game where the user guesses a number chosen by the machine, with hints indicating if the guess is lower, higher, or correct.",
    image: "/Pictures/screenshots/guess_a_number.png",
    githubUrl:
      "https://github.com/piouoiq/Ada_tech_School/tree/main/Exercices_individuels/02_guess_a_number.md",
    technologies: ["HTML", "JavaScript"],
    date: "October 2025",
    stared: false,
  },
  {
    id: "Adaopte",
    title: "Adaopte",
    description:
      "A React Vite website build to simulate an animal shelter's website. It contains a homepage, an adoption page with serch filters and a volunteering page with a form. It was build using Typescript and Tailwind CSS.",
    image: "/Pictures/screenshots/Adaopte.png",
    demoUrl: "https://adaopte-wheat.vercel.app/",
    githubUrl: "https://github.com/piouoiq/Adaopte",
    technologies: ["React", "Vite", "Typescript", "Tailwind"],
    date: "January 2026",
    stared: true,
  },
];
