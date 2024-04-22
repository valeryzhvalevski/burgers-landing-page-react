import Button from "../Button/Button";
import style from "./Aside.module.scss";

export default function Aside() {
  return (
    <div className={style.container}>
      <Button content="Добавить заказ" color="#FF7020" colorText="white" />
    </div>
  );
}
