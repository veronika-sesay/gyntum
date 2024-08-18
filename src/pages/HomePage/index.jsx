import { Outlet } from 'react-router-dom';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <header>
        <div className="header-row">
          <p>Kpt. Jaroše 2876, 390 03 Tábor</p>
          <p>info@gyntum.cz</p>
          <p>+420 732 726 631</p>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
