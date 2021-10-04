import React from 'react';

type TextFielOptionsProps = {
  options: string[];
  type: string;
  placeHolder: string;
  name: string;
  nameType: string;
  value: string;
  valueType: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const TextFieldOptions = ({
  options,
  type,
  placeHolder,
  name,
  nameType,
  value,
  valueType,
  handleChange,
  handleChangeSelect,
}: TextFielOptionsProps) => {
  return (
    <div className="textfieldoptions-main-content">
      <div className="relative">
        <select
          name={nameType}
          value={valueType}
          onChange={handleChangeSelect}
          className="textfieldoptions-select"
        >
          {options.map((option) => (
            <option key={option} className="py-4 uppercase">
              {option}
            </option>
          ))}
        </select>
        <span className="textfieldoptions-icon">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </div>
      <input
        className="textfieldoptions"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        aria-label={placeHolder}
      />
    </div>
  );
};

export default TextFieldOptions;
