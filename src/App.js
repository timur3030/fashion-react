import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Download from "./components/download/Download";
import Favourite from "./components/favourite/Favourite";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Sale from "./components/sale/Sale";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favourite />
      <Download />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
