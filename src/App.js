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
import { Container, Grid } from "@material-ui/core";
import { TitleAndSubtitle } from "./Components/ClinicIdentifier/TitleAndSubtitle";

function App() {
  return (
    <>
      <Container
        style={{
          backgroundColor: "black",
          maxWidht: "700px",
          padding: 16,
          marginTop: 32,
        }}
      >
        <Grid spacing={4} justify="center" container>
          <Grid item>
            <TitleAndSubtitle
              title={"TORNEIO"}
              subtitle={"#1 COPA MIX TGG - CSGO"}
            />
          </Grid>
          <Grid item>
            <TitleAndSubtitle title={"DATA"} subtitle={"26/09/2020"} />
          </Grid>
        </Grid>
        <PostIt />
      </Container>
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
