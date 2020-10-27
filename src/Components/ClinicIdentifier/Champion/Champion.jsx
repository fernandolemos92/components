import React from "react";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import { FaCrown } from "react-icons/fa";
import { useStyles } from "./useStyles";

const Champion = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth={"xs"}>
        <Grid item container className={classes.root}>
          <Grid item className={classes.circle}>
            <FaCrown size={64} className={classes.icon} />
          </Grid>
        </Grid>
        <Grid container className={classes.callContainer}>
          <Grid item>
            <Typography className={classes.title}>CAMPEÃO</Typography>
          </Grid>
          <Divider style={{ width: "100%", height: "2px" }} />
          <Grid item>
            <Typography className={classes.subtitle}>Slowmotion</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Champion;
