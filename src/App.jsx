import Aside from "./Components/Aside/Aside";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";

import "./style/App.scss";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <div className="wrapper_content">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
