import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <div className="menu-container">
        <Link to="/home">
          <img src="../img/logo.svg" alt="logo" className="logo" />
        </Link>
        <nav className="nav-container">
          <Link to="/news">Aktuality</Link>
          <Link to="/about">O nás</Link>
          <Link to="/contacts">Kontakty</Link>
          <button className="emmy">
            {' '}
            <Link to="/">Virtuální sestra Emmy</Link>
          </button>
        </nav>
      </div>

      <div className="menu-mobile-container">
        <Link to="/home">
          <img src="../img/logo.svg" alt="logo" className="logo" />
        </Link>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className={navOpen ? 'nav-btn--closed' : 'nav-btn'}
        ></button>
        <div
          className={navOpen ? 'nav-mobile' : 'menu-mobile-container--closed'}
        >
          <Link onClick={closeNav} to="/news">
            Aktuality
          </Link>
          <Link onClick={closeNav} to="/about">
            O nás
          </Link>
          <Link onClick={closeNav} to="/contacts">
            Kontakty
          </Link>
          <button className="emmy">
            {' '}
            <Link to="/">Virtuální sestra Emmy</Link>
          </button>
        </div>
      </div>
    </>
  );
};
