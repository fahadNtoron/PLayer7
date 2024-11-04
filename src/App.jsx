import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import News from "./Components/News";
import Players from "./Components/Player/Players";

function App() {

  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
    setCoin(coin + 210000);
  };

  return (
    <>
      <div>
        <Header coin={coin}></Header>
        <Banner handleCoin={handleCoin}></Banner>
        <Players coin={coin}></Players>
        <News></News>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
