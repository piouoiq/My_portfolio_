import type { Project } from "../../Types/Project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="card bg-[#e8531a] shadow-xl hover:shadow-2xl transition-shadow">
      <figure className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">
          {project.title}
          {project.featured && (
            <span className="badge badge-secondary">Featured</span>
          )}
        </h3>
        <p className="text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 my-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge badge-outline badge-sm">
              {tech}
            </span>
          ))}
        </div>

        <p className="text-xs text-base-content/60">{project.date}</p>

        <div className="card-actions justify-end mt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
