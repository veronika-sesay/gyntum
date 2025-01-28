import { useState } from 'react';
import './style.css';

export const Services = (): JSX.Element => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleAccordion = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="main-white services container">
        <div className="item-text center">
          Naše gynekologická ordinace nabízí moderní a komplexní péči založenou
          na nejnovějších poznatcích medicíny. Klientky u nás mohou očekávat
          profesionální přístup, špičkové technologie a individuální péči.
          Neustále se vzděláváme a sledujeme nejnovější trendy, abychom vám
          mohli poskytnout to nejlepší v oblasti prevence, diagnostiky i léčby.
          Naším cílem je vaše zdraví, spokojenost a pohodlí.
        </div>
        <div className="care">
          <div className="care-items">
            <div className="main-blue item-img">
              <img src="../../img/doctor-hand.svg" alt="obrázek doktora" />
            </div>
            <div className="item-text">
              {' '}
              <h2>Gynekologická péče</h2>
              <div className="arrow">
                <img
                  className="arrow"
                  src="../../img/arrow-down-icon.svg"
                  alt="šipka - otevřít"
                  onClick={() => toggleAccordion('gynekologicka-pece')}
                />
              </div>
              <div
                className={
                  openSection === 'gynekologicka-pece'
                    ? 'item-text--displayed'
                    : 'display-none'
                }
              >
                <ul>
                  <li>
                    <strong>Preventivní gynekologické prohlídky:</strong>
                    pravidelná péče o vaše zdraví a prevence onemocnění.
                  </li>
                  <li>
                    <strong>Prevence karcinomu děložního hrdla:</strong>{' '}
                    cytologie a kolposkopie pro včasnou detekci.
                  </li>
                  <li>
                    <strong>Liquid Based Cytology (LBC):</strong> moderní metoda
                    odběru buněk do tekutého média pro přesnější diagnostiku než
                    při klasické cytologii.
                  </li>
                  <li>
                    <strong>HPV testace a očkování:</strong> screening na
                    přítomnost HPV virů a možnost očkování pro ochranu proti
                    karcinomu děložního hrdla.
                  </li>
                  <li>
                    <strong>Diagnostika a léčba gynekologických potíží:</strong>{' '}
                    řešení problémů jako jsou záněty, endometrióza, myomy nebo
                    nepravidelnosti cyklu.
                  </li>
                  <li>
                    <strong>Léčba inkontinence:</strong> diagnostika a terapie,
                    včetně nadstandardního ošetření pomocí Plasma Jett.
                  </li>
                  <li>
                    <strong>Antikoncepce:</strong> konzultace a dohled nad
                    užíváním, možnost zavedení hormonálního i nehormonálního
                    nitroděložního tělíska.
                  </li>
                  <li>
                    <strong>Menopauzální péče:</strong> diagnostika a řešení
                    potíží spojených s přechodem.
                  </li>
                  <li>
                    <strong>Podpora při neplodnosti:</strong> hormonální profil,
                    ultrazvukové sledování ovulace (folikulometrie), stimulace
                    ovulace, žádanka na spermiogram pro partnera a spolupráce s
                    centry IVF.
                  </li>
                  <li>
                    <strong>Chirurgické zákroky:</strong> řešení drobnějších
                    problémů v lokální anestezii pro maximální komfort
                    pacientek.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="care-items">
            <div className="main-blue item-img">
              <img src="../../img/pregnant-woman.svg" alt="těhotná žena" />
            </div>
            <div className="item-text">
              <h2>Péče o těhotné</h2>
              <div className="arrow">
                <img
                  className="arrow"
                  src="../../img/arrow-down-icon.svg"
                  alt="šipka - otevřít"
                  onClick={() => toggleAccordion('pece-o-tehotne')}
                />
              </div>
              <div
                className={
                  openSection === 'pece-o-tehotne'
                    ? 'item-text--displayed'
                    : 'display-none'
                }
              >
                <ul>
                  <li>
                    <strong>Diagnostika a péče v těhotenství:</strong> odborný
                    přístup dle doporučených postupů České gynekologické
                    společnosti.
                  </li>
                  <li>
                    <strong>Ultrazvuková vyšetření:</strong> pravidelné kontroly
                    pro zajištění zdravého průběhu těhotenství.
                  </li>
                  <li>
                    <strong>Expertní ultrazvuk:</strong> ve spolupráci s Centrem
                    genetiky v Českých Budějovicích možnost specializovaných
                    vyšetření, zahrnujících detailní morfologii plodu, screening
                    vrozených vad a hodnocení růstu a vývoje plodu.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="care-items">
            <div className="main-blue item-img">
              <img src="../../img/plasma-jett.png" alt="plasma jett přístroj" />
            </div>
            <div className="item-text">
              <h2>Nadstandardní služby</h2>
              <div className="arrow">
                <img
                  className="arrow"
                  src="../../img/arrow-down-icon.svg"
                  alt="šipka - otevřít"
                  onClick={() => toggleAccordion('nadstandardni-sluzby')}
                />
              </div>
              <div
                className={
                  openSection === 'nadstandardni-sluzby'
                    ? 'item-text--displayed'
                    : 'display-none'
                }
              >
                <ul>
                  <li>
                    <strong>Plasma Jett:</strong> moderní technologie, která
                    využívá plazmové energie k ošetření gynekologických potíží a
                    zlepšení kvality života.
                    {/* Více informací zde. */}
                  </li>
                  <li>
                    <strong>Testování skrytých genetických vad:</strong> ve
                    spolupráci se společností LonGeneVity, zajišťujeme bezpečné
                    testování skrytých genetických vad.
                    <ul>
                      <li>
                        <strong>Prenascan:</strong> test stanovující riziko
                        genetických vad miminka ze vzorku krve těhotné ženy.
                        Test je vhodný pro všechny nastávající maminky, které
                        chtějí vědět co nejvíce o zdraví svého miminka.
                      </li>
                      <li>
                        <strong>CarrierTest:</strong> test na více než 2 000
                        mutací způsobujících přes 80 genetických chorob. Test je
                        vhodný pro partnery před plánováním dítěte, zejména při
                        neplodnosti, opakovaných potratech, neúspěších IVF nebo
                        dědičných onemocněních v rodině.
                      </li>
                      <li>
                        <strong>Tromboscan:</strong> genetický test zaměřený na
                        čtyři nejčastější trombofilní mutace, které se významně
                        podílejí na procesu srážení krve.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
