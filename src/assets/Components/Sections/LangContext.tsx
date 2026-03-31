import { createContext, useContext } from "react";

type Lang = "FR" | "EN";

export const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "FR", setLang: () => {} });

export const useLang = () => useContext(LangContext);
