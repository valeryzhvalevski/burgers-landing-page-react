import BurgerCard from "../BurgerCard/BurgerCard";
import style from "./Main.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Main({ headingobj, modalObj, basketState, objFlag }) {
  const {
    setModal,
    setModalImage,
    setModalTitle,
    setModalPrice,
    setModalInfo,
    setModalGramm,
    setModalId,
  } = modalObj;
  const { menu, heading } = headingobj;

  function openModal({img, title, price, info, gramm, id}) {
    setModal(true);
    setModalImage(img);
    setModalTitle(title);
    setModalPrice(price);
    setModalInfo(info);
    setModalGramm(gramm);
    setModalId(id);
  }

  return (
    <div className={style.wrapperMain}>
      <h2 className={style.heading}>{heading}</h2>
      <div className={style.burgerCars}>
        {menu.map((item) => (
          <BurgerCard
          objFlag={objFlag}
            img={item.img}
            title={item.title}
            price={item.price}
            gramm={item.gramm}
            id={item.id}
            key={uuidv4()}
            obj={item}
            basketState={basketState}
            onClick={() =>
              openModal(
                {...item}
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
