import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Finance from "./pages/Finance/Finance";
import Root from "./pages/Root/Root";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "finance",
        element: <Finance />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Index() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default App;
