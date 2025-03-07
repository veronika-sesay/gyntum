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
    expiryDate: '2025-03-31T23:59:59Z',
  },
  {
    id: 2,
    title: 'Provoz o jarních prázdninách',
    body: (
      <>
        <p>
          Během jarních prázdnin <strong>(10.-14. 3.) a 17. 3.</strong> je
          ordinace uzavřena z důvodu dovolené.{' '}
        </p>
        <p>
          Akutní případy v tomto období ošetří MUDr. Čmuchová (ordinace v
          Zubatce, Kpt. Jaroše&nbsp;2876)
        </p>
        <p>
          <strong>Děkujeme za pochopení!</strong>
        </p>
      </>
    ),
    modal: undefined,
    expiryDate: '2025-03-17T23:59:59Z',
  },
];
