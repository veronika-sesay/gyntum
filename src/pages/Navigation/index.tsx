import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './style.css';

export const Navigation = (): JSX.Element => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const closeNav: () => void = () => {
    setNavOpen(false);
  };

  return (
    <>
      <div className="top-row container">
        <div className="top-row__item">
          <img className="icon" src="../img/address.svg" alt="address icon" />
          <HashLink to="/#location" smooth>
            Kpt. Jaroše 24, 390&nbsp;03&nbsp;Tábor
          </HashLink>
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
            <HashLink to="/#news" smooth>
              Aktuality
            </HashLink>
            <HashLink to="/#hours" smooth>
              Ordinační hodiny
            </HashLink>
            {/* <Link to="/about">O nás</Link> */}
            {/* <Link to="/contacts">Kontakty</Link> */}
            <Link to="/services">Služby</Link>
            <div className="emmy">
              {' '}
              <a
                href="https://www.sestraemmy.cz/gyntum"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtuální sestra Emmy
              </a>
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
            <HashLink to="/#news" smooth onClick={closeNav}>
              Aktuality
            </HashLink>
            <HashLink to="/#hours" smooth onClick={closeNav}>
              Ordinační hodiny
            </HashLink>
            <Link to="/services" onClick={closeNav}>
              Služby
            </Link>
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
