import React, { useContext } from 'react';
import Button from '../components/Forms/Button';
import GratitudeDesktop from '../components/svg/GratitudeDesktop';
import GratitudeMobile from '../components/svg/GratitudeMobile';
import AplicationContext from './../context/AplicationContext';

const Gratitude = () => {
  const aplicationContext = useContext(AplicationContext);
  const { dataPerson } = aplicationContext;
  const { email } = dataPerson;

  return (
    <div className="gratitude-main-content">
      <div className="hidden lg:block w-full lg:w-1/2">
        <GratitudeDesktop />
      </div>
      <div className="block lg:hidden w-full">
        <GratitudeMobile />
      </div>
      <div className="gratitude-text-content">
        <p className="text-red-rimac pb-1">¡Te damos la bienvenida!</p>
        <p className="pb-1">Cuenta con nosotros para</p>
        <p className="pb-1">proteger tu vehiculo</p>
        <div className="gratitude-text">
          Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
          tu correo:
          <p className="gratitude-email">
            {email}
          </p>
        </div>
        <div className="w.full lg:w-1/2">
          <Button name="COMO USAR MI SEGURO" />
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
