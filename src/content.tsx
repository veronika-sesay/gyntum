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
    title: '30. 5. 2025 neordinujeme',
    body: (
      <>
        <p>
          Dne 30. 5. 2025 neordinujeme z důvodu účasti na lékařském kongresu. Sestřička bude přítomna pro případné administrativní úkony.
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
    expiryDate: '2025-05-30T23:59:59Z',
  },
   {
    id: 4,
    title: '13. 6. 2025 neordinujeme',
    body: (
      <>
        <p>
          Dne 13. 6. 2025 neordinujeme z důvodu dovolené. Sestřička bude přítomna pro případné administrativní úkony.
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
    expiryDate: '2025-06-13T23:59:59Z',
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
