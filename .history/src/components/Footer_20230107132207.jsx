import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/about",
  },
  // {
  //     display: "Tuyển dụng",
  //     path: "/about"
  // },
  // {
  //     display: "Tin tức",
  //     path: "/about"
  // },
  {
    display: "Hệ thống cửa hàng",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  // {
  //     display: "Chính sách hoàn tiền",
  //     path: "/about"
  // }
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đặt hàng <strong>083.36.56789</strong>
              </p>
              <p>
                Mọi thắc mắc liên hệ Mr.Túc <strong>083.36.56789</strong>
              </p>
              <p>
                Tài khoản ngân hàng duy nhất{" "}
                <strong> MB Bank : 8833336668</strong>
              </p>
              <p style={{ color: "red" }}>Xin cảm ơn !</p>
              {/* <p>
                                Góp ý, khiếu nại <strong>0123456789</strong>
                            </p> */}
            </div>
          </div>
          <div>
            <div className="footer__title">Về chúng tôi</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about" style={{background: "red"}}>
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p style={{color: "#fff", marginLeft: '10px'}}>Chúng tôi chuyên MUA BÁN - CHO THUÊ - CẦM CỐ Sim Số Đẹp.</p>
            <p style={{color: "#fff", marginLeft: "10px"}}>simsodeptuc36.vn - Nâng Tầm Gia Trị Của Bạn Trên Từng Con Số</p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
