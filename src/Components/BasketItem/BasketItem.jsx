import style from "./BasketItem.module.scss";

export default function BasketItem({ img, title, gramm, price, count, id, changeBasketCount }) {
  return (
    <>
      <div className={style.wrapperBasketItem}>
        <div className={style.basketContent}>
          <img src={img} alt="img" className={style.basketImg} />
          <div>
            <p className={style.basketTitle}>{title}</p>
            <p className={style.basketGramm}>{gramm}</p>
            <p className={style.basketPrice}>{price} ₽</p>
          </div>
        </div>
        <div className={style.counter}>
          <button className={style.pointer} onClick={()=>changeBasketCount(id, -1)}>
            -
          </button> 
          <p>{count}</p>
          <button className={style.pointer} onClick={()=>changeBasketCount(id, +1)}>
            +
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
