import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { InfoPanel } from "./Components/InfoPanel/";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MeshDetails } from "./Components/MeshDetails";
import { ClinicIdentifier } from "./Components/ClinicIdentifier";
import { Radius4BtnPrimary } from "./Components/Radius4BtnPrimary";
import { Radius4BtnSecondary } from "./Components/Radius4BtnSecondary";
import { InfoAffiliated } from "./Components/InfoAffiliated";
import { PostIt } from "./Components/ClinicIdentifier/PostIt";
import { Champion } from "./Components/ClinicIdentifier/Champion";
import { DownloadButton } from "./Components/ClinicIdentifier/DownloadButton";

function App() {
  return (
    <>
      <DownloadButton />
      <CssBaseline />
      {/* <InfoPanel /> */}
      {/* <MeshDetails /> */}
      {/* <ClinicIdentifier /> */}
      {/* <Radius4BtnPrimary /> */}
      {/* <Radius4BtnSecondary /> */}
      {/* <InfoAffiliated /> */}
    </>
  );
}

export default App;
