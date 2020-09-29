import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
  },
  navInfoPanel: {
    height: "83px",
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    boxShadow: "0px 3px 6px rgba(7,59,76,.16)",
    marginTop: "24px",
    padding: "24px",
  },
  infoPanelDetails: {
    backgroundColor: "#F4F6F8",
    height: "154px",
    boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
    padding: "40px",
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
}));
