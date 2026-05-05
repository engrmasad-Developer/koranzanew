import React from 'react';
import './Wishlist.css';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

const Wishlist = () => {
  const { wishlistItems } = useShop();
  const navigate = useNavigate();

  // Hardcoded wishlist products to match the screenshot for 100% fidelity
  const displayProducts = wishlistItems.length > 0 ? wishlistItems : [
    {
      id: 'w1',
      name: 'Midnight Bloom Elixir',
      price: '999.00',
      description: 'Regenerative night oil with damask rose and wild orchid.',
      img: 'https://images.pexels.com/photos/8128065/pexels-photo-8128065.jpeg'
    },
    {
      id: 'w2',
      name: 'Silk Aura Body Soufflé',
      price: '999.00',
      description: 'Whipped body butter infused with crushed pearls and shea.',
      isBestSeller: true,
      img: 'https://images.pexels.com/photos/8459356/pexels-photo-8459356.jpeg'
    },
    {
      id: 'w3',
      name: 'Luminous Dew Drops',
      price: '999.00',
      description: 'A glass-skin serum for instant radiance and deep hydration.',
      img: 'https://images.pexels.com/photos/8128062/pexels-photo-8128062.jpeg'
    },
    {
      id: 'w4',
      name: 'Sanctuary Flame',
      price: '999.00',
      description: 'Hand-poured soy candle with notes of white tea and peony.',
      img: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg'
    }
  ];

  return (
    <div className="wishlist-page">
      <div className="container">
        <header className="wishlist-header text-center">
          <h1 className="wishlist-title serif">Saved Products</h1>
          <p className="wishlist-subtitle">
            A curated sanctuary for your favorite luminous essentials. Return to these Products when you are ready to glow.
          </p>
        </header>
        
        <div className="wishlist-grid grid-3">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="wishlist" />
          ))}
        </div>

        {wishlistItems.length === 0 && (
          <div className="wishlist-footer text-center">
            <button className="btn-primary" onClick={() => navigate('/category/all')}>
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;