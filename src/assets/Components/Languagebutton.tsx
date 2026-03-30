import { useLang } from "./Sections/LangContext";

export function LanguageButton() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
      className="rounded-full bg-white/15 px-4 py-2 text-m font-semibold text-black hover:bg-white/20 transition"
      aria-label="Toggle language"
    >
      {lang === "EN" ? "FR" : "EN"}
    </button>
  );
}
