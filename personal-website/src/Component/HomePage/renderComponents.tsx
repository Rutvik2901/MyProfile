import { AppBar, Box, Button, Card, CardActionArea, CardActions, CardContent, Chip, duration, MobileStepper, Paper, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import React from "react";
import style from "./styles/index";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import image from "../../Assets/mon.png";
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
  StyledComponentsIcon,
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
} from "./icons";
import { GitHub, KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
// import SwipeableViews from 'react-swipeable-views';

// import { url } from "node:inspector";
// import { url } from "node:inspector";

export const Introduction = (props: any) => {
  const styles = style(props);

  return (
    <div className={styles.introTitle} style={{ backgroundColor: props.bg[props.index] }}>
      <div className={styles.animation} style={{ color: props.color[props.index] }}>
        {props.currentElement}
      </div>
    </div>
  );
};

export const IntroductionContent = (props: any) => {
  const styles = style(props);

  return (
    <>
      <Card style={{ backgroundColor: props.bg }} className={styles.introSectionCard}>
        <div className={styles.introSectionName}>
          <Typography className={styles.introSection} style={{ alignItems: "flex-end", color: props.color }}>
            Hi, My name is &nbsp;{" "}
          </Typography>
          <div style={{ fontWeight: 600, fontSize: "2.5vw", color: props.color }} className={styles.introSection}>
            Rutvik Gajjar
          </div>
        </div>
        <CardContent style={{ color: "rgb(108, 117, 125)", paddingTop: 10 }}>
          <Typography style={{ color: "#6c757d", fontFamily: "Roboto, sans-serif", fontSize: "3.1vw", wordBreak: "break-word", paddingTop: 5, lineHeight: 1.2 }} gutterBottom>
            Development is my passsion. An energetic Web Developer and Fast Learner.
            <MenuBookIcon style={{ marginLeft: 10 }} />
            {/* React.Js, Angular, Django and Node.Js Passionate towards */}
            {/* development. I developed things for web. Passionate towards */}
            {/* Development. Web Development Enthusiastic and Quick Learner of New */}
            {/* Technologies */}
          </Typography>
          <Typography
            style={{
              color: "rgb(108, 117, 125)",
              fontFamily: "Roboto, sans-serif",
              marginTop: 30,
              fontSize: "2.3vw",
            }}
            gutterBottom
          >
            I'm Front-End developer from India. I'm addicted towards development. Incoming M.S. Computer Science student at ASU.
          </Typography>
          <Typography
            style={{
              // color: "#1eba42",
              fontFamily: "Roboto, sans-serif",
              marginTop: 20,
              fontSize: "2.3vw",
              fontWeight: 600,
              color: props.color,
            }}
          >
            ASURITE '23 <WhatshotIcon style={{ fill: "#ffc107" }} />
          </Typography>
          {/* <Typography style={{ color: "#6c757d" }}>adjective</Typography> */}
          <Typography variant="body2" component="p" style={{ fontSize: 20, fontWeight: 600 }}>
            {/* Think more, Design less */}
            {/* <q>
              If you can't explain it simply, you don't understand it well
              enaugh.
            </q> */}
            <p style={{ display: "flex", fontSize: "1.5vw" }}>
              <q style={{ width: "auto" }}>If you can't explain it simply, you don't understand it well enough.</q>
              <p>-Albert Einstein</p>
            </p>
            {/* One day I W'll <br /> Calm but very powerful */}
            {/* Wait for right time and hunt that down */}
            {/* Don't wish for things hunt them down. */}
            {/* Everything has small  */}
            {/* <br /> */}
            {/* {'"a benevolent smile"'} */}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </>
  );
};

export const Skills = (props: any) => {
  const styles = style(props);
  const smScreenSize = useMediaQuery("(max-width: 425px");
  // console.log("smScreenSize: ", smScreenSize);

  return (
    <div className={styles.introSectionCard} style={{ backgroundColor: props.bg, padding: 10 }}>
      <Paper elevation={5} square style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
        <Typography className={styles.skillsTitle}>Languages</Typography>
        <div>
          <Chip icon={<JsIcon />} label="JavaScript" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<TsIcon />} label="TypeScript" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<PythonIcon />} label="Python" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<JavaIcon />} label="Java" size="small" variant="default" className={styles.chipStyles}></Chip>
        </div>
      </Paper>

      <Paper elevation={5} square style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
        <Typography className={styles.skillsTitle} style={{ marginTop: 5 }}>
          Front-End Technologies
        </Typography>
        {/* <div className={`${smScreenSize} && ${styles.gridView}`}> */}
        <div>
          <Chip icon={<ReactIcon />} label="React" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<AngularIcon />} label="Angular 2.0+" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<ReduxIcon />} label="Redux" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<ReduxSagaIcon />} label="Redux-Saga" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<IonicIcom />} label="Ionic" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<HtmlIcon />} label="HTML5" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<CssIcon />} label="CSS3" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<MaterialIcon />} label="Material-UI" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<StyledComponentsIcon />} label="Styled-Components" size="small" variant="default" className={styles.chipStyles}></Chip>
        </div>
      </Paper>

      <Paper elevation={5} square style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
        <Typography className={styles.skillsTitle} style={{ marginTop: 5 }}>
          Back-End Technologies
        </Typography>
        <div>
          <Chip label="Django" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<NodeIcon />} label="Node.js" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<ExpressIcon />} label="Express.js" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<PostgresSQLIcon />} label="PostgreSQL" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<MongoDBIcon />} label="MongoDB" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<MongooseIcon />} label="Mongoose" size="small" variant="default" className={styles.chipStyles}></Chip>
        </div>
        {/* <Chip icon={<JavaIcon />} label="Java" size="small" variant="default" className={styles.chipStyles}></Chip> */}
      </Paper>

      <Paper elevation={5} square style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
        <Typography className={styles.skillsTitle} style={{ marginTop: 5 }}>
          Others
        </Typography>
        <div>
          <Chip label="Internet of Things" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip label="Computer Vision" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<GitIcon />} label="Git" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<PostmanIcon />} label="Postman" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<NgrokIcon />} label="Ngrok" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<HerokuIcon />} label="Heroku" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<NpmIcon />} label="NPM" size="small" variant="default" className={styles.chipStyles}></Chip>
          <Chip icon={<VsIcon />} label="VS Code" size="small" variant="default" className={styles.chipStyles}></Chip>
        </div>
      </Paper>
    </div>
  );
};

