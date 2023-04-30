import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Index</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todo">Todo</NavLink>
          </li>
          <li>
            <NavLink to="/finance">Finance</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
