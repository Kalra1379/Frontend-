import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import './BaseLayout.scss';

const BaseLayout = ({ children }) => {
  return (
    <div className="base-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
