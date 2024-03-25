import CartContextProvider from './store/shopping-card-context.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
