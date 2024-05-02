import Aside from "./Components/Aside/Aside";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import "./style/App.scss";
import { useState } from "react";
import addAsideImg from "./common/addAsideImg";
import addDataImgame from "./common/addDataImage";
import burgers from "./data/burgers.json";
import asideData from "./data/asideData.json";

export default function App() {
  const [cart, setCart] = useState([addAsideImg(asideData)]);
  const [products, setProducts] = useState([addDataImgame(burgers)]);

  const stateObj = { cart, setCart, products, setProducts };
  return (
    <div className="container">
      <Header />
      <Nav />
      <div className="wrapper_content">
        <Aside stateObj = {stateObj}/>
        <Main stateObj = {stateObj}/>
      </div>
      <Footer />
    </div>
  );
}
