import './index.css';
import './assets/fonts/SVN-Supercell Magic.otf';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ProviderLanguage } from './context/LanguageContext';
import { UserContextProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderLanguage>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ProviderLanguage>
    </BrowserRouter>
  </React.StrictMode>,
);
