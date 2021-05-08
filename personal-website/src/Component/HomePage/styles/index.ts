import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  /* Common styles and resets */
  dotstyle: {
    zIndex: 10,
    position: "fixed",
    width: "100%",
    "& ul": {
      position: "relative",
      margin: 0,
      padding: 0,
      listStyle: "none",
      userSelect: "none",
      cursor: "default",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      flexDirection: "column",
      height: "100vh",
      marginRight: 15,
    },
    "& li": {
      position: "relative",
      display: "block",
      float: "left",
      margin: "16px",
      width: "16px",
      height: "16px",
      cursor: "pointer",
      "& a": {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        outline: "none",
        borderRadius: "50%",
        textIndent: "-999em",
        cursor: "pointer",
        position: "absolute",
        "&:focus": {
          outline: "none",
        },
      },
    },
  },
  active: {
    backgroundColor: "red",
  },
  notActive: {
    backgroundColor: "lightgray",
  },
  topStickyBar: {
    position: "fixed",
    top: 0,
    padding: "16px",
    cursor: "pointer",
    width: "100%",
    "& ul": { padding: 0, margin: 0, display: "flex", flexDirection: "column" },
    "& a": {
      textDecoration: "none",
      backgroundColor: "lightgray",
    },
  },
  progressContainer: {
    width: 9,
    height: 205,
    background: "#ccc",
    display: "flex",
    marginRight: 35,
    borderRadius: 5,
  },
  progressBar: {
    height: "0%",
    background: "red",
    width: 9,
    borderRadius: 5,
  },
  rootStyle: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "fixed",
  },
}));

export default styles;
