import React, { Component } from "react";
import "../js/main";
import "../assets/main.css";

class MainBody extends Component {
  state = {};

  hancleClick() {
    console.log("clicked");
  }

  render() {
    return (
      <React.Fragment>
        <div className="first-section">
          <div className="text-div1">
            <img
              className="reyhoon-logo"
              src={require("../images/logo.png")}
              alt="reyhoon-logo"
            />
            <h1>سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فودها</h1>
            <h5 className="header-class1">
              برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند،
              منطقه خود را وارد کنید
            </h5>
          </div>
          <div className="search-bar shadow row">
            <div className="bordered-text">
              <i className="fas fa-angle-down" />
              <select id="selectID">
                <option value="default" disabled="">
                  شهر
                </option>
                <option value="تهران">تهران</option>
                <option value="تبریز">تبریز</option>
              </select>
            </div>
            <fieldset className="fieldset-class1 scheduler-border">
              <legend className="scheduler-border">
                منطقه خود را وارد کنید
              </legend>
              <input
                type="text"
                id="searchInput"
                className="text-input"
                placeholder="مثلا نیاوران"
              />
            </fieldset>
            <button
              className="search-icon"
              onClick={() =>
                this.props.searchMethod(
                  document.getElementById("searchInput").value,
                  document.getElementById("selectID").value
                )
              }
            >
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="recent-search">
            <a className="recent-search-text" href="register_login.html">
              آخرین جستجو: تهران، شیخ هادی، چهارراه ولیعصر{" "}
            </a>
          </div>
        </div>
        <div className="other-sections">
          <div className="guide-section">
            <div className="guide-section-item">
              <span className="guide-section-item-header">
                غذایتان را نوش‌جان کنید
              </span>
              <div className="guide-section-item-describtion shadow">
                <img
                  className="g-s-i-d-image"
                  src={require("../images/3.png")}
                  alt=""
                />
                <p className="g-s-i-d-text">
                  درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید
                </p>
              </div>
            </div>
            <div className="guide-section-item">
              <span className="guide-section-item-header">
                غذای خود را انتخاب کنید
              </span>
              <div className="guide-section-item-describtion  shadow">
                <img
                  className="g-s-i-d-image"
                  src={require("../images/2.png")}
                  alt=""
                />
                <p className="g-s-i-d-text">
                  غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود
                  را ثبت کنید
                </p>
              </div>
            </div>
            <div className="guide-section-item">
              <span className="guide-section-item-header">
                شهر و منطقه خود را وارد کنید
              </span>
              <div className="guide-section-item-describtion  shadow">
                <img
                  className="g-s-i-d-image"
                  src={require("../images/1.png")}
                  alt=""
                />
                <p className="g-s-i-d-text">
                  منوی مورد علاقه خود را از بین بیش از 4000 رستوران خوب در تهران
                  و شهرستان‌ها جستجو کنید
                </p>
              </div>
            </div>
          </div>

          <div className="first-restaurant-section">
            <span className="text-header1 centered-text">
              رستوران‌‌ها و فست فود‌های برتر ماه بر اساس امتیاز‌دهی کاربران
            </span>
            <div className="restaurant-set">
              <div className="restaurant-subset">
                <div className="logo-container shadow">
                  <img src="" alt="restaurant-logo" />
                </div>
                <span className="restaurant-name centered-text" />
                <span className="food-names centered-text" />
                <span className="restaurant-address centered-text" />
                <button className="start-order">شروع سفارش</button>
              </div>
              <div className="restaurant-subset">
                <div className="logo-container shadow">
                  <img src="" alt="restaurant-logo" />
                </div>
                <span className="restaurant-name centered-text">
                  شیلا (مطهری)
                </span>
                <span className="food-names centered-text">
                  فست‌ فود . پیتزا . ساندویچ . برگر
                </span>
                <span className="restaurant-address centered-text">
                  ولیعصر، مطهری، فتحی شقاقی
                </span>
                <button className="start-order">شروع سفارش</button>
              </div>
              <div className="restaurant-subset">
                <div className="logo-container shadow">
                  <img src="" alt="restaurant-logo" />
                </div>
                <span className="restaurant-name centered-text">
                  باگت (اندرزگو)
                </span>
                <span className="food-names centered-text">
                  فست‌ فود . پیتزا . ساندویچ . برگر
                </span>
                <span className="restaurant-address centered-text">
                  ولیعصر، مطهری، فتحی شقاقی
                </span>
                <button className="start-order">شروع سفارش</button>
              </div>
            </div>
          </div>

          <div className="second-restaurant-section">
            <div id="s-r-s-subsection">
              <span id="title1">رستوران‌های خوب تهران در ریحون</span>
              <div className="restaurants-row">
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
              </div>
              <div className="restaurants-row">
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
              </div>
              <div className="restaurants-row">
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
                <div className="restaurant-container">
                  <div className="logo-container">
                    <img src="" alt="restaurant-logo" />
                  </div>
                  <span className="small-rest-name centered-text" />
                </div>
              </div>
            </div>
          </div>
          <div className="foods-section">
            <span className="text-header1 centered-text">
              غذا چی میل دارید؟
            </span>
            <span className="food-names centered-text">
              صبحانه، ناهار، شام یا هر چیزی که میل دارید انتخاب کنید
            </span>
            <div className="food-pics">
              <div id="food-image1">
                <span className="food-name">ساندویچ</span>
                <span className="food-name-describtion">1000 رستوران فعال</span>
              </div>
              <div id="food-image2">
                <span className="food-name">ساندویچ</span>
                <span className="food-name-describtion">1000 رستوران فعال</span>
              </div>
              <div id="food-image3">
                <span className="food-name">ساندویچ</span>
                <span className="food-name-describtion">1000 رستوران فعال</span>
              </div>
              <div id="food-image4">
                <span className="food-name">ساندویچ</span>
                <span className="food-name-describtion">1000 رستوران فعال</span>
              </div>
            </div>
            <span className="food-names centered-text">
              انتخاب غذاهای بیشتر
            </span>
            <div className="food-buttons" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainBody;
