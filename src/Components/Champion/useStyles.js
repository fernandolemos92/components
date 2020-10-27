import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    padding: "24px 84px 32px 84px",
    background:
      "linear-gradient(135.93deg, #D6CB8D 1.79%, #E1D181 49.87%, #CDBB71 100%)",
    minHeight: "176px",
    minWidth: "288px",
    justifyContent: "center",
    marginTop: "32px",
    borderRadius: "8px 8px 0px 0px",
  },
  circle: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(360deg, #D4C276 5.42%, #E9E0A8 100%)",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
  icon: {
    fontSize: "64px",
    fontWeight: "900",
    zIndex: 10,
  },
  callContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(99.33deg, #DAC97B 1.1%, #F5E794 53.64%, #CEBC71 100%)",
    minWidth: "288px",
    padding: "0px 24px",
    flexDirection: "column",
    borderRadius: "0px 0px 8px 8px",
  },
  title: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    color: "#41474B",
    fontWeight: "700",
    padding: "16px 0",
  },
  subtitle: {
    fontSize: "24px",
    fontFamily: "Open Sans",
    color: "#000",
    fontWeight: "800",
    padding: "24px 0",
  },
}));
