import React, { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import Payment from "../Payment/Payment";
import About from "../About/About";
import Account from "../Account/Account";
import Contact from "../Contact/Contact";
import Faqs from "../Faqs/Faqs";
import Hijab from "../Hijab/Hijab";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import CustomLink from "../Utility/CustomLink";
import CustomLink2 from "../Utility/CustomLink2";

import classes from "./Header.module.css";
import Product from "../Hijab/Product/Product";
import Store from "../Hijab/Store";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [collapsedNav, setCollapsedNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  var collapsed = false;

  function changeBG() {
    if (window.scrollY > 80 && !scrolled) {
      setScrolled(true);
    }
    if (window.scrollY < 80) {
      setScrolled(false);
    }
  }
  function mediaqueryNav1200(e) {
    // console.log(window.innerWidth);
    if (window.innerWidth < 1200 && !collapsed) {
      setCollapsedNav(true);
      collapsed = true;
    }
    if (window.innerWidth > 1200) {
      setCollapsedNav(false);
      collapsed = false;
    }
  }

  window.addEventListener("scroll", changeBG);
  window.addEventListener("resize", mediaqueryNav1200);

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

        {collapsedNav ? (
          <>
            <div className={classes.mainNav + " " + classes.mr2}>
              <Link to={"/"}>
                <h2 className={classes.logo}>
                  Hijab <span>World</span>
                </h2>
              </Link>
            </div>
            <div
              className={
                menuOpen
                  ? classes.sidebar + " " + classes.sidebarShow
                  : classes.sidebar
              }
            >
              <div className="d-flex justify-content-end">
                <button
                  style={{
                    fontSize: "1.5em",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  type=""
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <AiOutlineClose fill="#b79b6c" />
                </button>
              </div>
              <div className={classes.sideNav} style={{}}>
                <div className={classes.sideNavHead}></div>
                <div className={classes.sideNavItems}>
                  <div className="d-flex align-items-center">
                    <CustomLink2 to={"/"}>Home</CustomLink2>
                  </div>
                  <div className="d-flex align-items-center">
                    <CustomLink2 to={"/store"}>Store</CustomLink2>
                  </div>
                  <div className="d-flex align-items-center">
                    <CustomLink2 to={"/about-us"}>About Us</CustomLink2>
                  </div>
                  <div className="d-flex align-items-center">
                    <CustomLink2 to={"/faqs"}>FAQs</CustomLink2>
                  </div>
                  <div className="d-flex align-items-center">
                    <CustomLink2 to={"/contact-us"}>Contact Us</CustomLink2>
                  </div>
                </div>
                <div className={classes.sideNavFooter}></div>
              </div>
            </div>
          </>
        ) : (
          <div className={classes.mainNav}>
            <ul className="d-flex align-items-center">
              <li>
                <CustomLink to={"/"}>Home</CustomLink>
              </li>
              <li className="position-relative">
                <CustomLink to={"/store"}>Store</CustomLink>
                <span className={classes.notify}>34</span>
              </li>
              <li>
                <CustomLink to={"/about-us"}>About Us</CustomLink>
              </li>
              <li>
                <Link to={"/"}>
                  <h2 className={classes.logo}>
                    Hijab <span>World</span>
                  </h2>
                </Link>
              </li>
              <li className="position-relative">
                <CustomLink to={"/payment"}>Payment</CustomLink>
              </li>
              <li>
                <CustomLink to={"/faqs"}>FAQs</CustomLink>
              </li>
              <li>
                <CustomLink to={"/contact-us"}>Contact Us</CustomLink>
              </li>
            </ul>
          </div>
        )}
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
          {collapsedNav ? (
            <div>
              <button
                type=""
                style={{
                  fontSize: "1.5em",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onClick={() => {
                  setMenuOpen(true);
                }}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store/:slug" element={<Product />} />
      </Routes>
    </>
  );
};

export default Header;
