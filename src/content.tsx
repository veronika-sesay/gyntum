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
    title: 'Provoz o květnových svátcích',
    body: (
      <>
        <p>
          O svátcích 1. a 8. 5. 2025 je naše ordinace uzavřena. 9. 5. je taktéž
          uzavřena z důvodu dovolené.
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
    expiryDate: '2025-05-10T23:59:59Z',
  },
  {
    id: 2,
    title: 'Sledujte náš instagram!',
    body: (
      <>
        <img src="../../img/instagram-icon.svg" alt="instagram" />{' '}
        <p>
          Sledujte náš instagram <strong>gynekologie_tumova</strong> a
          získávejte informace o našich aktivitách.
        </p>
      </>
    ),
    modal: undefined,
    expiryDate: '2025-12-31T23:59:59Z',
  },
  {
    id: 3,
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
