import React, { Component } from "react";

class MainBody extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="first-section">
          <div class="text-div1">
            <img
              class="reyhoon-logo"
              src={require("../images/logo.png")}
              alt="reyhoon-logo"
            />
            <h1>سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فودها</h1>
            <h5 class="header-class1">
              برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند،
              منطقه خود را وارد کنید
            </h5>
          </div>
          <div class="search-bar shadow">
            <div class="bordered-text">
              <i class="fas fa-angle-down" />
              <p class="tehran-text">تهران</p>
            </div>
            <fieldset class="fieldset-class1">
              <legend>منطقه خود را وارد کنید</legend>
              <input
                type="text"
                class="text-input"
                placeholder="مثلا نیاوران"
              />
            </fieldset>
            <button class="search-icon">
              <i class="fas fa-search" />
            </button>
          </div>
          <div class="recent-search">
            <a class="recent-search-text" href="register_login.html">
              آخرین جستجو: تهران، شیخ هادی، چهارراه ولیعصر{" "}
            </a>
          </div>
        </div>
        <div class="other-sections">
          <div class="guide-section">
            <div class="guide-section-item">
              <span class="guide-section-item-header">
                غذایتان را نوش‌جان کنید
              </span>
              <div class="guide-section-item-describtion shadow">
                <img
                  class="g-s-i-d-image"
                  src={require("../images/3.png")}
                  alt=""
                />
                <p class="g-s-i-d-text">
                  درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید
                </p>
              </div>
            </div>
            <div class="guide-section-item">
              <span class="guide-section-item-header">
                غذای خود را انتخاب کنید
              </span>
              <div class="guide-section-item-describtion  shadow">
                <img
                  class="g-s-i-d-image"
                  src={require("../images/2.png")}
                  alt=""
                />
                <p class="g-s-i-d-text">
                  غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود
                  را ثبت کنید
                </p>
              </div>
            </div>
            <div class="guide-section-item">
              <span class="guide-section-item-header">
                شهر و منطقه خود را وارد کنید
              </span>
              <div class="guide-section-item-describtion  shadow">
                <img
                  class="g-s-i-d-image"
                  src={require("../images/1.png")}
                  alt=""
                />
                <p class="g-s-i-d-text">
                  منوی مورد علاقه خود را از بین بیش از 4000 رستوران خوب در تهران
                  و شهرستان‌ها جستجو کنید
                </p>
              </div>
            </div>
          </div>

          <div class="first-restaurant-section">
            <span class="text-header1 centered-text">
              رستوران‌‌ها و فست فود‌های برتر ماه بر اساس امتیاز‌دهی کاربران
            </span>
            <div class="restaurant-set">
              <div class="restaurant-subset">
                <div class="logo-container shadow">
                  <img src="" alt="restaurant-logo" />
                </div>
                <span class="restaurant-name centered-text" />
                <span class="food-names centered-text" />
                <span class="restaurant-address centered-text" />
                <button class="start-order">شروع سفارش</button>
              </div>
              <div class="restaurant-subset">
                <div class="logo-container shadow">
                  <img src="" alt="restaurant-logo" />
                </div>
                <span class="restaurant-name centered-text">شیلا (مطهری)</span>
                <span class="food-names centered-text">
                  فست‌ فود . پیتزا . ساندویچ . برگر
                </span>
                <span class="restaurant-address centered-text">
                  ولیعصر، مطهری، فتحی شقاقی
                </span>
                <button class="start-order">شروع سفارش</button>
              </div>
              <div class="restaurant-subset">
                <div class="logo-container shadow">
                  <img src="" alt="restaurant-logo" />
                </div>
                <span class="restaurant-name centered-text">
                  باگت (اندرزگو)
                </span>
                <span class="food-names centered-text">
                  فست‌ فود . پیتزا . ساندویچ . برگر
                </span>
                <span class="restaurant-address centered-text">
                  ولیعصر، مطهری، فتحی شقاقی
                </span>
                <button class="start-order">شروع سفارش</button>
              </div>
            </div>
          </div>

          <div class="second-restaurant-section">
            <div id="s-r-s-subsection">
              <span id="title1">رستوران‌های خوب تهران در ریحون</span>
              <div class="restaurants-row">
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
              </div>
              <div class="restaurants-row">
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
              </div>
              <div class="restaurants-row">
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
                <div class="restaurant-container">
                  <div class="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span class="small-rest-name centered-text" />
                </div>
              </div>
            </div>
          </div>
          <div class="foods-section">
            <span class="text-header1 centered-text">غذا چی میل دارید؟</span>
            <span class="food-names centered-text">
              صبحانه، ناهار، شام یا هر چیزی که میل دارید انتخاب کنید
            </span>
            <div class="food-pics">
              <div id="food-image1">
                <span class="food-name">ساندویچ</span>
                <span class="food-name-describtion">1000 رستوران فعال</span>
              </div>
              <div id="food-image2">
                <span class="food-name">ساندویچ</span>
                <span class="food-name-describtion">1000 رستوران فعال</span>
              </div>
              <div id="food-image3">
                <span class="food-name">ساندویچ</span>
                <span class="food-name-describtion">1000 رستوران فعال</span>
              </div>
              <div id="food-image4">
                <span class="food-name">ساندویچ</span>
                <span class="food-name-describtion">1000 رستوران فعال</span>
              </div>
            </div>
            <span class="food-names centered-text">انتخاب غذاهای بیشتر</span>
            <div class="food-buttons" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainBody;
