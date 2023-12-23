export interface LangInterface {
  lang: "in" | "eng";
}

export type LangContextType = {
  lang: LangInterface;
  changeLang: (lang: LangInterface) => void;
};
