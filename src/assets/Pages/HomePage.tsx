import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useLang } from "../Components/Sections/LangContext";
import { HomePageTranslations } from "../../Data/Translations";

export default function HomePage() {
  const { lang } = useLang();
  const t = HomePageTranslations[lang.toLowerCase() as "fr" | "en"];

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
        <div className="grid grid-cols-2 px-4 py-4">
          <h1 className="text-4xl underline">{t.aboutTitle}</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 px-4 gap-5 text-center items-center text-2xl md:text-4xl">
          <img
            className="px-8 w-full md:w-sm rounded-[59%_41%_54%_46%/72%_20%_80%_28%]"
            src="/Pictures/Avatar.png"
            alt={t.alt}
          />
          <p>{t.bio1}</p>
          <p>{t.bio2}</p>
        </div>
      </main>
      <Footer />
    </body>
  );
}
