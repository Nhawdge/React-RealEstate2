import React from "react";
import blogheroimg from "./img/blogheroimg.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./LPBlog.css";

function LPBlog() {
  return (
    <div className="lp_blog">
      <h2>FL Realty Blog</h2>
      <p className="lp_header_p">Looking for informational strategies on buying real estate? Read our blog to learn more.</p>
      <div className="lp_blog_flex">
        <div className="lpb_item">
          <div className="blog_img">
            <a href="/BuyingAHome">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </a>
          </div>
          <div className="blog_item_content">
            <a href="/BuyingAHome" className="blog_title">
              Buying Homes
            </a>
            <p className="blog_date">01/01/2021</p>
            <p className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor...
            </p>
            <a href="/BuyingAHome" className="blog_button ">
              Read More <ArrowForwardIosIcon />
            </a>
          </div>
        </div>
        <div className="lpb_item">
          <div className="blog_img">
            <a href="/BuyingAHome">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </a>
          </div>
          <div className="blog_item_content">
            <a href="/BuyingAHome" className="blog_title">
              Selling Homes
            </a>
            <p className="blog_date">01/01/2021</p>
            <p className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor...
            </p>
            <a href="/BuyingAHome" className="blog_button ">
              Read More <ArrowForwardIosIcon />
            </a>
          </div>
        </div>
        <div className="lpb_item">
          <div className="blog_img">
            <a href="/BuyingAHome">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </a>
          </div>
          <div className="blog_item_content">
            <a href="/BuyingAHome" className="blog_title">
              Estimating Property Values
            </a>
            <p className="blog_date">01/01/2021</p>
            <p className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor...
            </p>
            <a href="/BuyingAHome" className="blog_button ">
              Read More <ArrowForwardIosIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="lpbb">
      <a href="/BlogList" className="lp_blog_button">All Blogs</a>
      </div>
    </div>
  );
}

export default LPBlog;
