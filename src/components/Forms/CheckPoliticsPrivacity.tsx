import React from 'react';

type CheckPoliticsPrivacityProps = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckPoliticsPrivacity = ({
  value,
  setValue,
}: CheckPoliticsPrivacityProps) => {
  return (
    <div className="checkbox-main-content">
      <label className="checkbox-input-content">
        <input
          type="checkbox"
          className="checkbox-input"
          onChange={() => setValue(!value)}
          checked={value}
        />
      </label>
      <p className="checkbox-text">
        {'Acepto la '}
        <span className="underline text-gray-paragraph cursor-pointer">
          Política de Protección de Datos Personales
        </span>
        {' y los '}
        <span className="underline text-gray-paragraph cursor-pointer">
          Términos y Condiciones
        </span>
      </p>
    </div>
  );
};

export default CheckPoliticsPrivacity;
