import { projects } from "../../../Data/Projects";
import { ProjectCard } from "../Cards/ProjectCard";

export default function ProjectsSection() {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.stared && !b.stared) return -1;
    if (!a.stared && b.stared) return 1;
    return 0;
  });

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
