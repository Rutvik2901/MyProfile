import { AppBar, Box, Button, Card, Chip, Link, makeStyles, MobileStepper, Paper, Tab, Tabs, Theme, Typography, useMediaQuery, useTheme, WithStyles, withStyles } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { Component } from "react";
import ForwardIcon from "@material-ui/icons/Forward";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import {
  JsIcon,
  TsIcon,
  PythonIcon,
  JavaIcon,
  ReactIcon,
  ReduxIcon,
  AngularIcon,
  ReduxSagaIcon,
  HtmlIcon,
  CssIcon,
  MaterialIcon,
  NodeIcon,
  ExpressIcon,
  PostgresSQLIcon,
  MongoDBIcon,
  MongooseIcon,
  IonicIcom,
  GitIcon,
  PostmanIcon,
  HerokuIcon,
  NpmIcon,
  VsIcon,
  NgrokIcon,
  FigmaIcon,
} from "../HomePage/icons";

const styles = (theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    // backgroundColor: theme.palette.background.default,
    height: "100%",
    width: "100%",
  },
  chipRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    padding: "5px 0px",
    "& :nth-child(2)": {
      paddingLeft: 5,
    },
    "& :nth-child(3)": {
      paddingLeft: 5,
    },
    "& :nth-child(4)": {
      paddingLeft: 5,
    },
    "& :nth-child(5)": {
      paddingLeft: 5,
    },
  },
  skillsTitle: {
    fontSize: "1.4em",
    fontWeight: 600,
    marginLeft: 15,
    color: "rgba(108, 117, 125)",
    fontFamily: "Cookie, cursive",
  },
  chipStyles: {
    fontSize: "1.1em",
    color: "rgb(108, 117, 125)",
    background: "transparent",
    fontWeight: 600,
    margin: 10,
    "& .MuiChip-labelSmall": {
      fontSize: "1rem",
      padding: 0,
      paddingLeft: 3,
    },
    justifyContent: "flex-start",
  },
  skillsRoot: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    display: "flex",
    fontSize: "0.7em",
    alignItems: "center",
    "& .MuiPaper-elevation10": {
      marginTop: 15,
      width: "70%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
  },
  "@keyframes animated-text": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  gridSystem: {
    animation: "$animated-text 2s",
    display: "grid",
    gridTemplateColumns: "25% 25% 25% 25%",
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "33.3% 33.3% 33.3%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
    },
  },
  // gridSystem2: {
  //   animation: "$skills-text1 2s",
  //   display: "grid",
  //   gridTemplateColumns: "25% 25% 25% 25%",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "grid",
  //     gridTemplateColumns: "33.3% 33.3% 33.3%",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     display: "grid",
  //     gridTemplateColumns: "50% 50%",
  //   },
  // },
  contactContent: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  contactLinks: {
    "& .MuiSvgIcon-root": {
      margin: 10,
      width: "1.5em",
      height: "1.5em",
    },
  },
  rootExperience: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // height: "100%",
    background: "transparent",
    fontSize: 14,
    "& .MuiPaper-elevation10": {
      marginTop: 15,
      width: "70%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
  },
  labels: {
    "& .MuiTab-textColorPrimary": {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: "1em",
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "#3f51b5",
      fontSize: "1em",
      fontWeight: 600,
    },
  },
});

interface ISecondComponentProps extends WithStyles<typeof styles> {}

interface ISecondComponentState {
  activeStep: number;
  value: number;
}
class SecondComponent extends Component<ISecondComponentProps, ISecondComponentState> {
  constructor(props: ISecondComponentProps) {
    super(props);

    this.state = {
      activeStep: 0,
      value: 0,
    };
  }

  private handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  private handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  private welcomeComponent = () => {
    const { classes } = this.props;
    return (
      <div
        style={{
          color: "rgb(108, 117, 125)",
          backgroundColor: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.8em",
          flexDirection: "column",
        }}
      >
        Hello, I'm <Typography style={{ fontFamily: "Cookie, cursive", fontSize: "2em", color: "rgb(108, 117, 125)" }}> Rutvik Gajjar</Typography>
        <Typography>I'm front-end web developer</Typography>
        <div className={classes.chipRoot}>
          <ReactIcon width="1em" height="1em" />
          <AngularIcon width="1em" height="1em" colorA="rgba(15, 12, 41,0.8)" colorChar="rgb(108, 117, 125)" />
          <IonicIcom width="1em" height="1em" />
          <HtmlIcon width="1em" height="1em" />
          <CssIcon width="1em" height="1em" />
        </div>
      </div>
    );
  };

