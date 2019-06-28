import React, { Component } from "react";
import axios from "axios";
import "./assets/main.css";
import "./assets/global.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainBody from "./components/main_body";
import Serach_results from "./components/search_results";

class App extends Component {
  state = { someBool: false, returned_result: "" };

  search = (str1, str2) => {
    console.log(str1);
    console.log(str2);
    const someBool = true;
    this.setState({ someBool: true });
    axios.get("http://localhost:3001/api/restaurants?area=صادقیه").then(res => {
      console.log(res.data[0].name);
      var returned_result = res.data;
      this.setState({ returned_result });
    });
  };

  choose_body() {
    if (this.state.someBool)
      return <Serach_results restaurant_array={this.state.returned_result} />;
    else return <MainBody searchMethod={this.search} />;
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div>{this.choose_body()}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
