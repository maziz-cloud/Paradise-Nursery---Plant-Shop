import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../features/cart/CartSlice';

function CartItem() {
  const cart = useSelector(state => state.cart.cart);
  const cartCount = useSelector(state => state.cart.cartCount);
  const cartTotal = useSelector(state => state.cart.cartTotal);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Your cart is empty</h2>
        <Link to="/products">
          <button style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '5px', cursor: 'pointer' }}>
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Shopping Cart</h1>
      <div style={{ backgroundColor: '#ecf0f1', padding: '1rem', borderRadius: '5px', marginBottom: '2rem' }}>
        <p>Total Plants: {cartCount}</p>
        <p>Total Cost: ${cartTotal.toFixed(2)}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {cart.map(item => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button onClick={() => dispatch(decrementQuantity(item.id))} style={{ width: '30px', height: '30px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))} style={{ width: '30px', height: '30px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>+</button>
              </div>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))} style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '2rem' }}>
        <Link to="/products">
          <button style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '5px', cursor: 'pointer' }}>
            Continue Shopping
          </button>
        </Link>
        <button onClick={handleCheckout} style={{ backgroundColor: '#27ae60', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '5px', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
