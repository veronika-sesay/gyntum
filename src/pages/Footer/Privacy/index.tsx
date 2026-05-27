import './style.css';

export const Privacy = (): JSX.Element => {
  return (
    <div className="container privacy">
      <h3>Zásady ochrany osobních údajů</h3>
      <ol>
        <li>
          <h4>Kdo jsme</h4>
          <p>
            Tato webová stránka je provozována společností{' '}
            <em>Ordinace MUDr. Jana Tůmová, IČO 01783840</em>. Ochrana vašich
            osobních údajů je pro nás důležitá, a proto se snažíme zpracovávat
            minimální množství dat v souladu s GDPR (Obecné nařízení o ochraně
            osobních údajů).
          </p>
        </li>
        <li>
          <h4>Jaké údaje zpracováváme?</h4>
          <p>
            Naše webová stránka neshromažďuje žádné osobní údaje a neukládá
            žádné sledovací cookies.
          </p>
        </li>
        <li>
          <h4>Použití souborů cookies</h4>
          <p>
            Na této webové stránce:
            <p>
              ✅ Neukládáme žádné sledovací cookies (např. pro reklamu nebo
              analýzu).
            </p>
            <p>
              ✅ Používáme pouze technické cookies, které jsou nezbytné pro
              správnou funkci stránky.
            </p>
            <p>
              ✅ Google Maps může nastavovat své vlastní cookies pro zobrazení
              mapy – jejich podmínky najdete v zásadách ochrany osobních údajů
              společnosti Google{' '}
              <a href="https://policies.google.com/privacy?hl=cs">
                (odkaz zde)
              </a>
              .
            </p>
          </p>
        </li>
        <li>
          <h4>Sdílení údajů s třetími stranami</h4>
          <p>
            Neprodáváme, neobchodujeme ani jinak neposkytujeme vaše osobní údaje
            třetím stranám. Použití Google Maps na této stránce podléhá zásadám
            společnosti Google.
          </p>
        </li>
        <li>
          <h4>Vaše práva</h4>
          <p>
            Jako uživatel máte právo:
            <p>
              <p>
                ✅ Požádat o informace o tom, jaké údaje o vás uchováváme (pokud
                nějaké jsou).
              </p>
              <p>
                ✅ Požadovat opravu nebo smazání údajů, pokud jsou nesprávné
                nebo zpracovávané neoprávněně.
              </p>
              <p>✅ Omezit zpracování vašich údajů v určitých případech.</p>
            </p>
          </p>
        </li>
        <li>
          <h4>Kontakt</h4>
          <p>
            Pokud máte jakékoli dotazy ohledně ochrany osobních údajů na této
            webové stránce, můžete nás kontaktovat na e-mailu:{' '}
            <a href="mailto:info@gyntum.cz">info@gyntum.cz</a>.
          </p>
        </li>
        <p>Poslední aktualizace: 25. 3. 2025</p>
      </ol>
    </div>
  );
};
