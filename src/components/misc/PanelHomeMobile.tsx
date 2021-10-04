import React from 'react';
import ImgHomeMobile from './../svg/ImgHomeMobile';

const PanelHomeMobile = () => {
  return (
    <div className="homem-main-content">
      <div className="h-72 py-5">
        <div className="homed-text-content">
          <p className="homed-text1">¡NUEVO!</p>
        </div>
        <div className="homed-text-content">
          <p className="homem-text2">
            Seguro Vehicular <span className="text-red-rimac">Tracking</span>
          </p>
        </div>
        <div className="homed-text-content">
          <p className="homed-text3">
            Cuentanos donde le haras seguimiento a tu seguro
          </p>
        </div>
      </div>
      <div className="-mr-8">
        <ImgHomeMobile />
      </div>
    </div>
  );
};

export default PanelHomeMobile;
