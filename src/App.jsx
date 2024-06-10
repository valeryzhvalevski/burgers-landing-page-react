import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ModalWindow from "./Components/ModalWindow/ModalWindow";
import style from "./style/App.module.scss";
import { useEffect, useState } from "react";
import addImage from "./Components/Common/addImageFunc";
import { getProducts, getBasket } from "./services/get";

export default function App() {
  const [arrMenu, setArrMenu] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(0);
  const [menu, setMenu] = useState([]);
  const [heading, setHeading] = useState("Бургеры");
  const [basketArr, setBasketArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("null");
  const [modalPrice, setModalPrice] = useState("null");
  const [modalInfo, setModalInfo] = useState("null");
  const [modalGramm, setModalGramm] = useState("null");
  const [modalId, setModalId] = useState("null");
  const [flag, setFlag] = useState(false);
  const objFlag = { flag, setFlag };
  const basketState = { basketArr, setBasketArr };
  const headingobj = { heading, setHeading, menu, setMenu };
  const modalObj = {
    modal,
    setModal,
    modalImage,
    setModalImage,
    modalTitle,
    setModalTitle,
    modalPrice,
    setModalPrice,
    modalInfo,
    setModalInfo,
    modalGramm,
    setModalGramm,
    modalId,
    setModalId,
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    editBasket();
  }, [flag]);

  async function editBasket() {
    const data = await getBasket();
    setBasketArr(data);
  }

  async function getData() {
    const data = await getProducts();
    setArrMenu([
      { title: "burgers", data: data.burgers },
      { title: "snacks", data: data.snacks },
      { title: "hotdogs", data: data.hotdogs },
      { title: "combo", data: data.combo },
      { title: "shaurma", data: data.shaurma },
      { title: "pizza", data: data.pizza },
      { title: "vok", data: data.wok },
      { title: "dessert", data: data.desserts },
      { title: "sauce", data: data.sauce },
    ]);
    setMenu(addImage({ title: "burgers", data: data.burgers }));
  }

  function editNavLink(index, title) {
    setActiveNavLink(index);
    setMenu(addImage(arrMenu[index]));
    setHeading(title);
  }

  return (
    <>
      {modal && (
        <ModalWindow
          modalObj={modalObj}
          basketState={basketState}
          objFlag={objFlag}
        />
      )}
      <Header />
      <Nav headingobj={headingobj} editNavLink={editNavLink} />
      <div className={style.wrapperMain}>
        <Aside basketState={basketState} />
        <Main
          headingobj={headingobj}
          modalObj={modalObj}
          basketState={basketState}
          objFlag={objFlag}
        />
      </div>
      <Footer />
    </>
  );
}
