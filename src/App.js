import { useState } from "react";
import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Download from "./components/download/Download";
import Favourite from "./components/favourite/Favourite";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Sale from "./components/sale/Sale";
import ScrollToUp from "./components/scrollToUp/ScrollToUp";

function App() {
  const [arrivals, setArrivals] = useState(null);
  const [sale, setSale] = useState(null);
  const [favourite, setFavourite] = useState(null);
  const [download, setDownload] = useState(null);

  const getArrivals = (elem) => setArrivals(elem);
  const getSale = (elem) => setSale(elem);
  const getFavourite = (elem) => setFavourite(elem);
  const getDownload = (elem) => setDownload(elem);

  const elements = { arrivals, sale, favourite, download };

  return (
    <div className="App">
      <Header elements={elements} />
      <ScrollToUp />
      <Promo />
      <Brands />
      <Arrivals getArrivals={getArrivals} />
      <Sale getSale={getSale} />
      <Favourite getFavourite={getFavourite} />
      <Download getDownload={getDownload} />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
