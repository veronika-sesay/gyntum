import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navigation } from './pages/Navigation';
import './global.css';
import { HomePage } from './pages/HomePage';
import { Footer } from './pages/Footer';
import { About } from './pages/About';

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '3rem' }}>
              <p>Tady není vůbec nic!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
