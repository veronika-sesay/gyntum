import './style.css';
import { useState } from 'react';

export const PlasmaJett = (): JSX.Element => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleAccordion = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container">
      <h1>Jett Plasma</h1>
      <div className="plasma-jett">
        <div className="plasma-jett__text--question">
          <p>Trápí vás inkontinence nebo chronické záněty močových cest?</p>
          <p>
            Trápí vás poporodní komplikace, ochablost vulvy, uvolnění poševní
            sliznice, bolestivost jizev?
          </p>
          <p>Trápí vás atrofie pochvy nebo nedostatečná vlhkost?</p>
        </div>
        <div className="plasma-jett flex">
          <div className="plasma-jett__img">
            <img src="../../img/plasma-jett.png" alt="plasma jett přístroj" />
          </div>
          <div className="plasma-jett__text">
            <div className="heading-box">
              <h3>
                Vaše zdravotní komplikace vám v naší ordinaci ošetří nový
                lékařský přístroj JETT PLASMA FOR HER II.
              </h3>
            </div>
            <p>
              Jett Plasma for Her II je certifikovaný zdravotnický prostředek
              (CE1023 – Institut pro testování a certifikaci) určený k
              rejuvenilizaci tkání ve vulvovaginální oblasti.
            </p>
            <p>
              Úkon se provádí ambulantně, třikrát za sebou s odstupem několika
              dnů dle určení lékařky. Jedno ošetření zabere cca 30 minut a je
              nebolestivé. Po ošetření se můžete věnovat své bežné činnosti.
            </p>
            <p>
              <strong>Výhody ošetření:</strong>
              <ul>
                <li>bezpečné, pohodlné, bezbolestné</li>
                <li>krátká doba ošetření</li>
                <li>nechirurgické</li>
                <li>není nutná anestezie</li>
                <li>žádné hormony</li>
                <li>žádné jizvy</li>
                <li>dobré výsledky již po prvním vyšetření</li>
                <li>dlouhodobý efekt</li>
              </ul>
            </p>
            <p>
              Výsledky se dostaví postupně již po několika dnech a zdravotní
              problémy odeznívají s rostoucím efektem.
            </p>
          </div>
        </div>
      </div>
      <div className="faq">
        <h2>Často kladené otázky</h2>
        <div className="faq__item flex">
          <h3>Jak to funguje?</h3>
          <div className="arrow">
            <img
              className="arrow"
              src="../../img/arrow-down-icon.svg"
              alt="šipka - otevřít"
              onClick={() => toggleAccordion('how-it-works')}
            />
          </div>
        </div>
        <div
          className={
            openSection === 'how-it-works' ? 'how-it-works' : 'display-none'
          }
        >
          <p>
            Účinek přístroje je způsoben kombinací tepla, depolarizací buněčné
            membrány a nízkoprahové reverzibilní extrapolace. Působení
            stejnosměrného proudu generuje teplo, které aktivuje tvorbu nového
            kolagenního vaziva, vytváří se pevnější a elastičtější vazivová
            struktura a dochází k rejuvenilizaci tkáně.{' '}
          </p>
        </div>
        <div className="faq__item flex">
          <h3>Pro koho je přístroj určen?</h3>
          <div className="arrow">
            <img
              className="arrow"
              src="../../img/arrow-down-icon.svg"
              alt="šipka - otevřít"
              onClick={() => toggleAccordion('indication')}
            />
          </div>
        </div>
        <div
          className={
            openSection === 'indication' ? 'indication' : 'display-none'
          }
        >
          <p>
            Ošetření je indikováno u všech žen, které mají potíže s tzv.
            vulvovaginální laxitou (ochabnutí a ztráta elasticity tkání v
            oblasti vnějších a vnitřních genitálií) a s ní spojenými problémy
            jako např.:
          </p>
          <ul>
            <li>opakované infekce močových cest</li>
            <li>inkontinence mírnějšího stupně</li>
            <li>
              zhoršení sexuálního života kvůli suchosti a podrážděnosti pochvy
            </li>
            <li>
              snížená těsnost, elasticita a citlivost pochvy (zejména po
              porodu), bolestivost jizvy po porodu
            </li>
            <li>nedostatečná vaginální vlhkost</li>
            <li>
              dyskomfort v oblasti pochvy nezánětlivé etiologie (pálení a
              svědění)
            </li>
          </ul>
        </div>
        <div className="faq__item flex">
          <h3>Má ošetření nejaké kontraindikace?</h3>
          <div className="arrow">
            <img
              className="arrow"
              src="../../img/arrow-down-icon.svg"
              alt="šipka - otevřít"
              onClick={() => toggleAccordion('contraindication')}
            />
          </div>
        </div>
        <div
          className={
            openSection === 'contraindication'
              ? 'contraindication'
              : 'display-none'
          }
        >
          <p>
            Ano, vaginální i zevní ošetření nelze provést v těchto případech:
          </p>
          <ul>
            <li>
              pacientka má kardiostimulátor, či jiný implantovaný elektrický
              přístroj
            </li>
            <li>
              při těhotenství, menstruaci či vaginálním krvácení nejasné příčiny
            </li>
            <li>
              při akutním infekčním či onkologickém onemocnění vulvovaginální
              oblasti
            </li>
            <li>
              při epilepsii či přítomnosti kovových kloubních náhrad v oblasti
              ošetření
            </li>
          </ul>
        </div>
        <div className="faq__item flex">
          <h3>Kolik ošetření stojí?</h3>
          <div className="arrow">
            <img
              className="arrow"
              src="../../img/arrow-down-icon.svg"
              alt="šipka - otevřít"
              onClick={() => toggleAccordion('cost')}
            />
          </div>
        </div>
        <div className={openSection === 'cost' ? 'cost' : 'display-none'}>
          <p>
            Ošetření není hrazeno z veřejného zdravotního pojištění. Cena
            jednoho zákroku je 2 500 Kč. Za doporučený cyklus tří ošetření tedy
            zaplatíte 7 000 Kč.
          </p>
          <p>
            Cena je uvedena k datu 1. 9. 2025 a může se měnit. Pro více
            informací nás neváhejte kontaktovat přímo v ordinaci.
          </p>
        </div>
        <div className="faq__item flex">
          <h3>
            Musím být vaší registrovanou pacientkou pro poskytnutí ošetření?
          </h3>
          <div className="arrow">
            <img
              className="arrow"
              src="../../img/arrow-down-icon.svg"
              alt="šipka - otevřít"
              onClick={() => toggleAccordion('patient')}
            />
          </div>
        </div>
        <div className={openSection === 'patient' ? 'patient' : 'display-none'}>
          <p>
            Ne, ošetření je možno provést i klientkám jiných ambulancí, bez
            nutnosti přeregistrovat se.
          </p>
        </div>
      </div>
    </div>
  );
};
