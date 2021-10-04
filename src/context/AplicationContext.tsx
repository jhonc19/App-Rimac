import React from 'react';

const initialState = {
  typeDocument: 'ruc',
  numberDocument: '',
  celular: '',
  dataCar: {
    placa: '',
    anio: '',
    marca: '',
    gas: 'false',
    amount: 0,
  },
  dataPerson: {
    name: '',
    email: '',
  },
  monthlyAmount: 20,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  getDataPerson: () => {},
  setDataCar: (data: Object) => {},
  setMonthlyamount: (amount: number) => {},
};

const aplicationContext = React.createContext(initialState);

export default aplicationContext;