export const Experience = (props: any) => {
  const classes = style(props);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 2);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 2);
  };

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
  const techStackAjmera = ["React", "Typescript", "React-redux", "Redex-saga", "Figma"];
  const techStackTiny = ["Python", "Django", "HTML5", "CSS3", "Javascript", "PostgreSQL"];
  const techStackDigi = ["Angular", "Python", "MongoDB", "HTML5", "CSS3", "JQuery"];
  const techStackRobo = ["Computer Vision", "Python", "Django", "HTML5", "CSS3", "Javascript", "RestAPI", "PostgreSQL", "AJAX"];

  const contentMain = [contentAjmera, contentTiny, contentDigi, contentRobo];
  const techStackMain = [techStackAjmera, techStackTiny, techStackDigi, techStackRobo];
  const teamLengthMain = [0, 0, 0, 5];
  const positionMain = ["Software Developer Intern", "Software Developer Intern", "Software Developer Intern", ""];
  const durationMain = ["Jan'21 to Apr'21", "May'20 to Jul'20", "Jan'20 to May'20", ""];
  const locationMain = ["Gujarat, India", "Gujarat, India", "Gujarat, India", ""];
  const titleMain = ["Internship: Ajmera Infotech Pvt. Ltd.", "Internship: Tiny ERP Pvt. Ltd - Odoo", "Internship: Digiwagon Technologies", "Project: ROBOFEST Competition"];
  const maxSteps = titleMain.length;

  return (
    <div className={classes.introSectionCard} style={{ backgroundColor: props.bg, padding: 10 }}>
      <ExperienceLayout
        position={positionMain[activeStep - 1]}
        duration={durationMain[activeStep - 1]}
        techStack={techStackMain[activeStep - 1]}
        content={contentMain[activeStep - 1]}
        location={locationMain[activeStep - 1]}
        title={titleMain[activeStep - 1]}
        teamLength={teamLengthMain[activeStep - 1]}
      />
      <ExperienceLayout
        position={positionMain[activeStep]}
        duration={durationMain[activeStep]}
        techStack={techStackMain[activeStep]}
        content={contentMain[activeStep]}
        location={locationMain[activeStep]}
        title={titleMain[activeStep]}
        teamLength={teamLengthMain[activeStep]}
      />

      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        style={{ color: props.color }}
        className={classes.mobileStepper}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 1}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
};

const ExperienceLayout = (props: any) => {
  const styles = style(props);
  return (
    <Paper style={{ color: "rgb(108, 117, 125)" }} square elevation={5}>
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
        <Chip label={tech} size="small" variant="default" style={{ color: "#ff073a", backgroundColor: "transparent" }} className={styles.chipStyles}></Chip>
      ))}
    </Paper>
  );
};
