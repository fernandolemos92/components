import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: "300px",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 3px 15px rgba(0,0,0,.16)",
  },
  textTitle: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "400",
    color: "#848484",
  },
  textHero: {
    fontFamily: "Open Sans",
    fontSize: "24px",
    fontWeight: "900",
    color: "#000",
  },
  textScore: {
    textFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "900",
    color: "#000",
  },
  highlightArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e2e2e2",
    borderRadius: "8px",
    height: "54px",
    width: "54px",
    padding: "8px 10px",
  },
}));
