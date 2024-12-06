import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
    if (navOpen) closeNav();
  };

  return (
    <>
      <div className="top-row container">
        <div className="top-row__item">
          <img className="icon" src="../img/address.svg" alt="address icon" />
          <a href="">Kpt. Jaroše 2876, 390&nbsp;03&nbsp;Tábor</a>
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
      <div className="menu container">
        <div className="menu-desktop">
          <Link to="/home">
            <img className="logo" src="../img/logo-image.svg" alt="logo" />
          </Link>
          <nav className="nav">
            <a href="/home/#news" onClick={(e) => scrollToSection(e, 'news')}>
              Aktuality
            </a>
            <a href="/home/#hours" onClick={(e) => scrollToSection(e, 'hours')}>
              Ordinační hodiny
            </a>
            {/* <Link to="/about">O nás</Link> */}
            {/* <Link to="/contacts">Kontakty</Link> */}
            <div className="emmy">
              {' '}
              <Link to="https://www.sestraemmy.cz/gyntum">
                Virtuální sestra Emmy
              </Link>
            </div>
          </nav>
        </div>

        <div className="menu-mobile">
          <Link to="/home">
            <img className="logo" src="../img/logo-image.svg" alt="logo" />
          </Link>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className={navOpen ? 'nav-btn--closed' : 'nav-btn'}
          ></button>
          <div className={navOpen ? 'nav-mobile' : 'menu-mobile--closed'}>
            <a href="/home/#news" onClick={(e) => scrollToSection(e, 'hours')}>
              Aktuality
            </a>
            <a href="/home/#hours" onClick={(e) => scrollToSection(e, 'hours')}>
              Ordinační hodiny
            </a>
            {/* <Link onClick={closeNav} to="/about">
              O nás
            </Link>
            <Link onClick={closeNav} to="/contacts">
              Kontakty
            </Link> */}
            <a
              className="emmy"
              href="https://www.sestraemmy.cz/gyntum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Virtuální sestra Emmy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
