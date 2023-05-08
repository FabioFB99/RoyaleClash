import './Header.css';
import '../../pages/Deck2/Deck2.css';

import React from 'react';
import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { toggleTheme } = useContext(UserContext);
  const { user, logout } = useContext(UserContext);
  return localStorage.getItem('theme') == 'header-dark' ? (
    <header className="header-dark">
      <button onClick={() => toggleTheme()}>
        <img
          className="imgLogo"
          src="https://res.cloudinary.com/dy4mossqz/image/upload/v1677334430/img/1u5pthU1_400x400_trfssm.jpg"
          alt="Crown logo"
        />
      </button>
      <NavLink to="/">
        <img
          className="imgBanner"
          src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677170946/ClashRoyale/clashrecortado_dxogp6.png"
          alt="Clash Royale"
        />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/gallery">
            <FormattedMessage id="header.1" />
          </NavLink>{' '}
        </li>{' '}
        <li>
          <NavLink to="/deck">
            <FormattedMessage id="header.2" />{' '}
          </NavLink>{' '}
        </li>
        <li>
          <NavLink to="/review">REVIEWS</NavLink>{' '}
        </li>
        <li>
          {user !== null && (
            <button
              className="bg-blue-500 border border-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded"
              onClick={() => logout()}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </header>
  ) : (
    <header>
      <button onClick={() => toggleTheme()}>
        <img
          className="imgLogo"
          src="https://res.cloudinary.com/dy4mossqz/image/upload/v1677334430/img/1u5pthU1_400x400_trfssm.jpg"
          alt="Crown logo"
        />
      </button>
      <NavLink to="/">
        <img
          className="imgBanner"
          src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677170946/ClashRoyale/clashrecortado_dxogp6.png"
          alt="Clash Royale"
        />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/gallery">
            {' '}
            <FormattedMessage id="header.1" />
          </NavLink>{' '}
        </li>{' '}
        <li className="headerMazos">
          <NavLink to="/deck">
            <FormattedMessage id="header.2" />
          </NavLink>{' '}
        </li>
        <li>
          <NavLink to="/review">REVIEWS</NavLink>{' '}
        </li>
        <li>
          {user !== null && (
            <button
              className="bg-blue-500 border border-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded"
              onClick={() => logout()}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
