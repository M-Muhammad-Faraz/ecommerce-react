import React from "react";
import Jump from "react-reveal/Jump";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
const SocialLinks = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Jump top delay={100}>
        <div
          className="mx-3"
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaFacebookF
            style={{
              fontSize: "1em",
              marginLeft: "1em",
              marginRight: "1em",
              fill: "#4267B2",
            }}
          />
          <a
            style={{ color: "#32353c", textDecoration: "none" }}
            href="https://www.facebook.com"
          >
            Facebook
          </a>
        </div>
      </Jump>
      <Jump top delay={200}>
        <div
          className="mx-3"
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsInstagram
            style={{
              fontSize: "1em",
              marginLeft: "1em",
              marginRight: "1em",
              fill: "#C13584",
            }}
          />
          <a
            style={{ color: "#32353c", textDecoration: "none" }}
            href="https://www.instagram.com"
          >
            Instagram
          </a>
        </div>
      </Jump>
      <Jump top delay={300}>
        <div
          className="mx-3"
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsTwitter
            style={{
              fontSize: "1em",
              marginLeft: "1em",
              marginRight: "1em",
              fill: "#1DA1F2",
            }}
          />
          <a
            style={{ color: "#32353c", textDecoration: "none" }}
            href="https://www.twitter.com"
          >
            Twitter
          </a>
        </div>
      </Jump>
      <Jump top delay={400}>
        <div
          className="mx-3"
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsWhatsapp
            style={{
              fontSize: "1em",
              marginLeft: "1em",
              marginRight: "1em",
              fill: "#25D366",
            }}
          />
          <a
            style={{ color: "#32353c", textDecoration: "none" }}
            href="https://www.whatsapp.com"
          >
            Whatsapp
          </a>
        </div>
      </Jump>
    </div>
  );
};

export default SocialLinks;
