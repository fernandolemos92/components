import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  meshDescription: {
    maxWidth: "500px",
    backgroundColor: "#fff",
    height: "50px",
    alignItems: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
    border: "2px solid #06D6A0",
  },
  meshName: {
    fontSize: "14px",
    color: "#0C3F50",
  },
  meshPaper: {
    marginLeft: "52px",
    backgroundColor: "#fff",
    height: "64vh",
    paddingLeft: "40px",
  },
  meshInfo: {
    fontSize: "32px",
    color: "#0C3F50",
    paddingTop: "40px",
  },
  meshInstruction: {
    fontSize: "14px",
    color: "#0C3F50",
    paddingTop: "16px",
  },
}));
