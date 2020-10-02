import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { InfoPanel } from "./Components/InfoPanel/";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MeshDetails } from "./Components/MeshDetails";
import { ClinicIdentifier } from "./Components/ClinicIdentifier";

function App() {
  return (
    <>
      <CssBaseline />
      <InfoPanel />
      <MeshDetails />
      <ClinicIdentifier />
    </>
  );
}

export default App;
