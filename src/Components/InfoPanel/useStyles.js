import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  navInfoPanel: {
    width: "100%",
    height: "83px",
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    boxShadow: "0px 3px 6px rgba(7,59,76,.16)",
    padding: "24px",
  },
  infoPanelDetails: {
    width: "100%",
    backgroundColor: "#F4F6F8",
    height: "154px",
    boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  infoPanelCTA: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  infoPanelDescription: {
    fontSize: "16px",
  },
  infoPanelUserMessage: {
    fontSize: "32px",
  },
  infoPanelUserOrientation: {
    fontSize: "14px",
  },
  infoPanelFlutuantButton: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      margin: "auto",
      display: "flex",
      bottom: "40px",
      justifyContent: "center",
    },
  },
  rootContainer: {
    position: "relative",
    marginLeft: "0px",
    marginRight: "0px",
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
    },
  },
}));
