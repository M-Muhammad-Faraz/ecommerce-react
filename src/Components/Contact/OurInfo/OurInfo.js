import React from "react";
import classes from "./OurInfo.module.css";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { Fade } from "react-reveal";
const OurInfo = () => {
  return (
    <div className="col-6 d-flex justify-content-center flex-column">
      <Fade bottom delay={300}>
        <div className={classes.getInTouch}>
          <h2>
            GET IN <span>TOUCH</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            commodi, adipisci rerum cumque inventore, enim sit vero, beatae non
            nemo consectetur ipsa. Inventore vitae impedit quam quaerat, a
            reiciendis facilis.consectetur ipsa. Inventore vitae impedit quam
            quaerat, a reiciendis facilis. <br />
            Thanks
          </p>
        </div>
      </Fade>
      <Fade bottom delay={600}>
        <div className={classes.contactInfo}>
          <h2>
            {" "}
            <span>CONTACT</span> INFO
          </h2>
          <ul>
            <li className="d-flex align-items-center">
              <div className={classes.holder}>
                <HiLocationMarker fill="#fff" />
              </div>
              <strong> Address : </strong>
              <div style={{ fontSize: "0.85em", margin: "0px 3px" }}>
                XYX XYyyxXX, Punjab , Pakistan
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className={classes.holder}>
                <HiPhone fill="#fff" />
              </div>
              <strong> Phone : </strong>
              <div style={{ fontSize: "0.85em", margin: "0px 3px" }}>
                XXXXXXXXXX
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className={classes.holder}>
                <HiMail fill="#fff" />
              </div>
              <strong> E-mail : </strong>
              <div style={{ fontSize: "0.85em", margin: "0px 3px" }}>
                XXXXX@XXXX.com
              </div>
            </li>
          </ul>
        </div>
      </Fade>

      <Fade bottom delay={900}>
        <div className={classes.businessHours}>
          <h2>
            BUSINESS <span>HOURS</span>
          </h2>
          <p>
            <strong>Monday - Friday</strong> (8am - 5pm)
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default OurInfo;
