import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  // {
  //   display: "Hướng dẫn mua sim",
  //   path: "/",
  // },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <>
      <div className="header" ref={headerRef}>
        <div className="header__logo">
          <Link to="/">
            {/* <img src={logo} style={{ width: "90px" }} alt="" /> */}
          </Link>
        </div>
        {/* <img src={logo1} style={{ width: "100%", height: "200px" }} alt="" /> */}

        <div className="container">
          <div className="header__menu">
            <div className="header__menu__mobile-toggle" onClick={menuToggle}>
              <i className="bx bx-menu-alt-left"></i>
            </div>
            <div className="header__menu__left" ref={menuLeft}>
              <div className="header__menu__left__close" onClick={menuToggle}>
                <i className="bx bx-chevron-left"></i>
              </div>
              {mainNav.map((item, index) => (
                <div
                  key={index}
                  className={`header__menu__item header__menu__left__item ${
                    index === activeNav ? "active" : ""
                  }`}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="header__menu__right">
              {/* <div className="header__menu__item header__menu__right__item">
                <i className="bx bx-search"></i>
              </div> */}
              <div className="header__menu__item header__menu__right__item">
                <Link to="/cart">
                  <i className="bx bx-shopping-bag"></i>
                </Link>
              </div>
              {/* <div className="header__menu__item header__menu__right__item">
                <i className="bx bx-user"></i>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
