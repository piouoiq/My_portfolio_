import Header from "../Components/Header";
import ProjectsSection from "../Components/Sections/ProjectsSection";
import Footer from "../Components/Footer";
import { ProjectPageTranslations } from "../../Data/Translations";
import { useLang } from "../Components/Sections/LangContext";

export default function projectPage() {
  const { lang } = useLang();
  const t = ProjectPageTranslations[lang.toLowerCase() as "fr" | "en"];

  return (
    <body
      style={{
        backgroundImage: "url('/Pictures/pexels-steve-28399146.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <main className="font-bold text-black">
        <section id="projects" className="grid grid-cols-2 px-4 py-4">
          <h2 className="text-4xl font-bold  mb-12 underline">
            {t.sectionTitle}
          </h2>
        </section>
        <ProjectsSection />
      </main>
      <Footer />
    </body>
  );
}
