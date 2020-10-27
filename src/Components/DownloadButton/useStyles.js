import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "18px 16px",
    backgroundColor: "#1D1D1B",
    border: "1px solid #fff",
    borderRadius: "6px",
    width: "fit-content",
  },
  textButton: {
    color: "#fff",
    fontFamily: "OpenSans",
    fontSize: "16px",
    marginRight: "8px",
  },
  iconButton: {
    color: "#fff",
  },
}));
