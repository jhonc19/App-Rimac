import React, { useReducer } from 'react';
import AplicationContext from './AplicationContext';
import AplicationReducer from './AplicationReducer';
import axios from 'axios';

type AplicationStateProps = {
  children: React.ReactNode;
};

const AplicationState = ({ children }: AplicationStateProps) => {
  const initialState = {
    typeDocument: 'dni',
    numberDocument: '',
    celular: '',
    dataCar: {
      gas: 'false',
      amount: 14300,
      placa: '',
      marca: 'Wolkswagen',
      anio: 2019,
    },
    dataPerson: { name: 'Try Entity', email: 'try.sanchez@gmail.com' },
    monthlyAmount: 20,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const names = e.target.name.split('_');

    if (names[0] === 'car') {
      dispatch({
        type: `SET_DATACAR`,
        payload: { [names[1]]: value },
      });
    } else {
      dispatch({
        type: `SET_${e.target.name.toUpperCase()}`,
        payload: value,
      });
    }
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const names = e.target.name.split('_');

    if (names[0] === 'car') {
      dispatch({
        type: `SET_DATACAR`,
        payload: { [names[1]]: value },
      });
    } else {
      dispatch({
        type: `SET_${e.target.name.toUpperCase()}`,
        payload: value,
      });
    }
  };

  const setDataCar = async (data: Object) => {
    dispatch({
      type: 'SET_DATACAR',
      payload: { ...data },
    });
  };

  const setMonthlyamount = (amount: number) => {
    dispatch({
      type: 'SET_MONTHLYAMOUNT',
      payload: amount,
    });
  };

  const getDataPerson = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const { data } = await axios.get(url);
    const indexPerson = Math.floor(Math.random() * (10 - 1)) + 1;

    dispatch({
      type: 'SET_PERSON',
      payload: data[indexPerson],
    });
  };

  const [state, dispatch] = useReducer(AplicationReducer, initialState);

  return (
    <AplicationContext.Provider
      value={{
        typeDocument: state.typeDocument,
        numberDocument: state.numberDocument,
        celular: state.celular,
        dataCar: state.dataCar,
        dataPerson: state.dataPerson,
        monthlyAmount: state.monthlyAmount,
        handleChange,
        handleChangeSelect,
        getDataPerson,
        setDataCar,
        setMonthlyamount,
      }}
    >
      {children}
    </AplicationContext.Provider>
  );
};

export default AplicationState;
