import { v4 as uuidv4 } from "uuid";
import style from "./Main.module.scss";
import Card from "../Card/Card";

export default function Main({stateObj, getDataActiveModal}) {
  const {products} = stateObj;

  return (
    <div className={style.container}>
      <h2>Бургеры</h2>
      {products[0].map((item, index) => (
        <Card
        getDataActiveModal={getDataActiveModal}
          images={item.images}
          price={item.price}
          gramm={item.gramms}
          title={item.title}
          key={uuidv4()}
          id={item.id}
        />
      ))}
    </div>
  );
}


