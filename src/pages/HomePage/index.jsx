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
        <div className="main-content">
          <h1>Gynekologická ordinace</h1>
          <h1>MUDr. Jana Tůmová</h1>
          <p>Připravujeme pro vás novou verzi webu, děkujeme za pochopení.</p>
          <p>
            Naše ordinace nyní používá pro zabezpečenou komunikaci s pacienty
            virtuální sestru Emmy. Emmy nahrazuje email a do velké míry i
            telefon. Usnadní vám přístup k péči i objednání a zároveň šetří
            vzácný čas zdravotnickému personálu.
          </p>
          <p>
            <strong>Přímý vstup do naší ordinace je možný zde:</strong>
          </p>
          <a className="button-link" href="https://www.sestraemmy.cz/gyntum">
            Sestra Emmy
          </a>
          <h2>Ordinační hodiny</h2>
          <div className="hours">
            <div className="table">
              <div className="row">
                <p>
                  <strong>Pondělí</strong>
                </p>
                <p>10:00 - 12:30</p>
                <p>13:00 - 18:00</p>
              </div>
              <div className="row">
                <p>
                  <strong>Úterý</strong>
                </p>
                <p>8:00 - 12:30</p>
                <p>13:00 - 16:00</p>
              </div>
              <div className="row">
                <p>
                  <strong>Středa</strong>
                </p>
                <p>8:00 - 13:00</p>
                <p>---</p>
              </div>
              <div className="row">
                <p>
                  <strong>Čtvrtek</strong>
                </p>
                <p>
                  7:00 - 12:00 <br />
                  ADMINISTRATIVA
                </p>
                <p>---</p>
              </div>
              <div className="row">
                <p>
                  <strong>Pátek</strong>
                </p>
                <p>8:00 - 12:30</p>
                <p>13:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};
