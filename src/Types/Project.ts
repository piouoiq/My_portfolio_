export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  date: string;
  featured?: boolean;
}
