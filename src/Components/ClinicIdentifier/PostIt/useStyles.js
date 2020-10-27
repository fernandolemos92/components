import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: "300px",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "blue",
  },
  textTitle: {
    fontFamily: "Roboto",
    fontSize: "10px",
    fontWeight: "400",
    color: "#848484",
  },
}));
