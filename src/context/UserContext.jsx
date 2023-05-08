import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//1º CREAR CONTEXTO
export const UserContext = createContext();

//2º CREAR PROVEEDOR CON LA INFORMACION DENTRO
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [clash, setClash] = useState([]);
  const [user, setUser] = useState(() => {
    if (localStorage.getItem('user')) {
      return localStorage.getItem('user');
    } else {
      return null;
    }
  });
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'header-dark');

  const toggleTheme = () => {
    if (theme === 'header-dark') {
      setTheme('header-light');
      localStorage.setItem('theme', 'header-light');
    } else {
      setTheme('header-dark');
      localStorage.setItem('theme', 'header-dark');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [pass, setPass] = useState(() => {
    if (localStorage.getItem('pass')) {
      return localStorage.getItem('pass');
    } else {
      return null;
    }
  });

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
    setUser(null);
    navigate('/');
  };

  //3º RETORNAR LA ETIQUETA WRAPEADORA CON LOS VALUE A COMPARTIR EN LA APLICACION
  return (
    <UserContext.Provider
      value={{ user, setUser, logout, pass, setPass, clash, setClash, toggleTheme }}
    >
      {children}
    </UserContext.Provider>
  );
};
