import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import style from "./Card.module.scss";

export default function Card({ title, price, gramm, images }) {
  return (
    <div className={style.containerCard} key={uuidv4()}>
      <div className={style.wrapperImages}>
        <img src={images} alt="pict" />
      </div>
      <h3>{title}</h3>
      <p>{price} ₽</p>
      <p>{gramm}</p>
      <div className={style.wrapperBtn}>
        <Button content="Добавить" color="#F2F2F3" colorText="black" />
      </div>
    </div>
  );
}
