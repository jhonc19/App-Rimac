import React from 'react';
import LogoRimac from './svg/LogoRimac';
import { FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header-main-content">
      <div>
        <LogoRimac />
      </div>
      <div className="flex">
        <label className="header-text-question">
          ¿Tienes alguna duda?
        </label>
        <div className="header-text-contact">
          <FaPhoneAlt />
          <label className="block lg:hidden">Llámanos</label>
          <label className="hidden lg:block">(01) 411 6001</label>
        </div>
      </div>
    </div>
  );
};

export default Header;
