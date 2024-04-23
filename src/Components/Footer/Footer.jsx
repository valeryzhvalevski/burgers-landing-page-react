import style from "./Footer.module.scss";
import icoFooter from "../../assets/logo-footer.svg";
import tel from "../../assets/phone.png";
import vk from "../../assets/vk.png";
import tg from "../../assets/tg.png";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.icoAndRights}>
        <div className={style.icoAndRights__imgWrapper}>
          <img src={icoFooter} alt="ico" />
        </div>
        <div className={style.icoAndRights__content}>
          <p>© YouMeal, 2022</p>
          <p>Design: Anastasia Ilina</p>
        </div>
      </div>
      <div className={style.telAndSocials}>
        <div className={style.tel}>
          <div className={style.tel__title}>Номер для заказа</div>
          <div className={style.tel__content}>
            <img src={tel} alt="tel" />
          </div>
        </div>
        <div className={style.socials}>
          <div className={style.socials__title}>Мы в соцсетях</div>
          <div className={style.socials__content}>
            <img src={vk} alt="vk" />
            <img src={tg} alt="tg" />
          </div>
        </div>
      </div>
    </div>
  );
}

