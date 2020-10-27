import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./useStyles";

const PostIt = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.paper}>
        <Grid
          className={classes.leftContainer}
          item
          container
          xl={9}
          lg={9}
          md={9}
          sm={9}
          xs={9}
          spacing={1}
        >
          <Grid
            item
            className={classes.texts}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Typography className={classes.textTitle}>MVP</Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.textHero}>Slowmotion</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.highlightArea}
          xl={3}
          lg={3}
          md={3}
          sm={3}
          xs={3}
        >
          <Grid item>
            <Typography className={classes.textTitle}>SCORE</Typography>
            <Typography className={classes.textScore}>445.79</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PostIt;
