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
    title: 'Prázdninová ordinační doba',
    body: (
      <>
        <p>
          Během letních prázdnin končí ordinační doba v pondělí již v 16:00.
        </p>
        {/*         <p>
          Akutní případy v tomto období ošetří MUDr. Čmuchová (ordinace v
          Zubatce, Kpt. Jaroše&nbsp;2876)
        </p> */}
        <p>
          <strong>Děkujeme za pochopení!</strong>
        </p>
      </>
    ),
    modal: undefined,
    expiryDate: '2025-09-05T23:59:59Z',
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
