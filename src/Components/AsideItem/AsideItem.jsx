import React, { useState } from "react";
import style from "./AsideItem.module.scss";

export default function AsideItem({ image, title, weight, price, value, onUpdateItemCount }) {
  const [count, setCount] = useState(value);

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className={style.containerAsideItem}>
      <div className={style.product}>
        <div className={style.wrapperImg}>
          <img src={image} alt="product" />
        </div>
        <div className={style.wrapperText}>
          <p>{title}</p>
          <p>{weight}</p>
          <p>{price}</p>
        </div>
      </div>
      <div className={style.counter}>
        <button className={style.lessBnt} onClick={decrement}>-</button>
        <p className={style.valueCounter}>{count}</p>
        <button className={style.moreBnt} onClick={increment}>+</button>
      </div>
    </div>
  );
}
