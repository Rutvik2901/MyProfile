import { Card, CardContent, Fade, Tooltip, Typography, useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Experience, Introduction, IntroductionContent, Skills } from "./renderComponents";
import style from "./styles/index";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HomePage = (props: any) => {
  const styles = style(props);

  const history = useHistory();
  // const Home = (location: string) => {
  const handleRoute = (location: string) => {
    history.push(`/#${location}`);
  };
  // handleRoute();
  // };

  // const StyledComponent = styled.div`
  //   background: ${visibleElement};
  // `;

  const list = ["Introduction", "Skills", "Experience", "Education", "Contact"];
  const bgcolorList = ["rgba(40, 167, 69, 0.125)", "rgba(0, 123, 255, 0.125)", "rgba(255, 7, 58, 0.125)", "rgba(108, 117, 125, 0.125)", "rgba(64,0,128,.3137254901960784)"];
  const fontcolorList = ["#1eba42", "rgb(0, 123, 255)", "#ff073a", "#6c757d", "rgba(150,115,185,.7333333333333333)"];
  const renderList = (styles: any) => {
    const indexofActiveElement = list.indexOf(visibleElement);
    return list.map((items: string, index: number) => (
      <>
        <Tooltip title={items} arrow={true} placement="left" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} open={mouseElementState !== "" && mouseElementState === items}>
          <li>
            <a
              onMouseEnter={(e) => mouseEvent(e, true)}
              onMouseLeave={(e) => mouseEvent(e, false)}
              onTouchEnd={(e) =>
                setTimeout(() => {
                  mouseEvent(e, false);
                }, 100)
              }
              className={items === visibleElement || indexofActiveElement > index ? styles.active : styles.notActive}
              style={{ backgroundColor: bgcolorList[indexofActiveElement] }}
              href={`#${items}`}
            ></a>
          </li>
        </Tooltip>
      </>
    ));
  };

  const mouseEvent = (event: any, check: boolean) => {
    const element = event.target.href.slice(event.target.href.indexOf("#") + 1);
    if (check) {
      setMouseElement(element);
    } else {
      setMouseElement("");
    }
  };

  const menuButtonClicked = () => {
    const list = ["Introduction", "Skills", "Experience", "Education", "Contact"];
    return list.map((items: string) => <a href={`#${items}`}>{items}</a>);
  };

  const isInViewport = (el: Element | null, bool: boolean) => {
    const rect = el && el.getBoundingClientRect();

    if (bool) {
      return (
        rect &&
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect?.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    } else {
      return (
        rect && rect.top <= 200 && rect.left >= 0
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // rect?.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  };

  const progressIndicator = () => {
    var winScroll = document.getElementById("mainPanelElement")!.scrollTop;
    var height = document.getElementById("mainPanelElement")!.scrollHeight - document.getElementById("mainPanelElement")!.clientHeight;
    var scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar")!.style.height = scrolled + "%";
  };

  const scrollEventMainPanel = () => {
    const introductionSection = document.querySelector("#Introduction");
    const skillsSection = document.querySelector("#Skills");
    const experienceSection = document.querySelector("#Experience");
    const educationSection = document.querySelector("#Education");
    const contactSection = document.querySelector("#Contact");
    const isIntroductionSection = isInViewport(introductionSection, true);
    const isSkillsSection = isInViewport(skillsSection, true);
    const isExperienceSection = isInViewport(experienceSection, true);
    const isEducationSection = isInViewport(educationSection, true);
    const isContactSection = isInViewport(contactSection, true);

    if (!isIntroductionSection && !isSkillsSection && !isExperienceSection && !isEducationSection && !isContactSection) {
      const isIntroductionSectionAfterFailure = isInViewport(introductionSection, false);
      const isSkillsSectionAfterFailure = isInViewport(skillsSection, false);
      const isExperienceSectionAfterFailure = isInViewport(experienceSection, false);
      const isEducationSectionAfterFailure = isInViewport(educationSection, false);
      const isContactSectionAfterFailure = isInViewport(contactSection, false);
      isIntroductionSectionAfterFailure && setVisibleElement("Introduction");
      isSkillsSectionAfterFailure && setVisibleElement("Skills");
      isExperienceSectionAfterFailure && setVisibleElement("Experience");
      isEducationSectionAfterFailure && setVisibleElement("Education");
      isContactSectionAfterFailure && setVisibleElement("Contact");
    } else {
      isIntroductionSection && setVisibleElement("Introduction");
      isSkillsSection && setVisibleElement("Skills");
      isExperienceSection && setVisibleElement("Experience");
      isEducationSection && setVisibleElement("Education");
      isContactSection && setVisibleElement("Contact");
    }
    progressIndicator();
  };

  const manageState = () => {
    setmenu(!menu);
  };

  const [menu, setmenu] = useState(false);
  const [mouseElementState, setMouseElement] = useState("");
  const mediumScreenSize = useMediaQuery("(max-width:768px)");
  const smScreenSize = useMediaQuery("(max-width: 360px");
  const [visibleElement, setVisibleElement] = useState("Introduction");

  return (
    <div className={styles.root}>
      {/* {!smScreenSize ? ( */}
      <>
        <div className={styles.rootStyle}>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar} style={{ backgroundColor: bgcolorList[list.indexOf(visibleElement)] }} id="progressBar"></div>
          </div>
        </div>
        <div className={styles.dotstyle}>
          <ul>{renderList(styles)}</ul>
        </div>
      </>
      {/* ) : (
        <div className={styles.topStickyBar}>
          <MenuIcon onClick={manageState} />
          {menu && <ul>{menuButtonClicked()}</ul>}
        </div>
      )} */}
      <div className={` ${styles.contentRoot} ${mediumScreenSize && styles.contentRootOptional}`}>
        <div className={`${styles.leftPanel} ${mediumScreenSize && styles.leftPanelOptional}`}>
          <div className={styles.bookStore} style={{ backgroundColor: "#1e1e30" }}>
            {list.map((values: string, index: number) => {
              if (values === visibleElement)
                return (
                  <div style={{ backgroundColor: bgcolorList[index], transform: "scale(1.2) rotate(10deg)", color: fontcolorList[index] }} className={styles.books}>
                    <Typography className={styles.booksTitle}>{values}</Typography>
                  </div>
                );
              else {
                return (
                  // <StyledComponent>
                  <a
                    className={styles.books}
                    // onClick={() => values === "Introduction" && setVisibleElement(values)}
                    style={{ textDecoration: "none", color: "rgba(108,117,125,.6)" }}
                    href={`#${values}`}
                  >
                    {/* <div className={styles.books}> */}
                    <Typography className={styles.booksTitle}>{values}</Typography>
                    {/* </div> */}
                  </a>
                  // </StyledComponent>
                );
              }
            })}
          </div>
          <Introduction currentElement={visibleElement} index={list.indexOf(visibleElement)} bg={bgcolorList} color={fontcolorList} />
        </div>
        <div id="mainPanelElement" onScroll={scrollEventMainPanel} className={styles.mainPanel}>
          <div id="Introduction" className={styles.introSectionRoot}>
            <IntroductionContent bg={bgcolorList[0]} color={fontcolorList[0]} />
          </div>
          <div id="Skills" style={{ marginTop: 20 }} className={styles.introSectionRoot}>
            <Skills bg={bgcolorList[1]} color={fontcolorList[1]} />
          </div>
          <div id="Experience" style={{ marginTop: 20 }} className={styles.introSectionRoot}>
            {/* <IntroductionContent bg={bgcolorList[2]} color={fontcolorList[2]} /> */}
            <Experience bg={bgcolorList[2]} color={fontcolorList[2]} />
          </div>
          <div id="Education" style={{ marginTop: 20 }} className={styles.introSectionRoot}>
            <IntroductionContent bg={bgcolorList[3]} color={fontcolorList[3]} />
          </div>
          <div id="Contact" style={{ marginTop: 20 }} className={styles.introSectionRoot}>
            <IntroductionContent bg={bgcolorList[4]} color={fontcolorList[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
