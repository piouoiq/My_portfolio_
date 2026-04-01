import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useLang } from "../Components/Sections/LangContext";
import { notFoundTranslations } from "../Translations/Translations";

export default function NotFound() {
  const { lang } = useLang();
  const t = notFoundTranslations[lang.toLowerCase() as "fr" | "en"];

  return (
    <div
      style={{
        backgroundImage: "url('/Pictures/pexels-steve-28399146.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <main>
        <div className="text-center pt-6 text-4xl font-bold text-black mb-10">
          <img
            className="mx-auto w-96 rounded-full border-8 border-[#ee8f15]"
            src="/Pictures/shocked_cat_GIF.gif"
            alt={t.alt}
          />
          <div className="p-4 ">
            <h1>{t.title}</h1>
            <span>{t.subtitle}</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
