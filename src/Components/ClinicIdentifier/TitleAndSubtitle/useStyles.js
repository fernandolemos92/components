import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    borderRadius: "6px",
    width: "auto",
    paddingTop: "8px",
    paddingBottom: "8px",
    flexFlow: "column",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  title: {
    color: "#848484",
    font: "Roboto",
    fontWeight: "500",
    fontSize: 12,
    lineSpacing: "5%",
  },
  subtitle: {
    font: "open sans",
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
}));