  private skillsComponent = () => {
    const { classes } = this.props;
    return (
      <div
        className={classes.skillsRoot}
        style={{
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <Paper elevation={10} square style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", backgroundColor: "transparent" }}>
          <Typography className={classes.skillsTitle}>Languages</Typography>
          <div className={classes.gridSystem}>
            <Chip icon={<JsIcon />} label="JavaScript" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<TsIcon />} label="TypeScript" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<PythonIcon />} label="Python" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<JavaIcon />} label="Java" size="small" variant="default" className={classes.chipStyles}></Chip>
          </div>
        </Paper>

        <Paper elevation={10} square style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", backgroundColor: "transparent" }}>
          <Typography className={classes.skillsTitle} style={{ marginTop: 5 }}>
            Front-End Technologies
          </Typography>
          {/* <div className={`${smScreenSize} && ${styles.gridView}`}> */}
          <div className={classes.gridSystem}>
            <Chip icon={<ReactIcon />} label="React" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<AngularIcon colorA="rgba(15, 12, 41,0.8)" colorChar="rgb(108, 117, 125)" />} label="Angular 2.0+" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<ReduxIcon />} label="Redux" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<ReduxSagaIcon />} label="Redux-Saga" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<IonicIcom />} label="Ionic" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<HtmlIcon />} label="HTML5" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<CssIcon />} label="CSS3" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<MaterialIcon />} label="Material-UI" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip label="Styled-Components" size="small" variant="default" className={classes.chipStyles}></Chip> {/* icon={<StyledComponentsIcon />} */}
          </div>
        </Paper>

        <Paper elevation={10} square style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", backgroundColor: "transparent" }}>
          <Typography className={classes.skillsTitle}>Back-End Technologies</Typography>
          <div className={classes.gridSystem}>
            <Chip label="Django" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<NodeIcon />} label="Node.js" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<ExpressIcon />} label="Express.js" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<PostgresSQLIcon />} label="PostgreSQL" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<MongoDBIcon />} label="MongoDB" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<MongooseIcon />} label="Mongoose" size="small" variant="default" className={classes.chipStyles}></Chip>
          </div>
          {/* <Chip icon={<JavaIcon />} label="Java" size="small" variant="default" className={styles.chipStyles}></Chip> */}
        </Paper>

        <Paper elevation={10} square style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", backgroundColor: "transparent" }}>
          <Typography className={classes.skillsTitle} style={{ marginTop: 5 }}>
            Others
          </Typography>
          <div className={classes.gridSystem}>
            <Chip label="Internet of Things" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip label="Computer Vision" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<GitIcon />} label="Git" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<PostmanIcon />} label="Postman" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<NgrokIcon />} label="Ngrok" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<HerokuIcon />} label="Heroku" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<NpmIcon />} label="NPM" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<VsIcon />} label="VS Code" size="small" variant="default" className={classes.chipStyles}></Chip>
            <Chip icon={<FigmaIcon color="rgba(108, 117, 125)" />} label="Figma" size="small" variant="default" className={classes.chipStyles}></Chip>
          </div>
        </Paper>
      </div>
    );
  };

  private contactComponent = () => {
    const { classes } = this.props;

    return (
      <div
        style={{
          color: "rgb(108, 117, 125)",
          backgroundColor: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.8em",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" className={classes.contactContent} style={{ fontFamily: "Katibeh, cursive", fontSize: "1em" }}>
          Thank you for your patience and have look at my portfolio website.
        </Typography>
        <Typography variant="h6" style={{ fontFamily: "Noto Serif, serif", marginTop: 50 }} className={classes.contactContent}>
          Always happy to take valuable suggestions and help other's. Please reach me out if you've any questions, suggestions or just want to say Hi. I'll try my best to reply ASAP.
        </Typography>
        <div className={classes.contactLinks} style={{ marginTop: 30 }}>
          <a style={{ cursor: "pointer", color: "rgb(108, 117, 125)" }} href="mailto:gajjarrutvik291@gmail.com">
            <EmailIcon />
          </a>
          <GitHubIcon style={{ cursor: "pointer" }} onClick={() => window.open("https://github.com/Rutvik2901", "_blank")} />
          <LinkedInIcon style={{ cursor: "pointer" }} onClick={() => window.open("https://www.linkedin.com/in/rutvikgajjar", "_blank")} />
          <FacebookIcon style={{ cursor: "pointer" }} onClick={() => window.open("https://www.facebook.com/rutvik.gajjar.16/", "_blank")} />
          <InstagramIcon style={{ cursor: "pointer" }} onClick={() => window.open("https://www.instagram.com/rutvik.gajjar.16/", "_blank")} />
        </div>
      </div>
    );
  };

  private handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({
      value: newValue,
    });
  };

  private experienceComponent = () => {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.rootExperience} style={{ overflowY: "auto" }}>
        <Paper elevation={10} square style={{ backgroundColor: "transparent", overflowY: "auto" }}>
          <AppBar position="static" style={{ background: "transparent" }}>
            <Tabs className={classes.labels} value={value} onChange={this.handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="scrollable auto tabs example">
              <Tab className={classes.labels} label="Internships" />
              <Tab className={classes.labels} label="Projects" />
            </Tabs>
          </AppBar>
          {/* <div style={{ overflowY: "auto" }}> */}
          <TabPanel value={value} index={0}>
            {/* Item One */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* Item Two */}
          </TabPanel>
        </Paper>
        {/* </div> */}
      </div>
    );
  };

  private renderComponent = () => {
    const { activeStep } = this.state;

    switch (activeStep) {
      case 0:
        return this.welcomeComponent();
      case 1:
        return this.skillsComponent();
      case 2:
        return this.experienceComponent();
      case 3:
        return this.contactComponent();
      default:
        break;
    }
  };

  render() {
    const { classes } = this.props;
    const maxSteps = 4;
    const title = ["Welcome", "Skills", "Experience", "Thank You"];

    return (
      <div style={{ flexDirection: "column", height: "100vh", fontSize: "5vh" }} className={classes.root}>
        {/* backgroundImage: "linear-gradient(to right, #0f0c29 , #302b63,#24243e)" */}
        <Paper
          style={{ backgroundImage: "linear-gradient(to right, rgb(15, 12, 41), rgb(0, 0, 70),rgb(15, 12, 41))", justifyContent: "center", background: "rgb(15, 12, 41)" }}
          square
          elevation={0}
          className={classes.header}
        >
          <Typography style={{ fontSize: "1.5em", fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: "Cookie, cursive" }}>{title[this.state.activeStep]}</Typography>
        </Paper>
        {/* <div>1</div> */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255,0.1)",
            boxShadow: "20px 20px 50px rgb(0 0 0 / 50%)",
            position: "absolute",
            top: "6%",
            left: "5%",
            color: "black",
            width: "90%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            backdropFilter: "blur(1px)",
          }}
        >
          {this.renderComponent()}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
              <KeyboardArrowLeft style={{ width: "2em", height: "2em" }} />
            </Button>
            <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === maxSteps - 1}>
              <KeyboardArrowRight style={{ width: "2em", height: "2em" }} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SecondComponent);

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value?: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      <Experience index={index} />
    </div>
  );
}

