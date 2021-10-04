import React from 'react';

type TextFieldProps = {
  placeHolder: string;
  type: string;
  name?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  placeHolder,
  type,
  name,
  value,
  handleChange,
}: TextFieldProps) => {
  return (
    <div className="textfield-main-content">
      <input
        className="textfield"
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

export default TextField;
