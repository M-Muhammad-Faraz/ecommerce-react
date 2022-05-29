import React, { useState } from "react";
import pic from "../../../Assets/img/prof.png";
import classes from "./Question.module.css";
import { Slide } from "react-reveal";

const Question = () => {
  function formHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="col-6 d-flex align-items-center">
      <Slide left>
        <div className="row">
          <div className="col-6">
            <h2 className={classes.Header}>
              ANY QUESTIONS<span style={{ color: "#b79b6c" }}>?</span>
            </h2>
            <div className={classes.subHeader}> Ask Us!</div>
            <form
              onSubmit={formHandler}
              id="contactForm"
              name="contactForm"
              className="contactForm"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className={"form-control " + classes.formInput}
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className={"form-control " + classes.formInput}
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className={"form-control " + classes.formInput}
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className={"form-control " + classes.formInput}
                      id="message"
                      cols={30}
                      rows={6}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <div className={classes.wrapper}>
                      <button
                        className={classes.btns}
                        onClick={(e) => {
                          const target = e.currentTarget;
                          target.classList.toggle(classes.is_active);
                          setTimeout(() => {
                            target.classList.remove(classes.is_active);
                          }, 3000);
                        }}
                      >
                        <span>Send Message</span>
                        <div className={classes.success}>
                          <svg
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            viewBox="0 0 29.756 29.756"
                            style={{
                              enableBackground: "new 0 0 29.756 29.756",
                            }}
                            xmlSpace="preserve"
                          >
                            <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-6">
            <img
              src={pic}
              alt=""
              width={"100%"}
              height="100%"
              style={{ transform: "translateY(-30%) translateX(-10%)" }}
            />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Question;
