import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../Utility/PrimaryBtn";
import classes from "./StayInTouch.module.css";
import { Fade } from "react-reveal";
import { client } from "../../../lib/client";
const StayInTouch = () => {
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  const [email, setEmail] = useState("");
  const handler = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className={classes.Disp}>
      <div className={classes.DispOverlay}></div>
      <Fade bottom>
        <div className={classes.inTouchCard}>
          <div className={"container " + classes.subscribe}>
            <h3>Let's stay in touch</h3>
            <div>
              <p>
                Enjoy 15% off your first order when you join our mailing list.
              </p>
              <div className={classes.inputs}>
                <input
                  type="text"
                  onChange={handler}
                  placeholder="Enter Your Email Address"
                />

                <PrimaryBtn
                  onClick={() => {
                    if (ValidateEmail(email)) {
                      const mutations = {
                        _type: "emails",
                        email: email,
                      };
                      client
                        .create(mutations)
                        .then((result) => {})
                        .catch((error) => console.error(error));
                    } else {
                    }
                  }}
                >
                  Submit
                </PrimaryBtn>
              </div>
              <p>We respect your privacy, so we never share your info.</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default StayInTouch;
