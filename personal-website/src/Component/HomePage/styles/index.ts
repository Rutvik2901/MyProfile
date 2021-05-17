import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  /* Common styles and resets */
  root: {
    display: "flex",
    backgroundColor: "#161625",
    height: "100vh",
  },
  contentRoot: {
    height: "auto",
    margin: "20px 10px 10px 20px",
    display: "flex",
  },
  contentRootOptional: { flexDirection: "column", marginLeft: 5 },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    flex: "35%",
  },
  leftPanelOptional: {
    margin: "0px 10px 20px 20px",
    flex: "0%",
  },
  bookStore: {
    width: "100%",
    height: "auto",
    // backgroundColor: "#1e1e30",
    display: "flex",
    minHeight: 110,
    maxHeight: 140,
    borderRadius: 4,
  },
  books: {
    width: "10%",
    // backgroundColor: "green",
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 40,
    marginRight: 5,
    transform: "rotate(10deg)",
    "&:hover": {
      transform: "scale(1.2) rotate(10deg)",
    },
  },
  booksTitle: {
    transform: "rotate(-90deg)",
    fontWeight: 600,
  },
  mainPanel: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    scrollBehavior: "smooth",
    flex: "65%",
    scrollSnapType: "y mandatory",
  },
  dotstyle: {
    // zIndex: 2,
    // position: "fixed",
    // width: "100%",
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
      // #161625 !important blue #007bff red #ff073a green (#28a745,#1eba42) gray #6c757d purple #9673b9 hover-red rgba(255,7,58,.12549019607843137)
      // hover-blue rgba(0,123,255,.06274509803921569) hover green rgba(40,167,69,.12549019607843137) hover gray rgba(108,117,125,.06274509803921569)
      height: "100vh",
      // marginRight: 15,
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
    // backgroundColor: "#ff073a",
    "&:hover": {
      transform: "scale(1.2)",
      // backgroundColor: "#ad070c",
    },
  },
  notActive: {
    backgroundColor: "#6c757d",
    "&:hover": {
      transform: "scale(1.2)",
    },
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
    background: "#161625",
    display: "flex",
    // marginRight: 35,
    borderRadius: 5,
    marginLeft: 19,
  },
  progressBar: {
    height: "0%",
    // background: "red",
    width: 9,
    borderRadius: 5,
  },
  rootStyle: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    // width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "fixed",
  },
  "@keyframes move": {
    "0%": {
      transform: "scale(1) rotate(0deg)",
    },
    "100%": {
      transform: "scale(2) rotate(0.1deg)",
    },
  },
  animation: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    // font-family: 'Source Code Pro', monospace;
    fontSize: 40,
    // color: "rgb(56, 61, 82)",
    // color: "#1eba42",
    // animation: `$animated-text 2s steps(30,end) 1s 1 normal both`,
    // position: "absolute",
    // top: "9%",
    // left: "28%",
    // WebkitBoxReflect:
    //   "below 536px linear-gradient(transparent 25%, rgba(0,0,0,1))",
    fontFamily: "VT323, monospace",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // "&:hover": {
    //   backgroundColor: "rgba(40,167,69,.12549019607843137)",
    //   // zIndex: 30,
    // },
  },

  animation2: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    // font-family: 'Source Code Pro', monospace;
    fontSize: 25,
    color: "rgb(56, 61, 82)",
    animation: `$animated-text 2s steps(30,end) 1s 1 normal both`,
    position: "absolute",
    top: "15%",
    left: "29%",
    fontFamily: "VT323, monospace",
    // WebkitBoxReflect:
    //   "right 195px linear-gradient(transparent 25%, rgba(0,0,0,1))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  border: {
    borderBottom: "solid 5px rgba(0,255,0,.75)",
    position: "absolute",
    right: "-3px",
    top: "70%",
    width: "20px",
    animation: `$animated-cursor 600ms steps(30,end) infinite`,
  },
  /* text animation */

  "@keyframes animated-text": {
    from: { width: 0 },
    to: { width: "100%" },
  },
  "@keyframes animated-cursor": {
    from: { borderBottomColor: "rgba(0,255,0,.75)" },
    to: { borderBottomColor: "transparent" },
  },
  // "@media (max-width: 425px)": {
  //   "$ test": {
  //     flexDirection: "column",
  //   },
  // },
  imageClassHome: {
    width: "100%",
    // WebkitBoxReflect:
    //   "below 0px linear-gradient(transparent 25%, rgba(0,0,0,0.35))",
  },
  imageClassHome2: {
    width: "93%",
    WebkitBoxReflect: "right 0px linear-gradient(transparent 25%, rgba(0,0,0,0.35))",
  },
  arrowCss: {
    position: "absolute",
    top: "22%",
    left: "70%",
    cursor: "pointer",
  },
  arrowCss2: {
    position: "absolute",
    top: "40%",
    left: "64%",
  },
  introSectionRoot: {
    paddingLeft: "20px",
    paddingRight: 10,
    scrollSnapAlign: "start",
  },
  introSectionName: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
  },
  introSectionCard: {
    // backgroundColor: "rgba(40, 167, 69, 0.125)",
    color: "rgba(108, 117, 125)",
    boxShadow: "0px 0px 10px #6c757d",
    marginTop: 5,
    "&:hover": {
      backgroundColor: "rgba(40,167,69,.12549019607843137)",
    },
    "& .MuiPaper-root": {
      background: "transparent",
      padding: 10,
    },
  },
  introTitle: {
    width: "100%",
    // backgroundColor: "rgba(40, 167, 69, 0.125)",
    marginTop: 10,
    borderRadius: 4,
  },
  introSection: {
    // animation: `$textAnimation 2s`,
    // animationDelay: "2s",
    // animationFillMode: "forwards",
    width: "auto",
    display: "flex",
    justifyContent: "flex-start",
    // color: "#1eba42",
    // fontWeight: 600,
    fontSize: "1.5vw",
    // paddingTop: 20,
    paddingLeft: 5,
    opacity: 1,
    fontFamily: "'Roboto', sans-serif",
    // "&:hover": {
    //   transform: "scale(1.2)",
    // },
  },
  // "@keyframes textAnimation": {
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  // },
  testBack: {
    "&:hover": {
      background: "rgba(108,117,125,.06274509803921569)",
    },
  },
  testing: {
    "& .MuiTabs-fixed": {
      "& .MuiTabs-flexContainer": {
        "& .MuiTab-textColorPrimary.Mui-selected": {
          color: "rgb(0, 123, 255)",
        },
        "& .MuiTab-textColorPrimary": {
          color: "rgb(108, 117, 125)",
        },
      },
    },
  },
  chipStyles: {
    padding: 6,
    color: "rgb(0, 123, 255)",
    backgroundColor: "rgb(30, 30, 48)",
    margin: 10,
    "& .MuiChip-labelSmall": {
      fontSize: "1rem",
    },
  },
  chipStyleOptional: {
    margin: 5,
  },
  skillsTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginLeft: 15,
    color: "rgba(108, 117, 125)",
  },
  gridView: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    // margin: 5,
  },
  mobileStepper: {
    "& .MuiButton-root.Mui-disabled": {
      color: "rgb(108, 117, 125)",
    },
    "& .MuiButton-textSizeSmall": {
      color: "#ff073a",
    },
  },
}));

export default styles;
