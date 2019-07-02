import React, { Component } from "react";
import "../assets/main.css";
import "../assets/global.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="footer-sub-section1">
          <span className="gray-text">
            مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است.
            ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های
            اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید
          </span>
        </div>
        <div className="footer-sub-section2">
          <hr className="line2 color1" />
          <span className="white-text">تماس با ریحون</span>
          <span className="gray-text">درباره ریحون</span>
          <span className="gray-text">تماس با ما</span>
          <span className="gray-text">وبلاگ ریحون</span>
        </div>
        <div className="footer-sub-section2">
          <hr className="line2 color2" />
          <span className="white-text">رستوران‌ها</span>
          <span className="gray-text">ثبت رستوران</span>
        </div>
        <div className="footer-sub-section2">
          <hr className="line2 color3" />
          <span className="white-text">پشتیبانی ریحون</span>
          <span className="gray-text">سوالات متداول</span>
          <span className="gray-text">تماس با پشیبانی</span>
          <span className="gray-text">قوانین و مقررات</span>
        </div>
        <div className="footer-sub-section2">
          <hr className="line2 color4" />
          <span className="white-text">اپلیکیشن‌های موبایل</span>
          <span className="gray-text" />
        </div>
      </footer>
    );
  }
}

export default Footer;
