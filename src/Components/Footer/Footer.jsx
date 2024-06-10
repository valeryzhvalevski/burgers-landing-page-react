import logo from "../../assets/logoOrange.png";
import call from "../../assets/Call.png";
import vk from "../../assets/vk.png";
import telegram from "../../assets/telegram.png";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.wrapperFooter}>
      <div className={style.logoAndInfo}>
        <img src={logo} alt="logo" className={style.logo} />
        <div className={style.info}>
          <div>
            <p className={style.infoTitle}>Номер для заказа</p>
            <div className={style.tel}>
              <img src={call} alt="call" />
              <p className={style.telNumber}>+7(930)833-38-11</p>
            </div>
          </div>
          <div className={style.internet}>
            <p className={style.infoTitle}>Мы в соцсетях</p>
            <img src={vk} alt="vk" />
            <img src={telegram} alt="telegram" />
          </div>
        </div>
      </div>
      <div className={style.authors}>
        <p>© YouMeal, 2022</p>
        <p>Design: Anastasia Ilina</p>
      </div>
    </div>
  );
}
