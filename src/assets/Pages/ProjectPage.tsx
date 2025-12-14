import Header from "../Components/Header";
import { useNavigate } from "react-router";
import ProjectsSection from "../Components/ProjectsSection";
import Footer from "../Components/Footer";

export default function projectPage() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/");
  };

  return (
    <>
      <Header />
      <main
        className=" font-gruppo font-bold bg-cover text-black"
        style={{ backgroundImage: "url('/Pictures/background.svg')" }}
      >
        <section id="projects" className="grid grid-cols-2 px-4 py-4">
          <h2 className="text-4xl font-bold  mb-12 underline">My Projects</h2>
          <button
            onClick={navigate}
            className="btn w-20 md:w-35 justify-self-end ml-20 bg-primary hover:bg-base-200 text-md md:text-xl border-0"
          >
            <img
              src="/Pictures/house.svg"
              alt="home icon"
              className="size-[1.2em]"
            />
            Home
          </button>
        </section>
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
