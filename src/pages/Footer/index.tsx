import { Link } from 'react-router-dom';
import './style.css';

export const Footer = (): JSX.Element => {
  return (
    <>
      <div className="footer">
        <div className="footer__links container">
          <Link to="/privacy">Zásady ochrany osobních údajů</Link>
          <Link to="/price">Ceník služeb</Link>
        </div>
        <p className="footer__copyright">
          &copy; 2025 Veronika Sesay. Všechna práva vyhrazena.
        </p>
      </div>
    </>
  );
};
