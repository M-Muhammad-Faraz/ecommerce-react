import { useState } from "react";

import { GoPlus } from "react-icons/go";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";

import { Animated } from "react-animated-css";

import classes from "./Side.module.css";

const Side = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <div
      className={
        "col-auto d-flex flex-column justify-content-end align-items-center nopadding"
      }
      style={{ height: "inherit" }}
    >
      <div className={classes.share}>SHARE</div>
      <Animated
        animationIn="slideInUp"
        animationOut="fadeOutDown"
        isVisible={show}
        animateOnMount={false}
      >
        <div className={"" + classes.ShowHide}>
          <ul>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsWhatsapp />
            </li>
          </ul>
        </div>
      </Animated>

      <button className={classes.floatingActionBtn} onClick={toggle}>
        <GoPlus />
      </button>
    </div>
  );
};

export default Side;
