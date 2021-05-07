import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  /* Common styles and resets */
  dotstyle: {
    zIndex: 2,
    position: "fixed",
    marginTop: 32,
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
    },
    "& li": {
      position: "relative",
      display: "block",
      float: "left",
      margin: "0 16px",
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
  current: {
    backgroundColor: "red",
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
}));

export default styles;
