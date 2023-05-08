import './Footer.css';

import { useContext } from 'react';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { UserContext } from '../../context/UserContext';

const Footer = () => {
  const { toggleTheme } = useContext(UserContext);
  return (
    <footer className="white">
      <div
        style={
          localStorage.getItem('theme') == 'header-dark'
            ? { backgroundColor: '#dc563f' }
            : { backgroundColor: '#488bf4' }
        }
      >
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3 ">
              {' '}
              <FormattedMessage id="footer.1" />{' '}
            </h3>
            <h4>
              {' '}
              <FormattedMessage id="footer.2" />{' '}
            </h4>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w- mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                  alt="google play"
                />
                <div className="text-left ml-3">
                  {' '}
                  <p className="text-xs text-gray-900">Download on </p>
                  <p className="text-sm md:text-base">
                    <a href="https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=es&gl=US">
                      Play Store
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                  alt="app store"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-900">Download on </p>
                  <p className="text-sm md:text-base">
                    {' '}
                    <a href="https://apps.apple.com/es/app/clash-royale/id1053012308">
                      Apple Store
                    </a>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p> Made with ❤️ in Neoland - 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
