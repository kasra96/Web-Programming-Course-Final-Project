import React from "react";
import "./assets/main.css";
import "./assets/global.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainBody from "./components/main_body";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
