import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  typographyButton: {
    fontSize: "14px",
    fontWeight: "500",
  },
  bodyButton: {
    boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
    border: "1px solid #58D2D6",
    color: "#073B4C",
    padding: "12px 8px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#58D2D6",
      color: "#fff",
    },
  },
}));
