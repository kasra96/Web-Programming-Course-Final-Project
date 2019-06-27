import React, { Component } from "react";
import "./assets/main.css";
import "./assets/global.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainBody from "./components/main_body";

class App extends Component {
  state = { someBool: false };

  search = (str1, str2) => {
    console.log(str1);
    console.log(str2);
    const someBool = true;
    // this.setState({ someBool: true });
  };

  test() {
    if (this.state.someBool) return <h1>hi</h1>;
    else return <MainBody searchMethod={this.search} />;
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        {/* <MainBody searchMethod={this.search} /> */}
        <div>{this.test()}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
