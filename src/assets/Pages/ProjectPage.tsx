import Header from "../Components/Header";
import ProjectsSection from "../Components/ProjectsSection";
import Footer from "../Components/Footer";

export default function projectPage() {
  return (
    <>
      <Header />
      <main
        className=" font-gruppo font-bold bg-cover text-black"
        style={{ backgroundImage: "url('/Pictures/background.svg')" }}
      >
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
