import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { FaDownload } from "react-icons/fa";
import { useStyles } from "./useStyles";

const DownloadButton = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography className={classes.textButton}>DEMO DOWNLOAD</Typography>
        </Grid>
        <Grid item>
          <FaDownload className={classes.iconButton} />
        </Grid>
      </Grid>
    </>
  );
};

export default DownloadButton;
