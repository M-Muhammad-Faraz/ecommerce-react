import React, { useEffect, useState } from "react";
import LandingHome from "./LandingHome/LandingHome";
import { client } from "../../lib/client";
import Shipping from "./shipping/Shipping";
import TopHijab from "./TopItems/TopHijabs/TopHijab";
import TopAbaya from "./TopItems/TopAbayas/TopAbaya";
import StayInTouch from "./inTouch/StayInTouch";
import ShareHome from "./ShareHome/ShareHome";
import SHCarousal from "./ShareHome/Carousal/SHCarousal";

import SectionBreak from "../Utility/SectionBreak";
import SocialLinks from "./SocialLinks/SocialLinks";
import CustomerReview from "./CustomerReview/CustomerReview";
import Services from "./Services/Services";

import ldr from "../../Assets/img/loader.svg";

const Home = () => {
  const [loader, setLoader] = useState(true);
  const [landpageItems, setLandpageItems] = useState(null);
  const [spotlightItem, setSpotlightItem] = useState(null);
  const [topHijabItem, setTopHijabItem] = useState(null);
  const [topAbayaItem, setTopAbayaItem] = useState(null);
  useEffect(() => {
    client
      .fetch(`*[_type=="landItems"]`)
      .then((data) => {
        setLandpageItems(data);
        client
          .fetch(`*[_type=="spotlight"]`)
          .then((data1) => {
            setSpotlightItem(data1);
            client
              .fetch(
                `*[_type=="tophijab"]{
          collection,shortDesc,
          primaryProduct->{
            category->,image,name,price
          },
          secondaryProduct->{
            category->,image,name,price
          }
      }`
              )
              .then((data2) => {
                setTopAbayaItem(data2);
                client
                  .fetch(
                    `*[_type=="topabaya"]{
          collection,shortDesc,
          primaryProduct->{
            category->,image,name,price
          },
          secondaryProduct->{
            category->,image,name,price
          }
      }`
                  )
                  .then((data3) => {
                    setTopHijabItem(data3);
                    setLoader(false);
                  })
                  .catch((e) => {});
              })
              .catch((e) => {});
          })
          .catch((e) => {});
      })
      .catch((e) => {});
  }, []);
  return (
    <>
      {loader ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center "
        >
          <img src={ldr} alt="" />
        </div>
      ) : (
        <main>
          <LandingHome
            spotlightdata={spotlightItem[0]}
            carousalData={landpageItems[0]}
          />
          <Shipping />
          <TopAbaya item={topAbayaItem[0]} />
          <TopHijab item={topHijabItem[0]} />
          <StayInTouch />
          <ShareHome />
          <SHCarousal />
          <SectionBreak />
          <SocialLinks />
          <CustomerReview />
          <div style={{ width: "100vw", height: "100px" }}></div>
          <Services />
          <div style={{ width: "100vw", height: "100px" }}></div>
        </main>
      )}
    </>
  );
};

export default Home;
