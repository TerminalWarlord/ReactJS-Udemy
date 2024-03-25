import { useContext } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';
import { CartContext } from '../store/shopping-card-context.jsx';
export default function Shop({ onAddItemToCart }) {
  const { addItemToCart } = useContext(CartContext);
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={addItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
