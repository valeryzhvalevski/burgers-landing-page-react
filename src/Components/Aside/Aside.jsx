import Button from "../Button/Button";
import style from "./Aside.module.scss";
import AsideItem from "../AsideItem/AsideItem";
import data from "../../data/asideData.json";
import addAsideImg from "../../common/addAsideImg";

export default function Aside() {
  const newData = addAsideImg(data);

  return (
    <div className={style.container}>
      {newData.map((item, index) => (
        <AsideItem image={item.image} title={item.title} price={item.price} weight={item.weight} value={item.value}/>
      ))}
    </div>
  );
}
