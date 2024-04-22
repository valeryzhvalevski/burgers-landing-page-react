import Button from "../Button/Button";
import style from "./Card.module.scss";

export default function Card({ title, price, gramm, images }) {
  return (
    <div className={style.containerCard}>
      <div className={style.wrapperImages}>
        <img src={images} alt="pict" />
      </div>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{gramm}</p>
      <div className={style.wrapperBtn}>
        <Button content="Добавить" color="#F2F2F3" colorText="black" />
      </div>
    </div>
  );
}
