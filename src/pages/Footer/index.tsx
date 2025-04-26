import { Link } from 'react-router-dom';
import './style.css';

export const Footer = (): JSX.Element => {
  return (
    <>
      <div className="footer container">
        <div>
          <Link to="/privacy">Zásady ochrany osobních údajů</Link>
        </div>
        <p>&copy; 2024 Veronika Sesay. Všechna práva vyhrazena.</p>
      </div>
    </>
  );
};
