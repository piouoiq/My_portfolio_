import { footerTranslations } from "../../Data/Translations";
import { useLang } from "./Sections/LangContext";

export default function Footer() {
  const { lang } = useLang();
  const t = footerTranslations[lang.toLowerCase() as "fr" | "en"];

  return (
    <footer
      className=" text-black text-xl font-bold p-4 text-center static bottom-0"
      style={{
        backgroundImage: "url('/Pictures/pexels-steve-28399146.jpg')",
      }}
    >
      <h4 className="underline">{t.contact}</h4>
      <div>
        <a
          href="https://www.linkedin.com/in/melissa-largilliere/"
          target="_blank"
        >
          <img
            className="w-5 inline mr-2"
            src="/Pictures/linkedin.svg"
            alt={t.altLinkedin}
          />
        </a>
        <a href="https://github.com/piouoiq" target="_blank">
          <img
            className="w-5 inline "
            src="/Pictures/github.svg"
            alt={t.altGithub}
          />
        </a>
      </div>
      <div>
        <button
          className="cursor-pointer"
          onClick={() =>
            (window.location.href = "mailto:melargilliere@gmail.com")
          }
        >
          {t.email}
        </button>

        <p>
          <img
            src="/Pictures/copyright-svgrepo-com.svg"
            alt={t.altCopyright}
            className="inline w-3.5 h-4 mr-1"
          />
          {t.copyright}
        </p>
      </div>
    </footer>
  );
}
