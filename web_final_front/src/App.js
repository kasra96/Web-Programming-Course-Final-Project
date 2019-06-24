import React from 'react';
import './assets/main.css';
import './assets/global.css';

function App() {
  return (
    <React.Fragment>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      </div> */}
      <header class="main-header fix-position">
        <ul class="nav">
          <li class="li-class1"><a href="register_login.html">ورود</a></li>
          <li><a href="register_login.html">عضویت</a></li>
          <li><a class="li-class2" href="register_login.html">راهنما</a></li>
        </ul>
        <hr size="4px" class="line"/>
      </header>
      <div class="first-section">
        <div class="text-div1">
          <img class="reyhoon-logo" src={require('./images/logo.png')}  alt="reyhoon-logo"/>
          <h1>سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فودها</h1>
          <h5 class="header-class1">برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید</h5>
        </div>
        <div class="search-bar shadow">
          <div class="bordered-text">
              <i class="fas fa-angle-down"></i>
              <p class="tehran-text">تهران</p>
          </div>
          <fieldset class="fieldset-class1">
              <legend>منطقه خود را وارد کنید</legend>
              <input type="text" class="text-input" placeholder="مثلا نیاوران"/>
          </fieldset>
          <button class="search-icon">
              <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="recent-search">
            <a  class="recent-search-text" href="register_login.html">آخرین جستجو: تهران، شیخ هادی، چهارراه ولیعصر </a>
        </div>
      </div>
      <div class="other-sections">
        <div class="guide-section">
            <div class="guide-section-item">
                <span class="guide-section-item-header">غذایتان را نوش‌جان کنید</span>
                <div class="guide-section-item-describtion shadow">
                    <img class="g-s-i-d-image" src={require("./images/3.png")} alt=""/>
                    <p class="g-s-i-d-text">
                        درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید
                    </p>
                </div>
            </div>
            <div class="guide-section-item">
                <span class="guide-section-item-header">غذای خود را انتخاب کنید</span>
                <div class="guide-section-item-describtion  shadow">
                    <img class="g-s-i-d-image" src={require("./images/2.png")} alt=""/>
                    <p class="g-s-i-d-text">
                        غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید
                    </p>
                </div>
            </div>
            <div class="guide-section-item">
                <span class="guide-section-item-header">شهر و منطقه خود را وارد کنید</span>
                <div class="guide-section-item-describtion  shadow">
                    <img class="g-s-i-d-image" src={require("./images/1.png")} alt=""/>
                    <p class="g-s-i-d-text">
                        منوی مورد علاقه خود را از بین بیش از 4000 رستوران خوب در تهران و شهرستان‌ها جستجو کنید
                    </p>
                </div>
            </div>
        </div>

        <div class="first-restaurant-section">
            <span class="text-header1 centered-text">رستوران‌‌ها و فست فود‌های برتر ماه بر اساس امتیاز‌دهی کاربران</span>
            <div class="restaurant-set">
                <div class="restaurant-subset">
                    <div class="logo-container shadow">
                        <img src="" alt="restaurant-logo"/>
                    </div>
                    <span class="restaurant-name centered-text"></span>
                    <span class="food-names centered-text"></span>
                    <span class="restaurant-address centered-text"></span>
                    <button class="start-order">شروع سفارش</button>
                </div>
                <div class="restaurant-subset">
                    <div class="logo-container shadow">
                        <img src="" alt="restaurant-logo"/>
                    </div>
                    <span class="restaurant-name centered-text">شیلا (مطهری)</span>
                    <span class="food-names centered-text">فست‌ فود . پیتزا . ساندویچ . برگر</span>
                    <span class="restaurant-address centered-text">ولیعصر، مطهری، فتحی شقاقی</span>
                    <button class="start-order">شروع سفارش</button>
                </div>
                <div class="restaurant-subset">
                    <div class="logo-container shadow">
                        <img src="" alt="restaurant-logo"/>
                    </div>
                    <span class="restaurant-name centered-text">باگت (اندرزگو)</span>
                    <span class="food-names centered-text">فست‌ فود . پیتزا . ساندویچ . برگر</span>
                    <span class="restaurant-address centered-text">ولیعصر، مطهری، فتحی شقاقی</span>
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
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                </div>
                <div class="restaurants-row">
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                </div>
                <div class="restaurants-row">
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                    <div class="restaurant-container">
                        <div class="logo-container">
                            <img src="" alt="restaurant-logo"/>
                        </div>
                        <span class="small-rest-name centered-text"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="foods-section">
            <span class="text-header1 centered-text">غذا چی میل دارید؟</span>
            <span class="food-names centered-text">صبحانه، ناهار، شام یا هر چیزی که میل دارید انتخاب کنید</span>
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
            <div class="food-buttons">
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="footer-sub-section1">
            <span class="gray-text">
                    مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید
            </span>
        </div>
        <div class="footer-sub-section2">
            <hr size="2px" class="line2 color1"/>
            <span class="white-text">تماس با ریحون</span>
            <span class="gray-text">درباره ریحون</span>
            <span class="gray-text">تماس با ما</span>
            <span class="gray-text">وبلاگ ریحون</span>
        </div>
        <div class="footer-sub-section2">
            <hr size="2px" class="line2 color2"/>
            <span class="white-text">رستوران‌ها</span>
            <span class="gray-text">ثبت رستوران</span>
        </div>
        <div class="footer-sub-section2">
            <hr size="2px" class="line2 color3"/>
            <span class="white-text">پشتیبانی ریحون</span>
            <span class="gray-text">سوالات متداول</span>
            <span class="gray-text">تماس با پشیبانی</span>
            <span class="gray-text">قوانین و مقررات</span>
        </div>
        <div class="footer-sub-section2">
            <hr size="2px" class="line2 color4"/>
            <span class="white-text">اپلیکیشن‌های موبایل</span>
            <span class="gray-text"></span>
        </div>
    </footer>


    </React.Fragment>
  );
}

export default App;
