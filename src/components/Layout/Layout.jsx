import React from "react";
import { Outlet } from "react-router-dom";

import "./Layout.scss";
import Header from "../Header";
import NavBar from "../NavBar";

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper__sidebar">
          <NavBar />
        </div>
        <div className="wrapper__content">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
