import './App.css';

import { FormattedDate, FormattedMessage } from 'react-intl';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import BaseLayout from './layouts/BaseLayout';
import Deck from './pages/Deck/Deck';
import Deck2 from './pages/Deck2/Deck2';
import Deck3 from './pages/Deck3/Deck3';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Review from './pages/Review/Review';

function App() {
  return (
    <BaseLayout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deck/deck2" element={<Deck2 />} />
        <Route path="/deck/deck3" element={<Deck3 />} />
        <Route
          path="/gallery"
          element={
            <ProtectedRoutes>
              <Gallery />{' '}
            </ProtectedRoutes>
          }
        />
        <Route
          path="/deck"
          element={
            <ProtectedRoutes>
              <Deck />{' '}
            </ProtectedRoutes>
          }
        />
        <Route
          path="/review"
          element={
            <ProtectedRoutes>
              <Review />{' '}
            </ProtectedRoutes>
          }
        />
      </Routes>
      <Footer />
    </BaseLayout>
  );
}

export default App;
