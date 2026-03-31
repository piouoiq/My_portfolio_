export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  dateKey: string;
  stared?: boolean;
}
