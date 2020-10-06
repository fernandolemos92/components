import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { InfoPanel } from "./Components/InfoPanel/";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MeshDetails } from "./Components/MeshDetails";
import { ClinicIdentifier } from "./Components/ClinicIdentifier";
import { Radius4BtnPrimary } from "./Components/Radius4BtnPrimary";
import { Radius4BtnSecondary } from "./Components/Radius4BtnSecondary";

function App() {
  return (
    <>
      <CssBaseline />
      <InfoPanel />
      <MeshDetails />
      <ClinicIdentifier />
      <Radius4BtnPrimary />
      <Radius4BtnSecondary />
    </>
  );
}

export default App;
