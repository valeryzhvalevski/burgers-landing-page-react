
import { useState } from "react";
import style from "./Nav.module.scss";
import data from "../../data/navItems.json";
import addNavImg from "../../common/addNavItemImages";
import { v4 as uuidv4 } from "uuid";

export default function Nav({ onCategoryChange }) {
  const newData = addNavImg(data);

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className={style.container}>
      {newData.map((item, index) => (
        <button 
          className={style.NavItem} 
          key={item.id}
          onClick={() => handleCategoryClick(item.title.toLowerCase())}
        >
          <div className={style.wrapperImg}>
            <img src={item.image} alt="navigation-img" />
          </div>
          <p>{item.title}</p>
        </button>
      ))}
    </div>
  );
}
