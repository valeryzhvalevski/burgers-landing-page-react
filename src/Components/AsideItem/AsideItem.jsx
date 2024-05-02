import { useState } from "react";
import style from "./AsideItem.module.scss";

export default function AsideItem({
  image,
  title,
  weight,
  price,
  count,
  id,
  editCountCart,
}) {
  return (
    <div className={style.containerAsideItem}>
      <div className={style.product}>
        <div className={style.wrapperImg}>
          <img src={image} alt="product" />
        </div>
        <div className={style.wrapperText}>
          <p>{title}</p>
          <p>{weight}</p>
          <p>{price}₽</p>
        </div>
      </div>
      <div className={style.counter}>
        <button className={style.lessBnt} onClick={() => editCountCart(id, -1)}>
          -
        </button>
        <p className={style.valueCounter}>{count}</p>
        <button className={style.moreBnt} onClick={() => editCountCart(id, +1)}>
          +
        </button>
      </div>
    </div>
  );
}
