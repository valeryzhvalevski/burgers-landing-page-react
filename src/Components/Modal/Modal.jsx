import React from 'react';
import style from './Modal.module.scss';

export default function Modal({ obj, setActiveItemModal }) {
  if (!obj) {
    console.log('No object provided to modal');
    return null;
  }

  const { title, price, gramms, images } = obj;

  return (
    <div onClick={() => setActiveItemModal(false)} className={style.wrapper_modal}>
      <div className={style.modal} onClick={(event) => event.stopPropagation()}>
        <h1>{title}</h1>
        <img src={images} alt="img" />
        <p>{gramms}</p>
        <p>{price}</p>
        <button >Добавить в корзину</button>

        <button onClick={() => setActiveItemModal(false)}>Закрыть</button>
      </div>
    </div>
  );
}
