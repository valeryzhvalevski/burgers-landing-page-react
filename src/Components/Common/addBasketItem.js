import img1 from "../../assets/basket/basket1.png";
import img2 from "../../assets/basket/basket2.png";
import img3 from "../../assets/basket/basket3.png";

const arrBasket = [img1, img2, img3]

export default function addBasketItem(data) {
  return data.map((item, index)=>{
    item.img = arrBasket[index]
    return item
  })
}
