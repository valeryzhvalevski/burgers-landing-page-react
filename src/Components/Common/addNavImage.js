import img1 from "../../assets/nav/burgers.png";
import img2 from "../../assets/nav/snack.png";
import img3 from "../../assets/nav/hot-dogs.png";
import img4 from "../../assets/nav/kombo.png";
import img5 from "../../assets/nav/shaurma.png";
import img6 from "../../assets/nav/pizza.png";
import img7 from "../../assets/nav/vok.png";
import img8 from "../../assets/nav/deserts.png";
import img9 from "../../assets/nav/sauce.png";

const arrImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9]


export default function addNavImage(data) {
  return data.map((item, index)=>{
    item.img = arrImg[index]
    return item
  })
}
