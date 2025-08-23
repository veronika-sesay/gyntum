import './style.css';

export const Price = (): JSX.Element => {
  return (
    <div className="container price">
      <h2>Ceník služeb</h2>
      <p>Ceny jsou uvedeny včetně DPH. Platba je možná pouze v hotovosti.</p>
      <ul>
        <li>
          <h4>První návštěva</h4>
          <p>1 000 Kč</p>
        </li>
      </ul>
    </div>
  );
};
