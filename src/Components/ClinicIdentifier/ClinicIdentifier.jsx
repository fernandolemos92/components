import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Grid, Typography } from "@material-ui/core";
import { ClinicNumber } from "../ClinicNumber";

const ClinicIdentifier = () => {
  return (
    <>
      <Grid container item>
        <Accordion style={{ border: "1px solid #06D6A0", minWidth: "900px" }}>
          <AccordionSummary>
            <Grid container>
              <Grid item>
                <Typography style={{ fontSize: "16px", paddingRight: "16px" }}>
                  Clínica Faria Lima
                </Typography>
              </Grid>
              <ClinicNumber />
            </Grid>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
};

export default ClinicIdentifier;

/*  <Grid container direction="column">
              <Grid item>
                <Typography>Informações da clínica</Typography>
              </Grid>
              <Grid item>
                <Typography>CNPJ</Typography>
              </Grid>
              <Grid item>
                <Typography>01.000.123/0001-23</Typography>
              </Grid>
              <Grid item>
                <Typography>Tipo</Typography>
              </Grid>
              <Grid item>
                <Typography>Pessoa Jurídica</Typography>
              </Grid>
            </Grid> 

            Accordion Details? */
