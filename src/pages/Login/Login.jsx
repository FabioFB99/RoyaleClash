import './Login.css';

import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { UserContext } from '../../context/UserContext';

const Login = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const { user, setUser } = useContext(UserContext);
  const { pass, setPass } = useContext(UserContext);
  const inputRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();
  const { toggleTheme } = useContext(UserContext);
  return (
    <main>
      <div className="container">
        <div
          className="box"
          style={
            localStorage.getItem('theme') == 'header-dark'
              ? {
                  backgroundColor: '#dc563f',
                  color: '#488bf4',
                }
              : {
                  backgroundColor: '#488bf4',
                  color: '#dc563f',
                }
          }
        >
          <div
            className="form"
            style={
              localStorage.getItem('theme') == 'header-dark'
                ? {
                    backgroundColor: '#dc563f',
                    color: '#488bf4',
                  }
                : {
                    backgroundColor: '#488bf4',
                    color: '#dc563f',
                  }
            }
          >
            <h2
              style={
                localStorage.getItem('theme') == 'header-dark'
                  ? {
                      backgroundColor: '#dc563f',
                      color: 'white',
                    }
                  : {
                      backgroundColor: '#488bf4',
                      color: 'white',
                    }
              }
            >
              LOGIN
            </h2>
            <div
              className="inputBox"
              style={
                localStorage.getItem('theme') == 'header-dark'
                  ? {
                      backgroundColor: '#dc563f',
                      color: 'white',
                    }
                  : {
                      backgroundColor: '#488bf4',
                      color: 'white',
                    }
              }
            >
              <input
                type="text"
                ref={inputRef}
                required="required"
                style={
                  localStorage.getItem('theme') == 'header-dark'
                    ? {
                        color: 'white',
                      }
                    : {
                        color: 'white',
                      }
                }
              />
              <span
                style={
                  localStorage.getItem('theme') == 'header-dark'
                    ? {
                        backgroundColor: '#dc563f',
                        color: 'white',
                      }
                    : {
                        backgroundColor: '#488bf4',
                        color: 'white',
                      }
                }
              >
                Username
              </span>
              <i
                style={
                  localStorage.getItem('theme') == 'header-dark'
                    ? {
                        backgroundColor: '#488bf4',
                        color: 'white',
                      }
                    : {
                        backgroundColor: '#dc563f',
                        color: 'white',
                      }
                }
              ></i>
            </div>
            <div
              className="inputBox"
              style={
                localStorage.getItem('theme') == 'header-dark'
                  ? {
                      backgroundColor: '#dc563f',
                      color: 'white',
                    }
                  : {
                      backgroundColor: '#488bf4',
                      color: 'white',
                    }
              }
            >
              <input
                type="password"
                ref={passRef}
                required="required"
                style={
                  localStorage.getItem('theme') == 'header-dark'
                    ? {
                        color: 'white',
                      }
                    : {
                        color: 'white',
                      }
                }
              />
              <span
                style={
                  localStorage.getItem('theme') == 'header-dark'
                    ? {
                        backgroundColor: '#dc563f',
                        color: 'white',
                      }
                    : {
                        backgroundColor: '#488bf4',
                        color: 'white',
                      }
                }
              >
                Password
              </span>
              <i
                style={
                  localStorage.getItem('theme') == 'header-dark'
                    ? {
                        backgroundColor: '#488bf4',
                        color: '#488bf4',
                      }
                    : {
                        backgroundColor: '#dc563f',
                        color: '#dc563f',
                      }
                }
              ></i>
            </div>
            <button
              style={
                localStorage.getItem('theme') == 'header-dark'
                  ? {
                      backgroundColor: '#488bf4',
                      color: 'white',
                    }
                  : {
                      backgroundColor: '#dc563f',
                      color: 'white',
                    }
              }
              onClick={() => {
                if (inputRef.current.value !== '' && passRef.current.value !== '') {
                  setUser(inputRef.current.value);
                  setPass(passRef.current.value);
                  localStorage.setItem('user', inputRef.current.value);
                  localStorage.setItem('pass', passRef.current.value);
                  navigate('/');
                  Toast.fire({
                    icon: 'success',
                    title: '¡Logueado con éxito!',
                  });
                } else {
                  return Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: 'Por favor, introduzca usuario y contraseña válidos',
                    confirmButtonText: 'Vale',
                  });
                }
              }}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
