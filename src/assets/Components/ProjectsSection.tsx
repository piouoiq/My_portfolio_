import { projects } from "../../Data/Projects";
import { ProjectCard } from "./ProjectCard";
import { useNavigate } from "react-router";

export default function ProjectsSection() {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.stared && !b.stared) return -1;
    if (!a.stared && b.stared) return 1;
    return 0;
  });

  const nav = useNavigate();
  const navigate = () => {
    nav("/");
  };

  return (
    <>
      <section id="projects" className="grid grid-cols-2 px-4 py-4">
        <h2 className="text-4xl font-bold  mb-12 underline">My Projects</h2>
        <button
          onClick={navigate}
          className="btn w-20 md:w-35 justify-self-end ml-20 bg-primary hover:bg-base-200 text-md md:text-xl border-0"
        >
          <img
            src="/src/assets/Pictures/house.svg"
            alt="home icon"
            className="size-[1.2em]"
          />
          Home
        </button>
      </section>
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
