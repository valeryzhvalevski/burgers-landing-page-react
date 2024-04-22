import img1 from "../assets/photo.png";
import img2 from "../assets/photo2.png";
import img3 from "../assets/photo3.png";
import img4 from "../assets/photo4.png";
import img5 from "../assets/photo5.png";
import img6 from "../assets/photo6.png";

const arrImg = [img1, img2, img3, img4, img5, img6];

export default function addImgData(data) {
  return data.map((item, index) => {
    item.images = arrImg[index];
    return item;
  });
}
