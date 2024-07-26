import './style.css';

export const HomePage = () => {
  return (
    <>
      <header>
        <div className="header-row">
          <p>Kpt. Jaroše 2876, 390 03 Tábor</p>
          <p>+420 732 726 631</p>
        </div>
      </header>
      <main>
        <div className="main-content">
          <h1>Gynekologická ordinace</h1>
          <h1>MUDr. Jana Tůmová</h1>
          <p>Připravujeme pro vás novou verzi webu, děkujeme za pochopení.</p>
          <p className="bold">
            Během letních prázdnin je v pondělí ordinační doba od 9:00 do 16:00.
          </p>
          <p className="bold">5. - 16.8. neordinujeme z důvodu dovolené:</p>
          <p>5. - 9.8. zastupuje MUDr. Šmrhová</p>
          <p>12. - 16. 8. zastupuje MUDr. Čmuchová</p>

          <p>
            Naše ordinace nyní používá pro zabezpečenou komunikaci s pacienty
            virtuální sestru Emmy. Emmy nahrazuje email a do velké míry i
            telefon. Usnadní vám přístup k péči i objednání a zároveň šetří
            vzácný čas zdravotnickému personálu.
          </p>
          <p>Přímý vstup do naší ordinace je možný zde:</p>
          <button>
            {' '}
            <a href="https://www.sestraemmy.cz/gyntum">Sestra Emmy</a>
          </button>
        </div>
      </main>
      <footer></footer>
    </>
  );
};
