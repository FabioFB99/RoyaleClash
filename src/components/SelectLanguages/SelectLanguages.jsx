import { useContext } from 'react';

import { languageContext } from '../../context/LanguageContext';

const SelectLanguages = () => {
  const { handleLanguage } = useContext(languageContext);
  return (
    <select className="select" onChange={handleLanguage}>
      <option value="es-ES">ES</option>
      <option value="en-US">EN</option>
    </select>
  );
};

export default SelectLanguages;
