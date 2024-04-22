import style from "./Button.module.scss";

export default function Button({ content, color, colorText }) {
  return (
    <button
      className={style.btn}
      style={{ backgroundColor: color, color: colorText }}
    >
      {content}
    </button>
  );
}
