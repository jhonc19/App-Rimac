import React from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';

interface step {
  stepActive: boolean;
  stepName: string;
}
interface StepsPanelProps {
  stepActive: number;
  steps: step[];
}

const StepsPanel = ({ stepActive, steps }: StepsPanelProps) => {
  const classActive = 'bg-indigo-500  text-white';
  const classInactive =
    'bg-transparent border border-gray-input3 text-gray-input3';

  return (
    <React.Fragment>
      {/* Version Nobile */}
      <div className="steps-mobile-content">
        <div className="steps-mobile-icon">
          <IoIosArrowDropleft />
        </div>
        <div className="steps-mobile-text">{`Paso ${stepActive} de 2`}</div>
        <div className="steps-mobile-barra">
          <div
            className={`bg-acian-100 ${
              stepActive === 2 ? 'w-4/4' : 'w-2/4'
            } h-full rounded-2xl`}
          ></div>
        </div>
      </div>

      {/* Version Desktop */}
      <div className="steps-desktop-content">
        <div className="w-3/5 mx-auto">
          {steps.map((step, index) => (
            <div className="flex relative pb-10" key={index}>
              <div
                className={`steps-desktop-number ${
                  step.stepActive ? classActive : classInactive
                }`}
              >
                <p className="text-xs">{index + 1}</p>
              </div>
              <div
                className={`steps-desktop-text ${
                  step.stepActive ? 'text-gray-titulo' : 'text-gray-input3'
                }`}
              >
                <p>{step.stepName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default StepsPanel;
