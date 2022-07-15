import { FC, PropsWithChildren } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import React from 'react';

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
