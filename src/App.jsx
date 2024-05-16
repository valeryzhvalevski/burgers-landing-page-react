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
import combo from "./data/combo.json";
import sauce from "./data/sauce.json";
import snacks from "./data/snacks.json";
import asideData from "./data/asideData.json";
import Modal from "./Components/Modal/Modal";

const arrProducts = [burgers, combo, sauce, snacks];

export default function App() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [cart, setCart] = useState(addAsideImg(asideData));
  const [products, setProducts] = useState(
    addDataImage(arrProducts[activeNavIndex], arrProducts[activeNavIndex])
  );
  const [activeItemModal, setActiveItemModal] = useState(false);

  function editNavIndex(index) {
    setActiveNavIndex(index);
    setProducts(addDataImgame(arrProducts[index], arrProducts[activeNavIndex]));
  }

  function getDataActiveModal(id) {
    setActiveItemModal(products.find((item) => item.id === id));
  }

  const stateObj = { cart, setCart, products, setProducts };
  return (
    <div className="container">
      {activeItemModal && (
        <Modal obj={activeItemModal} setActiveItemModal={setActiveItemModal} />
      )}
      <Header />
      <Nav />
      <div className="wrapper_content">
        <Aside stateObj={stateObj} />
        <Main stateObj={stateObj} getDataActiveModal={getDataActiveModal} />
      </div>
      <Footer />
    </div>
  );
}
