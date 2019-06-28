import React, { Component } from "react";
import "../assets/search_result.css";

class Search_results extends Component {
  state = {};
  open_restaurants() {
    return <h5>opens</h5>;
  }
  closed_restaurants() {
    return <h5>closed</h5>;
  }
  render() {
    return (
      <div>
        {console.log(this.props.restaurant_array)}
        <img
          id="first_image"
          className="img-responsive"
          src={require("../images/restaurant-search-banner-2x.jpg")}
          alt="Chania"
        />
        <h3 className="text-right">
          {123}
          رستوران امکان سرویس‌دهی به
          <abbr>{" تهران "}</abbr>را دارند
        </h3>
        <hr />
        <div className="search-container">
          <input
            type="text"
            id="area_search"
            placeholder="جست‌و‌جوی رستوران در این محدوده"
            name="search"
          />
          <button type="submit">
            <i className="fa fa-search" id="my_search_botton" />
          </button>
        </div>
        <div id="main_panel" className="row">
          <div className="restuarant_section col-sm-9">
            <div className="inner_rest_sec">
              <div className="restaurant_subsection">
                {this.open_restaurants()}
              </div>
              <div className="restaurant_subsection">
                {this.closed_restaurants()}
              </div>
            </div>
          </div>
          <div className="category_section col-sm-3">
            <div className="inner_cat_sec">som cat</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search_results;
