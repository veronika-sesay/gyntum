import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <div className="top-row">
        <div className="top-row-container">
          <div className="top-row__item">
            <img className="icon" src="../img/address.svg" alt="address icon" />
            <p>Kpt. Jaroše 2876, 390&nbsp;03&nbsp;Tábor</p>
          </div>
          <div className="top-row__item">
            <img className="icon" src="../img/phone.svg" alt="phone icon" />
            <a href="tel:+420732726631">+420 732 726 631</a>
          </div>
          <div className="top-row__item">
            <img className="icon" src="../img/email.svg" alt="email icon" />
            <a href="mailto:info@gyntum.cz">info@gyntum.cz</a>
          </div>
        </div>
      </div>
      <div className="menu-container">
        <Link to="/home">
          <video autoPlay muted>
            <source src="../img/gyntum-logo.mp4" type="video/mp4" />
          </video>
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
          <video src="../img/logo.gif" alt="logo" className="logo" />
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
