import MainContent from "./components/Layout/MainContent";
import MainHeader from "./components/Layout/MainHeader";
import MainHeaderImage from "./components/Layout/MainHeaderImage";
import Card from "./components/UI/Card";
import MainHero from "./components/Layout/MainHero";
import ProductList from "./components/Product/ProductList";
import CartContextProvider from "./context/CartProvider";

function App() {
    
  return (
    <CartContextProvider>
        <MainHeader/>
        <MainHeaderImage/>
        <MainContent>
            <Card cardType={'hero'}>
                <MainHero/>
            </Card>
            <Card cardType={'products'}>
                <ProductList/>
            </Card>
        </MainContent>
    </CartContextProvider>
  );
}

export default App;
