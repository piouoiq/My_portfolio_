import type { Project } from "../../../Types/ProjectTypes";
import { useLang } from "../Sections/LangContext";
import {
  projectsTranslations,
  starTranslations,
} from "../../../Data/Translations";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { lang } = useLang();
  const t =
    projectsTranslations[project.titleKey as keyof typeof projectsTranslations][
      lang.toLowerCase() as "fr" | "en"
    ];
  const starT = starTranslations[lang.toLowerCase() as "fr" | "en"];

  return (
    <div className=" card bg-primary shadow-xl hover:shadow-2xl transition-shadow">
      <figure className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={t.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">
          {t.title}
          {project.stared && (
            <span className="badge badge-outline bg-accent">
              {starT}
              <img
                src="/Pictures/sparkles.svg"
                alt="sparkle icon"
                className="size-[1.2em]"
              />
            </span>
          )}
        </h3>
        <p className="text-sm">{t.description}</p>

        <div className="flex flex-wrap gap-2 my-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="badge badge-outline bg-accent-content badge-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-xs text-base-content">{t.date}</p>

        <div className="card-actions justify-end mt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline bg-accent hover:bg-base-200 btn-sm"
            >
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline bg-accent btn-sm hover:bg-base-200"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
