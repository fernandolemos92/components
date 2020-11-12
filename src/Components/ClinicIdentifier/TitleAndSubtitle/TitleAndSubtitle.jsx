import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./useStyles";

const TitleAndSubtitle = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Typography className={classes.title} variant="subtitle2">
          {title}
        </Typography>

        <Typography className={classes.subtitle} variant="body1">
          {subtitle}
        </Typography>
      </Grid>
    </>
  );
};

export default TitleAndSubtitle;
