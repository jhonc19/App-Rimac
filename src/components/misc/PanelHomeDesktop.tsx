import React from 'react';
import ImgPanelDesktop from './../svg/ImgPanelDesktop';

const PanelHomeDesktop = () => {
  return (
    <div className="homed-main-content">
      <div className="flex flex-col w-80 m-auto py-14">
        <div>
          <ImgPanelDesktop />
        </div>
        <div className="h-72 py-5">
          <div className="homed-text-content">
            <p className="homed-text1">¡NUEVO!</p>
          </div>
          <div className="homed-text-content">
            <p className="homed-text2">
              Seguro <span className="text-red-rimac">Vehicular Tracking</span>
            </p>
          </div>
          <div className="homed-text-content">
            <p className="homed-text3">
              Cuentanos donde le haras seguimiento a tu seguro
            </p>
          </div>
          <div className="pt-24">
            <p className="homed-text4">
              © 2020 RIMAC Seguros y Reaseguros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelHomeDesktop;
