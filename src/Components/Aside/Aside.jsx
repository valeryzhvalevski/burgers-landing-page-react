import BasketItem from "../BasketItem/BasketItem";
import Buttons from "./../Buttons/Buttons";
import deliveryImg from "../../assets/basket/delivery.png";
import style from "./Aside.module.scss";
import { v4 as uuidv4 } from "uuid";
import { getCommonCount, getCommonPrice } from "../Common/getCalculation";
import putBasket from "../../services/put";
import deleteBasket from "../../services/delete";

export default function Aside({ basketState }) {
  const { basketArr, setBasketArr } = basketState;

  function changeBasketCount(id, symbol) {
    const newBasketArr = basketArr.filter((item) => {
      if (item.id === id) {
        item.count = +item.count + symbol;
        putBasket(item, item.id)
        if (item.count <=0) {
          deleteBasket(item, item.id)
          return false
        }
        return true
      }
      return true;
    });
    setBasketArr(newBasketArr);
  }

  return (
    <div className={style.wrapperAside}>
      <div className={style.basketCounter}>
        <h2>Корзина</h2>
        {basketArr.length !== 0 && <div>{getCommonCount(basketArr)}</div>}
      </div>
      <hr />
      {basketArr.length !== 0 ? (
        <div className={style.basketFull}>
          <div className={style.basketItems}>
            {basketArr.map((item) => (
              <BasketItem
                img={item.img}
                title={item.title}
                price={item.price}
                gramm={item.gramm}
                count={item.count}
                key={uuidv4()}
                id={item.id}
                changeBasketCount={changeBasketCount}
              />
            ))}
          </div>
          <div className={style.sum}>
            <p>Итого</p>
            <p>{getCommonPrice(basketArr)}₽</p>
          </div>
          <Buttons
            content="Оформить заказ"
            colorBack="#FF7020"
            colorText="#FFFFFF"
          />
          <div className={style.delivery}>
            <img src={deliveryImg} alt="delivery" />
            <p>Бесплатная доставка</p>
          </div>
        </div>
      ) : (
        <p className={style.emptyBasket}>Тут пока пусто</p>
      )}
    </div>
  );
}
