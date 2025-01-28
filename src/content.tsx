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
    title: 'Dočasné uzavření ordinace',
    body: (
      <>
        <div>
          <p>
            <strong>
              Z důvodu stěhování bude ordinace od čtvrtka 30. 1. 2025 dočasně
              uzavřena.
            </strong>
            <p>
              Pravděpodobný termín otevření nové ordinace je v polovině února. O
              přesném termínu vás budeme informovat prostřednictvím mailu a sms.
              <p>
                Akutní případy ošetří MUDr. Čmuchová (ordinace z druhé strany{' '}
                <em>Zubatky</em> - Kpt.&nbsp;Jaroše 2876).
              </p>
            </p>
            <p>
              <strong>Děkujeme za pochopení!</strong>
            </p>
          </p>
        </div>
      </>
    ),
    modal: undefined,
    expiryDate: '2025-02-20T23:59:59Z',
  },
  {
    id: 2,
    title: 'Naše ordinace se bude stěhovat!',
    body: (
      <>
        <p>
          S radostí vám oznamujeme, že se naše ordinace bude stěhovat na novou
          adresu, do budovy nově zrekonstruované{' '}
          <strong>
            {' '}
            <em>Klokotky</em>
          </strong>
          .
        </p>
        <p>
          Přesný termín stěhování vám sdělíme, předpokládáný termín je únor
          2025.
        </p>
      </>
    ),
    modal: (
      <>
        <p>
          V zájmu poskytování kvalitní péče a zlepšení komfortu pacientek se
          naše ordinace bude stěhovat na novou adresu:
          <br /> <strong>Kpt. Jaroše 24, 390 03 Tábor.</strong>
        </p>
        <p>
          Nové prostory budou moderní a kvalitně vybavené, což nám umožní
          poskytovat péči na ještě vyšší úrovni.
        </p>
        <p>
          Věříme, že naše stěhování nezpůsobí pacientkám větší problémy. Nová
          lokalita je nedaleko původní ordinace, hned vedle autobusové zastávky{' '}
          <em>Klokoty</em>, k dispozici bude i několik parkovacích míst.
          Návštěvu si navíc můžete zpříjemnit kávou v nově otevřené kavárně nebo
          využitím fitness studia či wellness.
        </p>
      </>
    ),
    expiryDate: '2025-02-28T23:59:59Z',
  },
];
