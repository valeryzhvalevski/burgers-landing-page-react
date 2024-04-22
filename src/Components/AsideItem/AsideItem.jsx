import style from "./AsideItem.module.scss";

export default function Aside({ image, title, weight, price, value }) {
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
        <button className={style.lessBnt}>-</button>
        <p className={style.valueCounter}>{value}</p>
        <button className={style.moreBnt}>+</button>
      </div>
    </div>
  );
}
