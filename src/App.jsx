import Banner from "./components/Banner";
import Carts from "./components/Carts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";
import ProductProvider from "./contexts/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Banner />
        <Header />
        <main className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Products />
            <Carts />
          </div>
        </main>
        <Newsletter />
        <Footer />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
