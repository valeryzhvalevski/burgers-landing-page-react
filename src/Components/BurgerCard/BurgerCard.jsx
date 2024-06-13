import Buttons from "../Buttons/Buttons";
import style from "./BurgerCard.module.scss";
import postBasket from "../../services/post";
import putBasket from "../../services/put";

export default function BurgerCard({
  title,
  img,
  price,
  gramm,
  onClick,
  obj,
  basketState,
  objFlag,
}) {
  const { basketArr } = basketState;
  const { flag, setFlag } = objFlag;

  function addingToOrder(e) {
    e.stopPropagation();
    const existsBasketItem = basketArr.find((item) => item.id == obj.id);
    if (existsBasketItem) {
      existsBasketItem.count += 1;
      putBasket(existsBasketItem, existsBasketItem.id);
      setFlag(!flag);
    } else postBasket(obj);
    setFlag(!flag);
  }

  return (
    <div className={style.wrapperBurgerCars} onClick={onClick}>
      <img src={img} alt="img" className={style.burgerImage} />
      <p className={style.burgerPrice}>{price} ₽</p>
      <p className={style.burgerTitle}>{title}</p>
      <p className={style.burgerGramm}>{gramm}</p>
      <Buttons
        content="Добавить"
        colorBack="#F2F2F3"
        colorText="black"
        onClick={(e) => addingToOrder(e)}
      />
    </div>
  );
}
