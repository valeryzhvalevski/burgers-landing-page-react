import { v4 as uuidv4 } from "uuid";
import style from "./Nav.module.scss";
import NavItem from "../NavItem/NavItem";
import data from "../../data/navItems.json";
import addNavImg from "../../common/addNavItemImages";

export default function Nav({editNavIndex}) {
  const newData = addNavImg(data);

  return (
    <div className={style.container}>
      {newData.map((item, index) => (
        <NavItem editNavIndex={editNavIndex} image={item.image} title={item.title} index={index} key={uuidv4()} />
      ))}
    </div>
  );
}
