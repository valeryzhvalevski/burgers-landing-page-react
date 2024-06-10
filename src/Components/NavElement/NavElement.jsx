import style from "./NavElement.module.scss";

export default function NavElement({ title, img, checked, editNavLink, index}) {
  return (
    <div className = {checked ? `${style.oneItemNav} ${style.checked}` : style.oneItemNav} onClick={()=>editNavLink(index, title)}>
      <img src={img} alt="img" className={style.img} />
      <p>{title}</p>
    </div>
  );
}
