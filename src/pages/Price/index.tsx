import './style.css';

export const Price = (): JSX.Element => {
  return (
    <div className="main-white price container">
      <h2>Ceník služeb</h2>
      <p>
        Ceny jsou uvedeny v Kč včetně DPH. Platba je možná pouze v hotovosti.
      </p>
      <div
        className="price-container"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}
      >
        <div className="price-section">
          <h3>Výkony spojené s preventivní prohlídkou</h3>
          <div className="price-row">
            <span className="price-label">
              Poplatek za jednorázové vyšetřovací zrcadlo
            </span>
            <span className="price-value">50,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Použití měřícího přístroje Corazon (výška, váha, krevní tlak)
            </span>
            <span className="price-value">10,-</span>
          </div>
        </div>
        <div className="price-section">
          <h3>Administrativní úkony</h3>
          <div className="price-row">
            <span className="price-label">
              Potvrzení na žádost pacientky (pro úřady apod.)
            </span>
            <span className="price-value">300,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Vyplnění dokumentů ke komerční pojistné události
            </span>
            <span className="price-value">300,-</span>
          </div>
        </div>
        <div className="price-section">
          <h3>Antikoncepce</h3>
          <div className="price-row">
            <span className="price-label">
              Nitroděložní systém Mirena vč. konzultace a zavedení
            </span>
            <span className="price-value">7 000,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Nitroděložní systém Levosert vč. konzultace a zavedení
            </span>
            <span className="price-value">7 000,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Nitroděložní systém Kyleena vč. konzultace a zavedení
            </span>
            <span className="price-value">6 500,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Nitroděložní systém Jaydess vč. konzultace a zavedení
            </span>
            <span className="price-value">5 500,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Nitroděložní tělísko s kovem dle typu vč. konzultace a zavedení
            </span>
            <span className="price-value">2 500 - 4 000,- dle typu</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Poplatek za aplikaci antikoncepční injekce Depo-Provera, Sayana
            </span>
            <span className="price-value">150,-</span>
          </div>
        </div>
        <div className="price-section">
          <h3>Gravidita</h3>
          <div className="price-row">
            <span className="price-label">
              Ultrazvukové vyšetření na vlastní žádost mimo vyšetření hrazená ze
              zdr. pojištění
            </span>
            <span className="price-value">500,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Čipová karta na měření přístrojem Corazon + zrcadla (10x)
            </span>
            <span className="price-value">350,- (+100,- záloha)</span>
          </div>
          <div className="price-row">
            <span className="price-label">Vratná záloha na čipovou kartu</span>
            <span className="price-value">100,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Podrobný ultrazvuk ve 12tt včetně nahrávky na USB
            </span>
            <span className="price-value">1 000,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Podrobná morfologie plodu ve 20tt
            </span>
            <span className="price-value">1 200,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Screening růstové restrikce ve 36tt
            </span>
            <span className="price-value">600,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Foto z ultrazvukového vyšetření 2D
            </span>
            <span className="price-value">50,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Foto z ultrazvukového vyšetření 2D – pohlednice
            </span>
            <span className="price-value">100,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Potvrzení těhotenství před žádostí o přerušení gravidity (sepsání
              žádosti vč. ultrazvukového vyšetření, odběru krve a kontrolního
              vyšetření po výkonu)
            </span>
            <span className="price-value">1 100,-</span>
          </div>
        </div>
        <div className="price-section">
          <h3>Vakcinace</h3>
          <div className="price-row">
            <span className="price-label">
              Vakcína proti HPV virům Cervarix
            </span>
            <span className="price-value">3 000,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Vakcína proti HPV virům Gardasil 9
            </span>
            <span className="price-value">3 900,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              Aplikace vakcíny proti HPV virům
            </span>
            <span className="price-value">200,-</span>
          </div>
        </div>
        <div className="price-section">
          <h3>Jett Plasma</h3>
          <div className="price-row">
            <span className="price-label">
              Ošetření přístrojem Jett Plasma for Her II. (30 min)
            </span>
            <span className="price-value">2 500,-</span>
          </div>
        </div>
        <div className="price-section">
          <h3>Ostatní</h3>
          <div className="price-row">
            <span className="price-label">
              Ultrazvukové vyšetření na vlastní žádost mimo těhotenství
            </span>
            <span className="price-value">500,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">
              LBC cytologie, odběrová nádoba na cytologii do tekutého média
              (Thin Prep Test)
            </span>
            <span className="price-value">600,-</span>
          </div>
          <div className="price-row">
            <span className="price-label">Detekce HR HPV</span>
            <span className="price-value">1 200,-</span>
          </div>
        </div>
      </div>
    </div>
  );
};
