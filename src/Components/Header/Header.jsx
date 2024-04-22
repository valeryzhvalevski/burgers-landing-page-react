import style from "./Header.module.scss";
import Button from "../Button/Button";
import logoHeader from "../../assets/logo-header.svg";
import headerPic from "../../assets/header-pic.png";

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.bg}></div>
      <div className={style.logo}>
        <img src={logoHeader} alt="logo" />
      </div>
      <div className={style.contentBox}>
        <div>
          <img src={headerPic} alt="pic" />
        </div>
        <div className={style.content}>
          <h1>Только самые <span> сочные бургеры <br />!</span></h1>
          <p>Бесплатная доставка от 599₽</p>
          <div className={style.wrapperBtn}>
            <Button content="Добавить" color="#F2F2F3" colorText="black" />
          </div>
        </div>
      </div>
    </div>
  );
}
