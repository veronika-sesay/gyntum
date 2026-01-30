import { useEffect } from 'react';
import './style.css';
import { News } from '../News';
import { Map } from '../Map';

export const HomePage = (): JSX.Element => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Trigger a bit before element fully enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll(
      '.text, .photo, .hours, .news, .insurance, h1, h2',
    );
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="main-white flex container intro">
        <div className="text">
          <h1>Komplexní gynekologická péče pro ženy</h1>
          <p>
            V naší ordinaci se staráme o zdraví žen všech věkových kategorií s
            maximální odborností a důrazem na individuální přístup. Naším cílem
            je poskytovat moderní a efektivní péči na nejvyšší úrovni, která
            odpovídá potřebám každé pacientky.
          </p>
          <p>
            Pro zabezpečenou komunikaci s pacientkami používáme systém{' '}
            <strong>SmartMEDIX</strong>. Tento systém nahrazuje email a do velké
            míry i telefon. Usnadní vám přístup k péči i objednání a zároveň
            šetří vzácný čas zdravotnickému personálu.
          </p>
        </div>
        <div className="photo">
          <img src="../../img/main-image-nobg.png" alt="foto ženy" />
        </div>
      </div>
      <div className="main-blue flex container operation">
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
              POUZE PRO OBJEDNANÉ PACIENTKY
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
      <div id="location" className="main-white container location">
        <h2>Kde nás najdete?</h2>
        <div className="text">
          <p>
            Ordinace se nachází v nově zrekonstruované budově{' '}
            <a href="https://klokotkatabor.cz/">Klokotky</a>. Vchod do budovy je
            vedle kavárny, ordinace se nachází v 2. patře, v budově je výtah.
          </p>
          <p>Parkování je možné před budovou.</p>
          <p>
            Nejbližší zastávka MHD je <em>Klokoty</em> (cca 100m).
          </p>
        </div>
        <Map />
      </div>
      <div className="main-blue container insurance">
        <h2>Smluvní pojišťovny</h2>
        <div>
          <p>Jsme smluvními partnery těchto zdravotních pojišťoven v ČR:</p>
          <ul>
            <li>Všeobecná zdravotní pojišťovna (VZP)</li>
            <li>Vojenská zdravotní pojišťovna ČR (VoZP)</li>
            <li>Česká průmyslová zdravotní pojišťovna (ČPZP)</li>
            <li>Oborová zdravotní pojišťovna (OZP)</li>
            <li>Zdravotní pojišťovna Ministerstva vnitra ČR (ZPMV ČR)</li>
          </ul>
        </div>
        <div className="logo-container flex">
          <img src="../../img/111.png" alt="VZP" />
          <img src="../../img/201.png" alt="VoZP" />
          <img src="../../img/205.png" alt="ČPZP" />
          <img src="../../img/207.png" alt="OZP" />
          <img src="../../img/211.png" alt="ZPMV" />
        </div>
        <h3>V současné době stále přijímáme nové pacientky.</h3>
      </div>
      {/* <div className="button-up">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Nahoru
        </button>
      </div> */}
    </>
  );
};
