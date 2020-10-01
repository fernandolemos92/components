import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./useStyles";

const MeshDetails = () => {
  const classes = useStyles();
  return (
    <>
      <Container
        style={{
          padding: "48px",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}
      >
        <Grid
          container
          className={classes.meshDescription}
          justify="space-between"
          /* max width 1280px esta quebrando o layout, ver de onde essa configuracao vem */
        >
          <Grid item>
            <Typography className={classes.meshName}>Rede GMeireles</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.meshCount}>(0)</Typography>
          </Grid>
        </Grid>
        <Grid Container className={classes.meshPaper}>
          <Grid item>
            <Typography className={classes.meshInfo}>
              Você não tem nenhuma clínica cadastrada
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.meshInstruction}>
              Sempre que quiser cadastrar uma nova clínica dentro de uma Rede
              use o botão CADASTRAR NOVA CLÍNICA abaixo.
            </Typography>
          </Grid>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            CADASTRAR NOVA CLÍNICA
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default MeshDetails;
