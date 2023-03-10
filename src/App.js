import { Footer } from "./components/Footer/Footer";
import ItemCount from "./components/ItemCount/ItemCount";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductCard } from "./components/ProductCard/ProductCard"

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a Skins CSGO"} />
      <ProductCard title={"Producto uno"} price={200} isRed={false}/>
      <ProductCard title={"Producto dos"} price={500} isRed={false}/>
      <ItemCount />
      <Footer />
    </div>
  );
}

export default App;
