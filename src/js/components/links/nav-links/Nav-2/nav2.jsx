import React from "react";
import './nav2.scss';

/**
 * Full Screen Navigation
 * Simple Demo using React make a 
 * page that is also the navigation.
 * Tried to keep this mostly CSS and 
 * just use react to keep state
 * and change classnames.
 *
 * Click a header name to open
 */

 const Nav2 = () => {
    const [textContent, updateText] = React.useState(
      "type and select to cut or copy text."
    );
    const [hoverQuad, updateQuad] = React.useState("");
    const [activeQuad, updateActive] = React.useState("");
    const [showError, updateError] = React.useState(false);
    const deBounce = null;
  
    const handleClick = quad => {
      if (quad === activeQuad) {
        updateActive("");
      } else {
        updateActive(quad);
      }
    };
  
    const handleExit = () => {
      deBounce = setTimeout(updateQuad(""), 300);
    };
  
    let rowA = "row ";
    let rowB = "row ";
    let colA = "column bg1 ";
    let colB = "column bg2 ";
    let colC = "column bg3 ";
    let colD = "column bg4 ";
  
    // it's kind of ugly but effective
    // just swapping some classnames
    // based on active or just hover
    // css flex does the rest
  
    if (activeQuad === "") {
      switch (hoverQuad) {
        case "colA":
          rowA += "onHover";
          rowB += "offHover";
          colA += "onHover";
          colC += "onHover";
          colB += "offHover";
          colD += "offHover";
          break;
  
        case "colB":
          rowA += "onHover";
          rowB += "offHover";
          colB += "onHover";
          colD += "onHover";
          colA += "offHover";
          colC += "offHover";
          break;
  
        case "colC":
          rowA += "offHover";
          rowB += "onHover";
          colC += "onHover";
          colA += "onHover";
          colB += "offHover";
          colD += "offHover";
          break;
  
        case "colD":
          rowA += "offHover";
          rowB += "onHover";
          colD += "onHover";
          colB += "onHover";
          colA += "offHover";
          colC += "offHover";
          break;
  
          defaut: break;
      }
    } else {
      switch (activeQuad) {
        case "colA":
          rowA += "active";
          rowB += "off";
          colA += "show";
          colC += "show";
          colB += "hide";
          colD += "hide";
          break;
  
        case "colB":
          rowA += "active";
          rowB += "off";
          colB += "show";
          colD += "show";
          colA += "hide";
          colC += "hide";
          break;
  
        case "colC":
          rowA += "off";
          rowB += "active";
          colA += "show";
          colC += "show";
          colB += "hide";
          colD += "hide";
          break;
  
        case "colD":
          rowA += "off";
          rowB += "active";
          colB += "show";
          colD += "show";
          colA += "hide";
          colC += "hide";
          break;
  
          defaut: break;
      }
    }
  
    return (
      <div className="container">
        <div className={rowA}>
          <div
            className={colA}
            onMouseEnter={() => {
              updateQuad("colA");
            }}
            onMouseLeave={() => {
              handleExit();
            }}
          >
            <div
              role="button"
              className="ct colA"
              onClick={() => {
                handleClick("colA");
              }}
            >
              home
              <div
                className="close"
                style={{
                  float: "right"
                }}
              >
                x
              </div>
            </div>
          </div>
          <div
            className={colB}
            onMouseEnter={() => {
              updateQuad("colB");
            }}
            onMouseLeave={() => {
              handleExit();
            }}
          >
            <div
              role="button"
              className="ct colB"
              onClick={() => {
                handleClick("colB");
              }}
            >
              about me
              <div
                className="close"
                style={{
                  float: "left"
                }}
              >
                x
              </div>
            </div>
          </div>
        </div>
        <div className={rowB}>
          <div
            className={colC}
            onMouseEnter={() => {
              updateQuad("colC");
            }}
            onMouseLeave={() => {
              handleExit();
            }}
          >
            <div
              role="button"
              className="ct colC"
              onClick={() => {
                handleClick("colC");
              }}
            >
              portfolio
              <div
                className="close"
                style={{
                  float: "right"
                }}
              >
                x
              </div>
            </div>
          </div>
          <div
            className={colD}
            onMouseEnter={() => {
              updateQuad("colD");
            }}
            onMouseLeave={() => {
              handleExit();
            }}
          >
            <div
              role="button"
              className="ct colD"
              onClick={() => {
                handleClick("colD");
              }}
            >
              contact
              <div
                className="close"
                style={{
                  float: "left"
                }}
              >
                x
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Attach to DOM and BOOM lets go!
  // ReactDOM.render(<Nav2 />, document.getElementById("react-mount"));
export default Nav2;