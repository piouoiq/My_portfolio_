import Header from "../Components/Header";
import ProjectsSection from "../Components/Sections/ProjectsSection";
import Footer from "../Components/Footer";

export default function projectPage() {
  return (
    <body
      style={{
        backgroundImage: "url('public/Pictures/pexels-steve-28399146.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <main className="font-bold bg-cover text-black">
        <section id="projects" className="grid grid-cols-2 px-4 py-4">
          <h2 className="text-4xl font-bold  mb-12 underline">My Projects</h2>
        </section>
        <ProjectsSection />
      </main>
      <Footer />
    </body>
  );
}
