import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutWrapperProps {
  children: ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutWrapper;
