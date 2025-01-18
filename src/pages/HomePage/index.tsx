import './style.css';
import { News } from '../News';

export const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="main-white intro container">
        <div className="text">
          <h1>Komplexní gynekologická péče pro ženy</h1>
          <p>
            V naší ordinaci se staráme o zdraví žen všech věkových kategorií s
            maximální odborností a důrazem na individuální přístup. Naším cílem
            je poskytovat moderní a efektivní péči na nejvyšší úrovni, která
            odpovídá potřebám každé pacientky.
          </p>
          <p>
            Pro zabezpečenou komunikaci s pacientkami používáme{' '}
            <strong>virtuální sestru Emmy</strong>. Emmy nahrazuje email a do
            velké míry i telefon. Usnadní vám přístup k péči i objednání a
            zároveň šetří vzácný čas zdravotnickému personálu.
          </p>
        </div>
        <div className="photo">
          <img src="../../img/main-image-nobg.png" alt="foto ženy" />
        </div>
      </div>

      <div className="main-blue operation container">
        <div id="hours" className="hours">
          <h2>Ordinační hodiny</h2>
          <div className="row">
            <h4>Pondělí</h4>
            <p>10:00 - 12:30</p>
            <p>13:00 - 18:00</p>
          </div>
          <div className="row">
            <h4>Úterý</h4>
            <p>8:00 - 12:30</p>
            <p>13:00 - 16:00</p>
          </div>
          <div className="row">
            <h4>Středa</h4>
            <p>8:00 - 13:00</p>
            <p>---</p>
          </div>
          <div className="row">
            <h4>Čtvrtek</h4>
            <p>
              7:00 - 12:00 <br />
              ADMINISTRATIVA
            </p>
            <p>---</p>
          </div>
          <div className="row row--underline">
            <h4>Pátek</h4>
            <p>8:00 - 12:30</p>
            <p>13:00 - 14:00</p>
          </div>
        </div>
        <div id="news" className="news">
          <h2>Aktuality</h2>
          <News />
        </div>
      </div>

      {/* <div className="button-up">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Nahoru
        </button>
      </div> */}
    </>
  );
};
