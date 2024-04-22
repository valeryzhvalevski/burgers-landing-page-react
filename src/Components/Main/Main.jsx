import style from "./Main.module.scss";
import Card from "../Card/Card";
import data from "../../data/burgers.json";
import addImgData from "../../common/addDataImage";

export default function Main() {
  const newData = addImgData(data);

  return (
    <div className={style.container}>
      {newData.map((item, index) => (
        <Card
          images={item.images}
          price={item.price}
          gramm={item.gramm}
          title={item.title}
        />
      ))}
    </div>
  );
}
