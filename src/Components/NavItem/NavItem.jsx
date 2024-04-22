import style from "./NavItem.module.scss";

export default function Nav({image, title}) {
  return (
    <button className={style.containerNavItem}>
    <div className={style.wrapperImg}>
      <img src={image} alt="navigation-img" />
    </div>
    <p>{title}</p>
  </button>

  );
}
