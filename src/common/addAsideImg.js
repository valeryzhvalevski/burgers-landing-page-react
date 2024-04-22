import buy1 from "../assets/buy1.png";
import buy2 from "../assets/buy2.png";
import buy3 from "../assets/buy3.png";

const arrImg = [buy1, buy2, buy3];

export default function addAsideImg(data) {
  return data.map((item, index) => {
    item.image = arrImg[index];
    return item;
  });
}
