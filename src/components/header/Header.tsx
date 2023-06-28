import React from "react";
import A from "../../assets/img/logo.png";
import language from "../../assets/img/language.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope" /> justlink@gmail.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#/">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#/">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#/">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="#/">
                      <i className="fa fa-pinterest-p" />
                    </a>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="/login">
                      <i className="fa fa-user" /> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="/">
                  <img src={A} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/shop">Shop</a>
                  </li>
                  <li>
                    <a href="#/">Pages</a>
                    <ul className="header__menu__dropdown">
                      <li>
                        <a href="shop-details.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="shoping-cart.html">Shoping Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Check Out</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="/cart">
                      <i className="fa fa-shopping-bag" /> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
