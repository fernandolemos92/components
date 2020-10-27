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
          xl={10}
          lg={10}
          md={10}
          sm={10}
          xs={10}
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
            <Typography className={classes.textSubtitle}>Slowmotion</Typography>
          </Grid>
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
          <Grid item>
            <Typography className={classes.textTitle}>SCORE</Typography>
            <Typography className={classes.textSubtitle}>445.79</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PostIt;
