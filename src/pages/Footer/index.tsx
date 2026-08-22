import { Link } from "react-router-dom";
import "./style.css";

export const Footer = (): JSX.Element => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <section className="footer__info container">
        <div className="footer__info--address">
          <address>
            <p>MUDr. Jana Tůmová</p>
            <p>IČO: 01783840</p>
            <p>
              Fyzická osoba zapsaná v Živnostenském rejstříku vedeném Městským
              úřadem v Táboře
            </p>
            <p>Sídlo: Pstruhová 435, 391 11, Planá nad Lužnicí - Strkov</p>
            <p>IČZ 39401000 | IČP 39401001</p>
          </address>
        </div>
        <div className="footer__info--links">
          <h3>Užitečné informace</h3>
          <ul>
            <li>
              <Link to="/price">Ceník služeb</Link>
            </li>
            <li>
              <Link to="/smartmedix">SmartMedix</Link>
            </li>
            <li>
              <Link to="/privacy">Zásady ochrany osobních údajů</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="footer__copyright container">
        <div>
          <p>&copy; {currentYear} Gyntum. Všechna práva vyhrazena.</p>
          <p>Vytvořila Veronika Sesay</p>
        </div>
      </section>
    </footer>
  );
};
