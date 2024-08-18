import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import './global.css';

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
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
