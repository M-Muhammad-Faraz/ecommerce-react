import React from "react";
import Service from "./Service";
import { IoBagCheckOutline } from "react-icons/io5";
import {
  GrSecure,
  GrCircleQuestion,
  GrCheckboxSelected,
  GrRevert,
} from "react-icons/gr";

import {
  BsClipboardCheck,
  BsFillShieldLockFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { AiOutlineUndo } from "react-icons/ai";
import Divider from "./Divider";
const Services = () => {
  return (
    <div className="container d-flex justify-content-evenly align-items-center my-5">
      <Service
        id={"text-01"}
        title={"Complete Checkout"}
        icon={
          <GrCheckboxSelected
            className="text-01"
            fill="none"
            stroke="#000"
            strokeWidth={0.125}
          />
        }
        subtitle={"View your cart before buying."}
        bl={true}
      />
      <Divider />
      <Service
        id={"s2"}
        title={"Free Returns"}
        icon={
          <GrRevert
            className="text-01"
            fill="none"
            stroke="#000"
            strokeWidth={0.125}
          />
        }
        subtitle={"30 day free return policy."}
        bl={true}
      />
      <Divider />
      <Service
        id={"s3"}
        title={"Secured Payment"}
        icon={
          <GrSecure
            className="text-01"
            fill="none"
            stroke="#000"
            strokeWidth={0.125}
          />
        }
        subtitle={"We accept Easypaisa / JazzCash."}
        bl={true}
      />
      <Divider />
      <Service
        id={"s4"}
        title={"Customer Support"}
        icon={
          <GrCircleQuestion
            className="text-01"
            fill="none"
            stroke="#000"
            strokeWidth={0.125}
          />
        }
        subtitle={"Top notch customer service."}
        bl={false}
      />
    </div>
  );
};

export default Services;
