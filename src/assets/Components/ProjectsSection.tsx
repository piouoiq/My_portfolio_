import { projects } from "../../Data/Projects";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.stared && !b.stared) return -1;
    if (!a.stared && b.stared) return 1;
    return 0;
  });
  return (
    <section id="projects" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold  mb-12 underline">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
