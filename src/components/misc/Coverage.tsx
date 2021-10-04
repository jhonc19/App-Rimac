import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface CoverageProps {
  Icon: JSX.Element | Element;
  name: string;
  include: string;
  amount: number;
  addCoverage: (amountCoverage: number, include: string) => void;
  removeCoverage: (amountCoverage: number, include: string) => void;
}

const Coverage = ({
  Icon,
  name,
  include,
  amount,
  addCoverage,
  removeCoverage,
}: CoverageProps) => {
  const [showText, setShowText] = useState(false);
  const [added, setAdded] = useState(false);

  const onClickAdd = () => {
    addCoverage(amount, include);
    setAdded(!added);
  };

  const onClickRemove = () => {
    removeCoverage(amount, include);
    setAdded(!added);
  };

  const onToggle = () => {
    setAdded(!added);

    !added ? addCoverage(amount, include) : removeCoverage(amount, include);
  };

  return (
    <div className="coverage-main-content">
      {Icon}
      <div className="px-5 w-full font-lato">
        <div className="flex items-center justify-between">
          <p className="coverage-name">{name}</p>
          {showText ? (
            <FaAngleUp
              className="coverage-icon-text"
              onClick={() => setShowText(!showText)}
            />
          ) : (
            <FaAngleDown
              className="coverage-icon-text"
              onClick={() => setShowText(!showText)}
            />
          )}
          <div className="coverage-checkbox-content">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={added}
              className="coverage-checkbox"
              onChange={onToggle}
            />
            <label className="toggle-label coverage-checkbox-label"></label>
          </div>
        </div>
        {!added ? (
          <div className="coverage-added-content">
            <AiOutlinePlusCircle
              className="coverage-added-icon"
              onClick={onClickAdd}
            />
            <p className="coverage-added-text" onClick={onClickAdd}>
              AGREGAR
            </p>
          </div>
        ) : (
          <div className="coverage-added-content">
            <AiOutlineMinusCircle
              className="coverage-added-icon"
              onClick={onClickRemove}
            />
            <p className="coverage-added-text" onClick={onClickRemove}>
              QUITAR
            </p>
          </div>
        )}
        <p className={`${!showText && 'hidden'} coverage-description`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel optio
          harum libero provident reprehenderit ipsa voluptatum ab ullam nobis,
          est veritatis, nisi fuga dolore assumenda praesentium repellendus qui
          necessitatibus quidem?
        </p>

        <div className="coverage-description-content">
          {showText ? (
            <>
              <p
                className="coverage-description-text"
                onClick={() => setShowText(!showText)}
              >
                VER MENOS
              </p>
              <FaAngleUp
                className="coverage-description-icon"
                onClick={() => setShowText(!showText)}
              />
            </>
          ) : (
            <>
              <p
                className="coverage-description-text"
                onClick={() => setShowText(!showText)}
              >
                VER MÁS
              </p>
              <FaAngleDown
                className="coverage-description-icon"
                onClick={() => setShowText(!showText)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coverage;
