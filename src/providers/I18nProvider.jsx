import React, { useState } from "react";
import I18nContext from "../contexts/I18nContext";
import translations from "../Translations/Translation";

const I18nProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("en");

  const changeLang = (lang) => {
    if (translations[lang]) {
      setCurrentLang(lang);
    };
  };

  const contextValue = {
    currentLang,
    changeLang,
    currentTexts: translations[currentLang],
  };

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
};

export default I18nProvider;
