import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';

function ProductList() {
  const plants = useSelector(state => state.cart.plants);
  const dispatch = useDispatch();

  const categories = [...new Set(plants.map(p => p.category))];

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Plants</h1>
      {categories.map(category => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h2>{category}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
                <img src={plant.image} alt={plant.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  onClick={() => handleAddToCart(plant.id)}
                  disabled={plant.inCart}
                  style={{
                    backgroundColor: plant.inCart ? '#95a5a6' : '#27ae60',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    cursor: plant.inCart ? 'not-allowed' : 'pointer'
                  }}
                >
                  {plant.inCart ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
