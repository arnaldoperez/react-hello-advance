import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from "react-router-dom";
import { createContext } from 'react';
// This is where all your routes are located
import { router } from "./routes";
import { useGlobalState } from "./hooks/useGlobalState";

export const Context = createContext(null)

const defaultGlobalState = {
  message: null,
  demo: [
    {
      title: "FIRST",
      background: "white",
      initial: "white"
    },
    {
      title: "SECOND",
      background: "white",
      initial: "white"
    }
  ]
}

const Main = () => {
  const globalState = useGlobalState(defaultGlobalState)
  if(window) window.globalState = globalState;
  return (
    <React.StrictMode>  
      <Context.Provider value={globalState}>
          <RouterProvider router={router} />
      </Context.Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
