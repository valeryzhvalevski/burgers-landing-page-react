import style from "./Buttons.module.scss";

export default function Buttons({ content, colorBack, colorText, onClick }) {
  return (
    <div className={style.wrapperBtn}>
      <button
        className={style.btn}
        style={{ backgroundColor: colorBack, color: colorText }}
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  );
}