function Experience(props: TabPanelProps) {
  const contentAjmera = [
    "Ajmera Infotech is Full-cycle programming development specialist organization for mobile and web apps based in India.",
    "Learning of new tools like Atlassian Jira, Atlassian Confluence, Git and hands-on experience of react",
    "Involved in development of High-end and innovative products using different tools and technologies.",
    "Convert figma rough wireframes into high-end, responsive web designs.",
  ];
  const contentTiny = [
    "Involved in developing website using Django a python framework.",
    "Data Analytics using machine learning algorithms.",
    "Analyze Covid-19 day to day data and also predict future data.",
  ];

  const contentDigi = [
    "Utilized Object oriented concepts for the business logic and developed MVC application for the client.",
    "Worked with a verity of different languages, framework, and tools such as Python, Tomcat Apache, Angular, MongoDB.",
    "Designed and implemented a new web service to handle specific client’s business requests.",
  ];
  const contentRobo = [
    "Runners up in robot competition of 8 different types of categories.",
    "Object detection and tracking with advance machine learning algorithms.",
    "Live camera and sensors attached with robot helps to gather surroudings infomation and send back to ground station at regular interval.",
  ];
  const contentQuiz = [
    "Online Examination portal for organizations to take exam's",
    "Frontend Developed in Angular, HTML, CSS, Bootstrap and backend developed in Node Js, Express and database used is MongoDB.",
    "Admin Portal makes easy for admin's to manage organizations very effectively.",
  ];
  const techStackAjmera = ["React", "Typescript", "React-redux", "Redex-saga", "Figma"];
  const techStackTiny = ["Python", "Django", "HTML5", "CSS3", "Javascript", "PostgreSQL"];
  const techStackDigi = ["Angular", "Python", "MongoDB", "HTML5", "CSS3", "JQuery"];
  const techStackRobo = ["Computer Vision", "Python", "Django", "HTML5", "CSS3", "Javascript", "RestAPI", "PostgreSQL", "AJAX"];
  const techStackQuiz = ["Angular", "Node.Js", "Bootstrap", "RestAPI", "Express", "MongoDB", "Heroku"];
  const contentMain = [contentAjmera, contentTiny, contentDigi, contentRobo, contentQuiz];
  const techStackMain = [techStackAjmera, techStackTiny, techStackDigi, techStackRobo, techStackQuiz];
  const teamLengthMain = [0, 0, 0, 5, 3];
  const positionMain = ["Software Developer Intern", "Software Developer Intern", "Software Developer Intern", "", ""];
  const durationMain = ["Jan'21 to Apr'21", "May'20 to Jul'20", "Jan'20 to May'20", "", ""];
  const locationMain = ["Gujarat, India", "Gujarat, India", "Gujarat, India", "", ""];
  const titleMain = ["Ajmera Infotech Pvt. Ltd.", "Tiny ERP Pvt. Ltd - Odoo", "Digiwagon Technologies", "ROBOFEST Competition", "Quiz Generator"];
  const maxSteps = titleMain.length;
  const { index } = props;

  if (index) {
    return (
      <div style={{ backgroundColor: "transparent", padding: "10px" }}>
        <ExperienceLayout
          position={positionMain[3]}
          duration={durationMain[3]}
          techStack={techStackMain[3]}
          content={contentMain[3]}
          location={locationMain[3]}
          title={titleMain[3]}
          teamLength={teamLengthMain[3]}
        />
        <ExperienceLayout
          position={positionMain[4]}
          duration={durationMain[4]}
          techStack={techStackMain[4]}
          content={contentMain[4]}
          location={locationMain[4]}
          title={titleMain[4]}
          teamLength={teamLengthMain[4]}
        />
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "transparent", padding: "10px" }}>
        <ExperienceLayout
          position={positionMain[0]}
          duration={durationMain[0]}
          techStack={techStackMain[0]}
          content={contentMain[0]}
          location={locationMain[0]}
          title={titleMain[0]}
          teamLength={teamLengthMain[0]}
        />
        <ExperienceLayout
          position={positionMain[1]}
          duration={durationMain[1]}
          techStack={techStackMain[1]}
          content={contentMain[1]}
          location={locationMain[1]}
          title={titleMain[1]}
          teamLength={teamLengthMain[1]}
        />
        <ExperienceLayout
          position={positionMain[2]}
          duration={durationMain[2]}
          techStack={techStackMain[2]}
          content={contentMain[2]}
          location={locationMain[2]}
          title={titleMain[2]}
          teamLength={teamLengthMain[2]}
        />
      </div>
    );
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    "@keyframes animated-text": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  },
  root: {
    animation: "$animated-text 2s",
  },
}));

