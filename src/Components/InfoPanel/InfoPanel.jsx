import { Button, Container, Fab, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./useStyles";
import { FaPlus } from "react-icons/fa";

const InfoPanel = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.rootContainer}>
        <Container maxWidth="lg">
          <Grid
            container
            justify="space-between"
            className={classes.navInfoPanel}
          >
            <Grid item>
              <Typography className={classes.infoPanelDescription}>
                Redes Cadastradas
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.infoPanelCTA}>
                CADASTRAR REDE
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            className={classes.infoPanelDetails}
          >
            <Grid item>
              <Typography className={classes.infoPanelUserMessage}>
                Você não tem nenhuma rede cadastrada
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.infoPanelUserOrientation}>
                Sempre que quiser cadastrar uma nova Rede use o botão CADASTRAR
                REDE acima.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Grid container className={classes.infoPanelFlutuantButton}>
          <Fab
            style={{ backgroundColor: "#06D6A0", color: "#fff" }}
            aria-label="add"
          >
            <FaPlus />
          </Fab>
        </Grid>
      </Container>
    </>
  );
};

export default InfoPanel;
