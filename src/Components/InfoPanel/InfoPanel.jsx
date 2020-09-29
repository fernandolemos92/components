import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";

const InfoPanel = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container justify="space-between">
          <Grid item>
            <Typography>Redes Cadastradas</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained">CADASTRAR REDE</Button>
          </Grid>
        </Grid>
      </Container>{" "}
      <Container maxWidth="lg">
        <Grid container justify="space-between">
          <Grid item>
            <Typography>Redes Cadastradas</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained">CADASTRAR REDE</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InfoPanel;
