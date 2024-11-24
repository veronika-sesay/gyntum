import React from 'react';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <div className="main-white">
        <div className="content container">
          <div className="text">
            <h1>Komplexní gynekologická péče pro ženy</h1>
            <p>
              V naší ordinaci poskytujeme komplexní gynekologickou péči pro ženy
              všech věkových kategorií. Naším cílem je poskytovat péči na
              nejvyšší úrovni a s důrazem na individuální přístup ke každé
              pacientce.
            </p>
          </div>
          <div className="photo">
            <img src="../../img/main-image-nobg.png" alt="foto ženy" />
          </div>
        </div>
      </div>
    </>
  );
};
