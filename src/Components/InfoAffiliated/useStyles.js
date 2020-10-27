import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  rootInfoAffiliatedContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    padding: "14px 24px",
    boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
  },
  hero: {
    width: "64px",
    height: "64px",
  },
  affiliatedFace: {
    width: "fit-content",
    alignItems: "center",
  },
  callText: {
    fontSize: "14px",
    color: "#0C3F50",
    fontWeight: "600",
    textAlign: "center",
  },
  complementText: {
    fontSize: "12px",
    color: "#0C3F50",
    fontWeight: "400",
  },
}));
