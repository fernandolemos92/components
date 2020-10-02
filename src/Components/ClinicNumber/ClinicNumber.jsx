import { Grid, Typography } from "@material-ui/core";
import React from "react";

const ClinicNumber = () => {
  return (
    <>
      <Grid /* ID CLINICA */
        item
        style={{
          backgroundColor: "rgba(0, 186, 192, 0.25)",
          padding: "2px 8px",
          borderRadius: "2px",
        }}
      >
        <Typography style={{ fontSize: "12px" }}>DR-151</Typography>
      </Grid>
    </>
  );
};

export default ClinicNumber;
