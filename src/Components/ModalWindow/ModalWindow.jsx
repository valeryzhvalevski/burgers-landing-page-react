import Buttons from "../Buttons/Buttons";
import style from "./ModalWindow.module.scss";
import closeImg from "../../assets/close.png";
import { useState } from "react";
import { getModalPrice } from "../Common/getCalculation";

export default function ModalWindow({ modalObj, basketState }) {
  const {
    setModal,
    modalImage,
    modalTitle,
    modalPrice,
    modalInfo,
    modalGramm,
    modalId,
  } = modalObj;

  const { basketArr, setBasketArr } = basketState;

  function closeModal() {
    setModal(false);
  }

  const [modalCounter, setModalCounter] = useState(1);

  function editModalCounter(symbol) {
    if (modalCounter == 1 && symbol == -1) return;
    setModalCounter(modalCounter + +symbol);
  }
  function addingToOrder() {
    const existsBasketItem = basketArr.find((item) => item.id == modalId);
    if (existsBasketItem) {
      existsBasketItem.count += modalCounter;
      setBasketArr([...basketArr]);
    } else
      setBasketArr([
        ...basketArr,
        {
          img: modalImage,
          title: modalTitle,
          price: modalPrice,
          count: modalCounter,
          gramm: modalGramm,
          id: modalId,
        },
      ]);
    closeModal();
  }

  return (
    <div className={style.wrapperModal}>
      <div className={style.modalWindow}>
        <div className={style.orderName}>
          <h3>{modalTitle}</h3>
          <img src={closeImg} alt="closeImg" onClick={closeModal} />
        </div>
        <div className={style.aboutProduct}>
          <img src={modalImage} alt="img1" />
          <div>
            <p className={style.description}>{modalInfo}</p>
            <p className={style.sostav}>Состав:</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={style.addToOrder}>
          <div className={style.addToOrder}>
            <Buttons
              content="Добавить"
              colorBack="#FF7020"
              colorText="#FFFFFF"
              onClick={addingToOrder}
            />
            <div className={style.counter}>
              <button
                className={style.pointer}
                onClick={() => editModalCounter(-1)}
              >
                -
              </button>
              <p>{modalCounter}</p>
              <button
                className={style.pointer}
                onClick={() => editModalCounter(1)}
              >
                +
              </button>
            </div>
          </div>
          <p className={style.price}>
            {getModalPrice(modalPrice, modalCounter)} ₽
          </p>
        </div>
      </div>
    </div>
  );
}