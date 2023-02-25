import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductCard } from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a Skins CSGO"} />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
