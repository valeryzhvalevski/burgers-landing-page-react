import navIco1 from "../assets/nav-ico1.svg";
import navIco2 from "../assets/nav-ico2.svg";
import navIco3 from "../assets/nav-ico3.svg";
import navIco4 from "../assets/nav-ico4.svg";
import navIco5 from "../assets/nav-ico5.svg";
import navIco6 from "../assets/nav-ico6.svg";
import navIco7 from "../assets/nav-ico7.svg";
import navIco8 from "../assets/nav-ico8.svg";
import navIco9 from "../assets/nav-ico9.svg";

const arrImg = [navIco1, navIco2, navIco3, navIco4, navIco5, navIco6, navIco7, navIco8, navIco9];

export default function addNavImg(data) {
  return data.map((item, index) => {
    item.image = arrImg[index];
    return item;
  });
}
