import React from 'react';
import style from './NavItem.module.scss';

export default function NavItem({ image, index, title, editNavIndex }) {
  return (
    <button className={style.NavItem} onClick={() => editNavIndex(index)}>
      <div className={style.wrapperImg}>
        <img src={image} alt="navigation-img" />
      </div>
      <p>{title}</p>
    </button>
  );
}
