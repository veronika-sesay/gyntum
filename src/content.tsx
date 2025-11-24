import { Link } from 'react-router-dom';

export interface NewsItem {
  id: number;
  title: string;
  body: JSX.Element;
  modal: JSX.Element | undefined;
  expiryDate: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    title: 'Nový systém objednávání',
    body: (
      <div>
        <p>
          Od 1. 11. 2025 jsme přešli na nový systém objednávání SmartMEDIX,
          jedná se o jednoduchý a bezpečný způsob komunikace s ordinací (místo
          e-mailu a telefonu), vše na jednom místě, dostupné i mimo naše
          ordinační hodiny.
        </p>
        <p>
          Pro přihlášení do tohoto systému a využití všech on-line služeb{' '}
          <strong>je nutné mít v ordinaci uložený kontaktní e-mail. </strong>{' '}
          Prosíme pacientky, které chtějí využít on-line služby a nemají u nás
          dosud uložený e-mail o jeho urychlené doplnění.
        </p>
         <p><strong>Používejte prosím webovou přihlašovací stránku (proklik z tlačítka "Objednání online"), aplikace SmartMEDIX zatím není podporována!</strong></p>
        <p>Pro více informací klikněte níže.</p>
      </div>
    ),
    modal: (
      <>
        <div>
          <div>
            <h3>Jak se přihlásit do SmartMEDIX?</h3>
            <ul>
              <li><strong>Používejte prosím webovou přihlašovací stránku (proklik z tlačítka "Objednání online"), aplikace SmartMEDIX zatím není podporována!</strong></li>
              <li>
                Při prvním přístupu do systému zvolte <u>"Jsem tu poprvé"</u>,
                vyplníte svůj e-mail a klikněte <u>"Založit účet"</u>. Systém
                vás doprovodí dalším postupem. Tím si vytvoříte vstupní
                přihlašovací údaje.
              </li>
              <li>
                Při každém dalším vstupu už zadáváte svůj e-mail a zvolené heslo
                rovnou do přihlašovací obrazovky.
              </li>
            </ul>
          </div>
          <div>
            <h3>Jaké služby SmartMEDIX nabízí?</h3>
            <ul>
              <li>
                Zaslání žádosti o recept – vyplníte příslušný formulář, uvedete
                název a obvyklé dávkování, požadované léky prosím zadávejte
                pokud možno do jednoho formuláře.
              </li>
              <li>
                Zadání objednávky k návštěvě lékařky – máte k dispozici kalendář
                s přehledem termínů, vyplníte formulář a po odeslání a
                zpracování u lékařky vám systém zašle zpětnou informaci o
                uvedené objednávce na váš e-mail,
                <ul>
                  <li>
                    Při objednávání prosím respektujte definované typy vyšetření
                    – viz výběr v objednávkovém formuláři. Nevhodně zvolené
                    objednávky mohou být ze strany ordinace bez náhrady zrušeny.
                  </li>
                  <li>Do důvodu návštěvy případně upřesněte vaše obtíže.</li>
                  <li>
                    Takto zadanou objednávku si můžete nejpozději den předem
                    smazat.
                  </li>{' '}
                </ul>
              </li>
              <li>
                Přehled termínů objednávek – můžete sledovat přehled termínů
                svých budoucích návštěv v ordinaci.
              </li>
              <li>
                Zaslání zprávy – můžete lékařce zaslat informaci k probíhající
                léčbě nebo dotaz, omluvu z plánované návštěvy.
              </li>
              <li>
                Zaslání dokumentu k založení do karty – můžete do ordinace
                zaslat dokument formátu pdf nebo obrázek (např. zprávu z
                vyšetření u specialisty apod.).
              </li>
              <li>Lékařka může rychlou a krátkou informaci zaslat vám.</li>
              <li>
                Přehled termínů provedených očkování a preventivních prohlídek,
                případně termínů pro příští návštěvu.
              </li>
              <li>
                Můžete sledovat způsob vyřízení svých požadavků, o vyřízení jste
                informovány e-mailem.
              </li>
            </ul>
          </div>
          <div>
            <h3>Jak zrušit objednávku?</h3>
            <ul>
              <li>
                Pokud se nemůžete dostavit na plánovanou návštěvu, prosím zrušte
                si svou objednávku nejpozději den předem samy v systému
                SmartMEDIX.
              </li>
            </ul>
          </div>
          <div>
            <h3>Jak postupovat pokud ještě nejsem registrovanou pacientkou?</h3>
            <ul>
              <li>
                U nás neregistrované pacientky prosíme, aby se na registraci a
                objednání domlouvaly telefonicky u sestry.
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
    expiryDate: '2026-02-28T23:59:59Z',
  },
  {
    id: 2,
    title: '3. - 7. 11. 2025 neordinujeme',
    body: (
      <>
        <p>Z důvodu dovolené neordinujeme v období 3. - 7. 11. 2025.</p>
        <p>
          S akutními případy prosím navštivte buď{' '}
          <a href="https://gynportabor.cz/">MUDr. Čmuchovou</a> (ordinace v
          Zubatce, Kpt. Jaroše&nbsp;2876) nebo Gynekologicko-porodnické oddělení
          Nemocnice Tábor (ambulance tel.:{' '}
          <a href="tel:381605362">381&nbsp;605&nbsp;362</a>,{' '}
          <a href="tel:381605363">381&nbsp;605&nbsp;363</a>).
        </p>
        <p>
          <strong>Děkujeme za pochopení!</strong>
        </p>
      </>
    ),
    modal: undefined,
    expiryDate: '2025-11-07T23:59:59Z',
  },
  {
    id: 3,
    title: 'Sledujte náš instagram!',
    body: (
      <>
        <img src="../../img/instagram-icon.svg" alt="instagram" />{' '}
        <p>
          Sledujte náš instagram{' '}
          <strong>
            <a href="https://www.instagram.com/gynekologie_tumova">
              gynekologie_tumova
            </a>
          </strong>{' '}
          a získávejte informace o našich aktivitách.
        </p>
      </>
    ),
    modal: undefined,
    expiryDate: '2025-12-31T23:59:59Z',
  },
  {
    id: 4,
    title:
      'Jett Plasma - revoluční ošetření pro ženy dostupné v naší ordinaci!',
    body: (
      <>
        <p>
          Dovolujeme si Vám nabídnout ošetření přístrojem Jett Plasma for Her
          II. Jedná se o certifikovaný zdravotnický prostředek určený k omlazení
          tkání ve vulvovaginální oblasti.{' '}
        </p>
        <p>
          Více informací{' '}
          <Link to="/plasmajett" onClick={() => window.scrollTo(0, 0)}>
            zde.
          </Link>
        </p>
      </>
    ),
    modal: undefined,
    expiryDate: '2026-12-31T23:59:59Z',
  },

  {
    id: 5,
    title: 'Naše ordinace je přestěhována!',
    body: (
      <>
        <p>
          Stěhování je již dokončené a nově sídlíme na adrese
          <strong> Kpt. Jaroše&nbsp;24, 390&nbsp;03</strong>. Vchod do budovy je
          vedle kavárny, ordinace se nachází v 2. patře.
        </p>
      </>
    ),
    modal: undefined,
    expiryDate: '2025-04-30T23:59:59Z',
  },
];
