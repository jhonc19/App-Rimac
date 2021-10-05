import React, { useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { FaCheck } from 'react-icons/fa';
import { IoIosArrowDropleft } from 'react-icons/io';
import Button from '../components/Forms/Button';

import StepsPanel from '../components/misc/StepsPanel';
import IconTheft from '../components/svg/IconTheft';
import IconDamage from '../components/svg/IconDamage';
import IconLost from '../components/svg/IconLost';
import ImgPersonLarge from '../components/svg/ImgPersonLarge';
import Coverage from '../components/misc/Coverage';
import AplicationContext from './../context/AplicationContext';

import { formatAmount } from '../utils/NumberUtils';

const AutoPlan = ({ history }: RouteComponentProps) => {
  const aplicationContext = useContext(AplicationContext);
  const {
    dataPerson,
    dataCar,
    monthlyAmount,
    handleChange,
    setMonthlyamount,
    setDataCar,
  } = aplicationContext;
  const { name } = dataPerson;
  const { placa, marca, anio, amount } = dataCar;

  const initialIncludes = ['Analisis de motor', 'Aros gratis'];

  const [includes, setIncludes] = useState(initialIncludes);
  const rangeAmount = { minAmount: 12500, maxAmount: 16500 };
  const [insureAmount, setInsureAmount] = useState(amount);

  const addCoverage = (amountCoverage: number, include: string) => {
    const tmpAmount = monthlyAmount + amountCoverage;
    setMonthlyamount(tmpAmount);
    console.log(monthlyAmount, 'add');
    setIncludes([...includes, include]);
    console.log(include);
  };

  const removeCoverage = (amountCoverage: number, include: string) => {
    const tmpAmount = monthlyAmount - amountCoverage;
    console.log(monthlyAmount, 'remove', amountCoverage);
    setMonthlyamount(tmpAmount);

    const index = includes.indexOf(include);
    let tempIncludes = [...includes];
    index > -1 && tempIncludes.splice(index, 1);
    setIncludes(tempIncludes);
  };

  const changeInsureAmount = (value: number) => {
    const tempAmount = insureAmount + value;

    if (
      tempAmount <= rangeAmount.maxAmount &&
      tempAmount >= rangeAmount.minAmount
    ) {
      setInsureAmount(tempAmount);
      setDataCar({ amount: tempAmount });
    }
  };

  let coverages = [
    {
      Icon: <IconTheft />,
      name: 'Llanta robada',
      include: 'Llanta de repuesto',
      addCoverage: addCoverage,
      removeCoverage: removeCoverage,
      amount: 15,
    },
    {
      Icon: <IconDamage />,
      name: 'Choque y/o pasarte la luz roja',
      include: 'Protección contra daños',
      addCoverage: addCoverage,
      removeCoverage: removeCoverage,
      amount: 20,
    },
    {
      Icon: <IconLost />,
      name: 'Atropello en la vía Evitamiento ',
      include: 'Seguro de salud',
      addCoverage: addCoverage,
      removeCoverage: removeCoverage,
      amount: 50,
    },
  ];

  return (
    <div className="autoplan-main-content">
      <StepsPanel
        stepActive={2}
        steps={[
          { stepActive: false, stepName: 'Datos del auto' },
          { stepActive: true, stepName: 'Arma tu plan' },
        ]}
      />
      <div className="autoplan-content">
        <div className="w-full lg:w-1/2">
          <div className="autoplan-return-content">
            <div className="autoplan-return-icon">
              <IoIosArrowDropleft />
            </div>
            <p className="autoplan-return-text">VOLVER</p>
          </div>
          <div className="autoplan-welcome-content">
            <p className="autoplan-welcome-name">
              ¡Hola, <span className="text-red-rimac">{`${name}!`}</span>
            </p>
            <p className="autoplan-welcome-text1">Mira las coberturas</p>
            <p className="autoplan-welcome-text2">
              Conoce las coberturas para tu plan
            </p>
          </div>

          <div className="autoplan-datacar-content">
            <div className="text-gray-titulo">
              <p className="text-gray-input3 text-xs py-1">Placa: {placa}</p>
              <p className="autoplan-datacar-text">{`${marca} ${anio}`}</p>
              <p className="autoplan-datacar-text pb-5 lg:pb-8">Golf</p>
            </div>
            <div className="pl-4 lg:pl-20">
              <div className="autoplan-datacar-image">
                <ImgPersonLarge />
              </div>
            </div>
          </div>

          <div className="autoplan-amount-content">
            <div className="autoplan-amount-content-minmax">
              <p className="text-gray-titulo">Indica la suma asegurada</p>
              <div className="flex text-xs text-gray-paragraph">
                <p>{`MIN $ ${formatAmount(rangeAmount.minAmount)}`}</p>
                <p className="px-3">|</p>
                <p>{`MAX $ ${formatAmount(rangeAmount.maxAmount)}`}</p>
              </div>
            </div>
            <div className="autoplan-amountinput-content">
              <button
                data-action="decrement"
                className="autoplan-amountinput-button rounded-l"
                onClick={() => changeInsureAmount(-100)}
              >
                <span className="m-auto text-2xl font-light text-blue-500">
                  −
                </span>
              </button>
              <input
                type="text"
                className="autoplan-amountinput"
                name="car_amount"
                onChange={handleChange}
                value={`$ ${formatAmount(insureAmount)}`}
              ></input>
              <button
                data-action="increment"
                className="autoplan-amountinput-button rounded-r"
                onClick={() => changeInsureAmount(100)}
              >
                <span className="m-auto text-2xl font-light text-blue-500">
                  +
                </span>
              </button>
            </div>
          </div>

          <p className="autoplan-coverage-title">Agrega o quita coberturas</p>
          <div className="autoplan-coverage-content-tab">
            <p className="autoplan-coverage-tab activo">PROTEGE A TU AUTO</p>
            <p className="autoplan-coverage-tab">PROTEGE A LOS QUE TE RODEAN</p>
            <p className="autoplan-coverage-tab">MEJORA TU PLAN</p>
          </div>
          {coverages.map(
            (
              { Icon, name, addCoverage, removeCoverage, include, amount },
              index
            ) => (
              <Coverage
                Icon={Icon}
                name={name}
                include={include}
                amount={amount}
                addCoverage={addCoverage}
                removeCoverage={removeCoverage}
                key={index}
              />
            )
          )}
        </div>
        <div className="autoplan-amountmonth-content">
          <div className="autoplan-amountmonth-amount-content">
            <div className="flex flex-col justify-center">
              <p className="autoplan-amountmonth-text1">MONTO</p>
              <p className="autoplan-amountmonth-amount">
                ${monthlyAmount.toFixed(2)}
              </p>
              <p className="autoplan-amountmonth-text hidden lg:block py-1">
                mensuales
              </p>
              <p className="autoplan-amountmonth-text block lg:hidden">
                mensual
              </p>
            </div>
          </div>
          <div className="autoplan-include-content">
            <p className="py-3">El precio incluye</p>
            {includes.map((include, index) => (
              <div className="autoplan-include" key={index}>
                <FaCheck className="text-green-400" />
                <p className="pl-2">{include}</p>
              </div>
            ))}
          </div>

          <Button
            type="submit"
            name="LO QUIERO"
            height={3}
            onClick={() => history.push('/gratitude')}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoPlan;
