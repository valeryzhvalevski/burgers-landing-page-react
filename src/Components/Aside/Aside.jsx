import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import style from "./Aside.module.scss";
import AsideItem from "../AsideItem/AsideItem";
import delivery from "../../assets/delivery.png";
import { calcAllProductCount, calcAllProductPrice  } from "../../common/counterPrice";
import { useState } from "react";

import data from "../../data/asideData.json";
import addAsideImg from "../../common/addAsideImg";

export default function Aside({stateObj}) {
  const {cart, setCart} = stateObj;
  console.log(cart, setCart);//
   function editCountCart(id, symbol) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.count  = +item.count + symbol;
        console.log(item.count); ///
       return item;
      }
      return item;
    });
    setCart(newCart);
    console.log(newCart);
  }

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h3>Корзина</h3>
        <p>{calcAllProductCount(cart)}</p>
      </div>
      <div className={style.containerContent}>
        {cart.map((item, index) => (
          <AsideItem
            image={item.image}
            title={item.title}
            price={item.price}
            weight={item.weight}
            value={item.value}
            key={uuidv4()}
            id={item.id}
            editCountCart={editCountCart}
            count={item.count}
          />
        ))}
      </div>
      <div className={style.total}>
        <p>Итого</p>
        <p>{calcAllProductPrice(cart)}₽</p>
      </div>
      <Button content="Оформить заказ" color="#FF7020" colorText="white" />
      <div className={style.delivery}>
        <img src={delivery} alt="delivery" />
        <p>Бесплатная доставка</p>
      </div>
    </div>
  );
}

