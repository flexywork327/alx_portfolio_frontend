import React, { useEffect } from "react";
import axios from "axios";

const HeroPage = () => {
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "js/main.js";
    // script.async = true;
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };

    // calling the categories api
    axios
      .get(`${process.env.REACT_APP_Base_url}/products/product_category`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars" />
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <a href="#/">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="#/">Vegetables</a>
                  </li>
                  <li>
                    <a href="#/">Fruit &amp; Nut Gifts</a>
                  </li>
                  <li>
                    <a href="#/">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="#/">Ocean Foods</a>
                  </li>
                  <li>
                    <a href="#/">Butter &amp; Eggs</a>
                  </li>
                  <li>
                    <a href="#/">Fastfood</a>
                  </li>
                  <li>
                    <a href="#/">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="#/">Papayaya &amp; Crisps</a>
                  </li>
                  <li>
                    <a href="#/">Oatmeal</a>
                  </li>
                  <li>
                    <a href="#/">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+233 555 342 984</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div className="hero__item set-bg">
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#/" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
