import React, { useContext, useState } from 'react';

import { Redirect } from 'react-router-dom';

import Button from './Forms/Button';
import CheckPoliticsPrivacity from './Forms/CheckPoliticsPrivacity';
import TextField from './Forms/TextField';
import TextFieldOptions from './Forms/TextFieldOptions';
import AplicationContext from './../context/AplicationContext';

const Form = () => {
  const [checkedPrivacitystate, SetCheckedPrivacitystate] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const aplicationContext = useContext(AplicationContext);
  const {
    dataCar,
    celular,
    typeDocument,
    numberDocument,
    handleChange,
    handleChangeSelect,
    getDataPerson,
    dataPerson,
  } = aplicationContext;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const message = isValid();

    if (message !== 'Pass') {
      alert(message);
      return;
    }

    await getDataPerson();

    if (dataPerson) await setRedirect(true);
  };

  const isValid = () => {
    if (typeDocument.trim() === 'dni' && numberDocument.length !== 8) {
      return 'Número de documento vacio o invalido';
    }

    if (typeDocument.trim() === 'ruc' && numberDocument.length !== 11) {
      return 'Número de documento vacio o invalido';
    }

    if (celular.trim() === '') {
      return 'Número de celular vacio o invalidado';
    }

    if (dataCar.placa.trim() === '') {
      return 'Placa vacio o invalidado';
    }

    if (!checkedPrivacitystate) {
      return 'Debe aceptar los terminos y condiciones para continuar';
    }

    return 'Pass';
  };

  return redirect ? (
    <Redirect to="/autoplan" />
  ) : (
    <form onSubmit={handleSubmit} className="form-main-content">
      <p className="form-title">Déjanos tus datos</p>
      <TextFieldOptions
        options={['dni', 'ruc']}
        type="number"
        nameType="typeDocument"
        name="numberDocument"
        placeHolder="Nro. de doc"
        valueType={typeDocument}
        value={numberDocument}
        handleChange={handleChange}
        handleChangeSelect={handleChangeSelect}
      />
      <TextField
        placeHolder="Celular"
        type="number"
        name="celular"
        value={celular}
        handleChange={handleChange}
      />
      <TextField
        placeHolder="Placa"
        type="text"
        name="car_placa"
        value={dataCar.placa}
        handleChange={handleChange}
      />
      <CheckPoliticsPrivacity
        value={checkedPrivacitystate}
        setValue={SetCheckedPrivacitystate}
      />
      <div className="pt-4">
        <Button type="submit" name="cotizalo" />
      </div>
    </form>
  );
};

export default Form;
