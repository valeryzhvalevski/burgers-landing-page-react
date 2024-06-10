import burger1 from "../../assets/burgers/photo1.png";
import burger2 from "../../assets/burgers/photo2.png";
import burger3 from "../../assets/burgers/photo3.png";
import burger4 from "../../assets/burgers/photo4.png";
import burger5 from "../../assets/burgers/photo5.png";
import burger6 from "../../assets/burgers/photo6.png";


import kombo1 from "../../assets/kombo/combo1.webp";
import kombo2 from "../../assets/kombo/combo2.webp";
import kombo3 from "../../assets/kombo/combo3.webp";
import kombo4 from "../../assets/kombo/combo4.webp";
import kombo5 from "../../assets/kombo/combo5.webp";
import kombo6 from "../../assets/kombo/combo6.png";


import shaurma1 from "../../assets/Shaurma/shaurma1.jpg";
import shaurma2 from "../../assets/Shaurma/shaurma2.jpg";
import shaurma3 from "../../assets/Shaurma/shaurma3.png";
import shaurma4 from "../../assets/Shaurma/shaurma4.jpg";
import shaurma5 from "../../assets/Shaurma/shaurma5.jpg";
import shaurma6 from "../../assets/Shaurma/shaurma6.jpg";



import pizza1 from "../../assets/pizza/pizza1.jpeg";
import pizza2 from "../../assets/pizza/pizza2.jpeg";
import pizza3 from "../../assets/pizza/pizza3.jpg";
import pizza4 from "../../assets/pizza/pizza4.jpg";
import pizza5 from "../../assets/pizza/pizza5.jpeg";
import pizza6 from "../../assets/pizza/pizza7.jpg";



import dessert1 from "../../assets/desserts/desserts1.jpg";
import dessert2 from "../../assets/desserts/desserts2.jpg";
import dessert3 from "../../assets/desserts/desserts3.jpg";
import dessert4 from "../../assets/desserts/desserts4.jpg";
import dessert5 from "../../assets/desserts/desserts5.jpg";
import dessert6 from "../../assets/desserts/desserts7.jpg";



import vok1 from "../../assets/wok/vok1.jpeg";
import vok2 from "../../assets/wok/vok2.jpeg";
import vok3 from "../../assets/wok/vok3.jpg";



import sauce1 from "../../assets/sauce/sauce1.jpg";
import sauce2 from "../../assets/sauce/sauce2.jpg";
import sauce3 from "../../assets/sauce/sauce3.jpg";


import hotdog1 from "../../assets/hot-dogs/photo (3).png";
import hotdog2 from "../../assets/hot-dogs/photo (4).png";
import hotdog3 from "../../assets/hot-dogs/photo (5).png";



import zakuski1 from "../../assets/zakuski/photo.jpeg";
import zakuski2 from "../../assets/zakuski/photo (1).jpeg";
import zakuski3 from "../../assets/zakuski/photo (2).png";


const allImages = {
  burgers: [burger1, burger2, burger3, burger4, burger5, burger6],
  zakuski: [zakuski1, zakuski2, zakuski3],
  hotdogs: [hotdog1, hotdog2, hotdog3],
  kombo: [kombo1, kombo2, kombo3, kombo4, kombo5, kombo6],
  shaurma: [shaurma1, shaurma2, shaurma3, shaurma4, shaurma5, shaurma6],
  pizza: [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6],
  dessert: [dessert1, dessert2, dessert3, dessert4, dessert5, dessert6],
  vok: [vok1, vok2, vok3],
  sauce: [sauce1, sauce2, sauce3]
};

export default function addImage(obj) {
  const {data, title}= obj
  return data.map((item, index) => {
    item.img = allImages[title][index];
    return item;
  });
}
