export type LocalizedText = {
  fr: string;
  en: string;
};

export interface Studies {
  date: string;
  title: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
}
