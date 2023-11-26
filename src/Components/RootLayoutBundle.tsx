import React from "react";
import Footer from "./Footer";
import BottomHeader from "./header/BottomHeader";
import Header from "./header/Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayoutBundle: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayoutBundle;
