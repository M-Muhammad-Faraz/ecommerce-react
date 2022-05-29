import React, { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";

import Abaya from "../Abaya/Abaya";
import About from "../About/About";
import Account from "../Account/Account";
import Contact from "../Contact/Contact";
import Faqs from "../Faqs/Faqs";
import Hijab from "../Hijab/Hijab";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import CustomLink from "../Utility/CustomLink";

import classes from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  function changeBG() {
    if (window.scrollY > 80 && !scrolled) {
      setScrolled(true);
    }
    if (window.scrollY < 80) {
      setScrolled(false);
    }
  }

  window.addEventListener("scroll", changeBG);

  return (
    <>
      <nav
        className={
          scrolled
            ? classes.navibar +
              " " +
              classes.active +
              " d-flex justify-content-between align-items-center fixed-top "
            : classes.navibar +
              " d-flex justify-content-between align-items-center fixed-top "
        }
      >
        <div
          className={" d-flex justify-content-evenly " + classes.langAndSerc}
        >
          <div className={classes.lang}>English</div>
          <div
            className="position-relative"
            style={{ width: "26px", height: "24px" }}
          >
            <div className={classes.search}>
              <div
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key == "Escape") {
                    const elem = document.querySelector("." + classes.search);
                    elem.classList.remove(classes.active);

                    const elem2 = document.querySelector("." + classes.input);
                    elem2.classList.remove(classes.active);
                  }
                }}
                onClick={() => {
                  const elem = document.querySelector("." + classes.search);
                  elem.classList.add(classes.active);
                  const elem2 = document.querySelector("." + classes.input);
                  elem2.classList.add(classes.active);
                }}
                // onBlur={() => {
                //   const elem = document.querySelector("." + classes.search);
                //   elem.classList.remove(classes.active);
                //
                //   const elem2 = document.querySelector("." + classes.input);
                //   elem2.classList.remove(classes.active);
                // }}
              >
                <BsSearch />
                <input
                  type="text"
                  name="searchprod"
                  className={classes.input}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.mainNav}>
          <ul className="d-flex align-items-center">
            <li>
              <CustomLink to={"/"}>Home</CustomLink>
            </li>
            <li className="position-relative">
              <CustomLink to={"/hijab"}>Hijab</CustomLink>
              <span className={classes.notify}>34</span>
            </li>
            <li className="position-relative">
              <CustomLink to={"/abayas"}>Abayas</CustomLink>
              <span className={classes.notify}>28</span>
            </li>
            <li>
              <Link to={"/"}>
                <h2 className={classes.logo}>
                  Hijab <span>World</span>
                </h2>
              </Link>
            </li>
            <li>
              <CustomLink to={"/about-us"}>About Us</CustomLink>
            </li>
            <li>
              <CustomLink to={"/faqs"}>FAQs</CustomLink>
            </li>
            <li>
              <CustomLink to={"/contact-us"}>Contact Us</CustomLink>
            </li>
          </ul>
        </div>
        <div className={"d-flex align-items-center " + classes.accAcart}>
          <div>
            <Link to={"/accounts"} className={classes.account}>
              My Account
            </Link>
          </div>
          <div>
            <Link to={"/cart"}>
              <div className={classes.cart}>
                <MdOutlineShoppingBag />
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hijab" element={<Hijab />} />
        <Route path="/abayas" element={<Abaya />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Header;
