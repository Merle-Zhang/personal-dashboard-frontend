import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <hr />
      <Outlet />
    </div>
  );
};

export default Root;
