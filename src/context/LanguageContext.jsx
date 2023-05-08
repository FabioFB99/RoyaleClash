import { createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

import English from '../lang/en.json';
import Spanish from '../lang/es.json';

export const languageContext = createContext();

const recoverLanguage = () => {
  if (navigator.language === 'es-ES') {
    return Spanish;
  } else if (navigator.language === 'en-US') {
    return English;
  } else {
    return Spanish;
  }
};

export const ProviderLanguage = ({ children }) => {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(recoverLanguage());

  const handleLanguage = (ev) => {
    setLocale(ev.target.value);
    setMessages(
      ev.target.value === 'es-ES'
        ? Spanish
        : ev.target.value === 'en-US'
        ? English
        : Spanish,
    );
  };

  return (
    <languageContext.Provider value={{ locale, handleLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </languageContext.Provider>
  );
};
