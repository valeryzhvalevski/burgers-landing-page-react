import Button from "../Button/Button";
import style from "./Aside.module.scss";
import AsideItem from "../AsideItem/AsideItem";
import data from "../../data/asideData.json";
import addAsideImg from "../../common/addAsideImg";
import delivery from "../../assets/delivery.png";

export default function Aside() {
  const newData = addAsideImg(data);

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h3>Корзина</h3>
        <p>4</p>
      </div>
      <div className={style.containerContent}>
        {newData.map((item, index) => (
          <AsideItem
            image={item.image}
            title={item.title}
            price={item.price}
            weight={item.weight}
            value={item.value}
          />
        ))}
      </div>
      <div className={style.total}>
        <p>Итого</p>
        <p>1279₽</p>
      </div>
      <Button content="Оформить заказ" color="#FF7020" colorText="white" />
      <div className={style.delivery}>
        <img src={delivery} alt="delivery" />
        <p>Бесплатная доставка</p>
      </div>
    </div>
  );
}
