
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./Main.module.scss";
import Card from "../Card/Card";
import burgersData from "../../data/burgers.json";
import comboData from "../../data/combo.json";
import sauceData from "../../data/sauce.json";
import addImgData from "../../common/addDataImage";

export default function Main({ category }) {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    let data;
    switch (category) {
      case "burgers":
        data = burgersData;
        break;
      case "combo":
        data = comboData;
        break;
      case "sauce":
        data = sauceData;
        break;
      default:
        data = [];
        break;
    }
    setCategoryData(addImgData(data));
  }, [category]);

  return (
    <div className={style.container}>
      <h2>Main Content</h2>
      {categoryData.map((item, index) => (
        <Card
          images={item.images}
          price={item.price}
          gramm={item.gramms}
          title={item.title}
          key={uuidv4()}
        />
      ))}
    </div>
  );
}
