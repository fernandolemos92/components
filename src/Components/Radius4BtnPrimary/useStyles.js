import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  typographyButton: {
    fontSize: "14px",
    fontWeight: "500",
  },
  bodyButton: {
    boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
    color: "#fff",
    padding: "12px 8px",
    backgroundColor: "#06D6A0",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#fff",
      border: "1px solid #06D6A0",
      color: "#06D6A0",
      padding: "11px 8px",
    },
  },
}));
