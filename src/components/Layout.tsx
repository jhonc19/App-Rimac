import React from 'react';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="container">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
