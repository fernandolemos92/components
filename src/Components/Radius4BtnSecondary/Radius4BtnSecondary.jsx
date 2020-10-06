import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./useStyles";

const Radius4BtnSecondary = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container item>
        <Grid item className={classes.bodyButton}>
          <Typography className={classes.typographyButton}>
            MAIS DETALHES
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Radius4BtnSecondary;
