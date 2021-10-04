import React from 'react';
import Form from '../components/Form';
import PanelHomeDesktop from '../components/misc/PanelHomeDesktop';
import PanelHomeMobile from '../components/misc/PanelHomeMobile';

const Home = () => {
  return (
    <div className="home-main-content">
      <PanelHomeMobile />
      <PanelHomeDesktop />
      <div className="home-form-content">
        <Form />
      </div>
    </div>
  );
};

export default Home;
