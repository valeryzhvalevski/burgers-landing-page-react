import React, { useState } from "react";
import style from "./AsideItem.module.scss";

export default function Aside({ image, title, weight, price }) {
  const [value, setValue] = useState(1); 
  const decrement = () => {
    if (value > 1) {
      setValue(prevValue => prevValue - 1); 
    }
  };

  const increment = () => {
    setValue(prevValue => prevValue + 1); 
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
        <p className={style.valueCounter}>{value}</p>
        <button className={style.moreBnt} onClick={increment}>+</button>
      </div>
    </div>
  );
}



