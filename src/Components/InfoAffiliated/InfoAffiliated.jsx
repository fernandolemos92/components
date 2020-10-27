import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./useStyles";
import { BsThreeDotsVertical } from "react-icons/bs";

const InfoAffiliated = () => {
  const classes = useStyles();
  return (
    <>
      <Container
        className={classes.rootInfoAffiliatedContainer}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid container className={classes.affiliatedFace}>
          <Grid item className={classes.hero}>
            <img src="img/Elipse96.png" alt="" />
          </Grid>
          <Grid item>
            <Typography
              className={classes.callText}
              style={{ paddingLeft: "24px" }}
            >
              Marcella Wellington Silva
            </Typography>
            <Typography
              className={classes.complementText}
              style={{ paddingLeft: "24px" }}
            >
              Parceiro
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography className={classes.callText}>25</Typography>
          <Typography className={classes.complementText}>
            Assessores Afiliados
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.callText}>50</Typography>
          <Typography className={classes.complementText}>
            Clínicas Cadastradas
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.callText}>07</Typography>
          <Typography className={classes.complementText}>
            Redes Cadastradas
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.callText}>1.9%</Typography>
          <Typography className={classes.complementText}>
            É a comissão atual
          </Typography>
        </Grid>
        <Grid item>
          <BsThreeDotsVertical />
        </Grid>
      </Container>
    </>
  );
};

export default InfoAffiliated;
