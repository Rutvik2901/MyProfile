import { Fade, Tooltip } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import style from "./styles/index";

const HomePage = (props: any) => {
  const styles = style(props);

  const renderList = (styles: any) => {
    const list = ["Home", "About", "Contact", "Portfolio", "Blog"];
    const indexofActiveElement = list.indexOf(visibleElement);
    return list.map((items: string, index: number) => (
      <>
        <Tooltip
          title={items}
          arrow={true}
          placement="left"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          open={mouseElementState !== "" && mouseElementState === items}
        >
          <li>
            <a
              onMouseEnter={(e) => mouseEvent(e, true)}
              onMouseLeave={(e) => mouseEvent(e, false)}
              className={
                items === visibleElement || indexofActiveElement > index
                  ? styles.active
                  : styles.notActive
              }
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
    const list = ["Home", "About", "Contact", "Portfolio", "Blog"];
    return list.map((items: string) => <a href={`#${items}`}>{items}</a>);
  };

  const isInViewport = (el: Element | null) => {
    const rect = el && el.getBoundingClientRect();
    return (
      rect &&
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect?.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  document.addEventListener(
    "scroll",
    () => {
      const box = document.querySelector("#Home");
      const about = document.querySelector("#About");
      const contact = document.querySelector("#Contact");
      const portfolio = document.querySelector("#Portfolio");
      const blog = document.querySelector("#Blog");
      const messageText = isInViewport(box);
      const aboutElement = isInViewport(about);
      const contactElement = isInViewport(contact);
      const portfolioElement = isInViewport(portfolio);
      const blogElement = isInViewport(blog);

      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      document.getElementById("progressBar")!.style.height = scrolled + "%";

      messageText && setVisibleElement("Home");
      aboutElement && setVisibleElement("About");
      contactElement && setVisibleElement("Contact");
      portfolioElement && setVisibleElement("Portfolio");
      blogElement && setVisibleElement("Blog");
    },
    {
      passive: true,
    }
  );

  const manageState = () => {
    setmenu(!menu);
  };

  const renderListorStickynav = () => {
    var x = window.matchMedia("(min-width: 359px)");
    myFunction(x); // Call listener function at run time
    x.addEventListener("change", myFunction);
  };

  const myFunction = (x: any) => {
    if (x && x.matches) {
      setstate(true);
    } else {
      setstate(false);
    }
  };

  const [state, setstate] = useState(true);
  const [menu, setmenu] = useState(false);
  const [visibleElement, setVisibleElement] = useState("Home");
  const [mouseElementState, setMouseElement] = useState("");

  useEffect(() => {
    renderListorStickynav();
  });

  return (
    <>
      {state ? (
        <>
          <div className={styles.rootStyle}>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} id="progressBar"></div>
            </div>
          </div>
          <div className={styles.dotstyle}>
            <ul>{renderList(styles)}</ul>
          </div>
        </>
      ) : (
        <div className={styles.topStickyBar}>
          <MenuIcon onClick={manageState} />
          {menu && <ul>{menuButtonClicked()}</ul>}
        </div>
      )}
      <div>
        <div id="Home" style={{ height: "90vh" }}>
          Hello There
        </div>

        <div id="About" style={{ height: "90vh" }}>
          About
        </div>
        <div id="Contact" style={{ height: "90vh" }}>
          Contact
        </div>
        <div id="Portfolio" style={{ height: "90vh" }}>
          Portfolio
        </div>
        <div id="Blog" style={{ height: "90vh" }}>
          Blog
        </div>
      </div>
    </>
  );
};

export default HomePage;
