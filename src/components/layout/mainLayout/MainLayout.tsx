import React, { FC } from "react";
import { MainLayoutProps } from "./MainLayout.type";
import { Header } from "@/components/container";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen m-auto flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
