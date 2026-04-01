import { MenuButton } from "./MenuButton";
import { LanguageButton } from "./Languagebutton";
import { useLang } from "../Components/Sections/LangContext";
import { headerTranslations } from "../Translations/Translations";

export default function Header() {
  const { lang } = useLang();
  const t = headerTranslations[lang.toLowerCase() as "fr" | "en"];

  return (
    <header className="text-black font-bold p-4 text-center static top-0">
      <div className="md:flex">
        <div className="mx-auto text-center">
          <h1 className="text-4xl underline">{t.name}</h1>
          <p className="text-xl">{t.title}</p>
        </div>
        <div className="p-3">
          <LanguageButton />
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
