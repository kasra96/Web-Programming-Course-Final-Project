import React, { Component } from "react";
import "../assets/main.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="footer">
        <div class="footer-sub-section1">
          <span class="gray-text">
            مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است.
            ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های
            اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید
          </span>
        </div>
        <div class="footer-sub-section2">
          <hr size="2px" class="line2 color1" />
          <span class="white-text">تماس با ریحون</span>
          <span class="gray-text">درباره ریحون</span>
          <span class="gray-text">تماس با ما</span>
          <span class="gray-text">وبلاگ ریحون</span>
        </div>
        <div class="footer-sub-section2">
          <hr size="2px" class="line2 color2" />
          <span class="white-text">رستوران‌ها</span>
          <span class="gray-text">ثبت رستوران</span>
        </div>
        <div class="footer-sub-section2">
          <hr size="2px" class="line2 color3" />
          <span class="white-text">پشتیبانی ریحون</span>
          <span class="gray-text">سوالات متداول</span>
          <span class="gray-text">تماس با پشیبانی</span>
          <span class="gray-text">قوانین و مقررات</span>
        </div>
        <div class="footer-sub-section2">
          <hr size="2px" class="line2 color4" />
          <span class="white-text">اپلیکیشن‌های موبایل</span>
          <span class="gray-text" />
        </div>
      </footer>
    );
  }
}

export default Footer;