const ExperienceLayout = (props: any) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={{ color: "rgb(108, 117, 125)", background: "transparent", marginTop: 10, padding: 10 }} square elevation={0}>
      <Typography style={{ fontWeight: 600, fontSize: "1.2rem" }}>{props.title}</Typography>
      {props.position !== "" && (
        <Typography style={{ marginTop: 5 }} variant="body2" component="p">
          Position: {props.position}
        </Typography>
      )}
      {props.duration !== "" && (
        <Typography variant="body2" component="p">
          Duration: {props.duration}
        </Typography>
      )}
      {props.location !== "" && (
        <Typography variant="body2" component="p">
          Location: {props.location}
        </Typography>
      )}

      {props.teamLength !== 0 && (
        <Typography variant="body2" component="p">
          Team: {props.teamLength} Members
        </Typography>
      )}

      <Typography style={{ display: "flex", flexDirection: "column", marginTop: 5 }} gutterBottom variant="h5" component="h4">
        {props.content.map((signleContent: string) => (
          <div style={{ marginTop: 5, display: "flex" }}>
            <DoubleArrowIcon />
            <Typography style={{ display: "flex", flexWrap: "wrap" }}>{signleContent}</Typography>
          </div>
        ))}
      </Typography>
      {props.techStack.map((tech: any) => (
        <Chip label={tech} size="small" variant="default" style={{ color: "rgba(108, 117, 125)", backgroundColor: "transparent", border: "1px solid", margin: 5 }}></Chip>
      ))}
      {/* className={styles.chipStyles} */}
    </Paper>
  );
};
