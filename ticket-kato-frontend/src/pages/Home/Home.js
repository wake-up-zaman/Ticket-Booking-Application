import React from "react";
import Search from "../Searching/Search";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Business from "./Business";
import Offer from "./Offer";
import { BackTop } from "antd";
import "./Home.css"

import Faq from "./Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Search></Search>
      <Offer></Offer>
      <Faq></Faq>
      <Business></Business>
      <BackTop />
      <strong className="site-back-top-basic"> </strong>
      {/* <TermsConditions></TermsConditions> */}
      {/* <Privacy></Privacy> */}
      {/* <Feedback></Feedback> */}
      {/* <Refund></Refund> */}
      {/* <BagInfo></BagInfo> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
