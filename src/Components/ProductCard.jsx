import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star, Heart, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import './ProductCard.css';

const ProductCard = ({ product, variant = 'standard' }) => {
  const { addToCart, addToWishlist, isInWishlist } = useShop();

  // Wishlist variant matches the Wishlist page screenshot
  if (variant === 'wishlist') {
    return (
      <div className="product-card wishlist-variant">
        <div className="product-image-wrapper">
          <Link to={`/product/${product.id}`}>
            <img src={product.img || product.image} alt={product.name} className="product-image" loading="lazy" />
          </Link>
          <button className="heart-icon-btn active" onClick={() => addToWishlist(product)}>
            <Heart size={16} fill="#FF4D8D" color="#FF4D8D" />
          </button>
          {product.isBestSeller && <div className="tag best-seller-mini">BEST SELLER</div>}
        </div>

        <div className="product-info">
          <div className="name-price-row">
            <Link to={`/product/${product.id}`}>
              <h3 className="product-name serif">{product.name}</h3>
            </Link>
            <span className="product-price-magenta">Pkr {Number(String(product.price).replace(/[^0-9.]/g, '') || 0).toFixed(2)}</span>
          </div>
          
          <p className="product-short-desc">{product.description || product.benefits || 'Premium glow ritual essential.'}</p>

          <button className="btn-add-cart-full" onClick={() => addToCart(product)}>
            <ShoppingCart size={14} style={{ marginRight: '8px' }} /> ADD TO CART
          </button>
        </div>
      </div>
    );
  }

  // Shop variant matches the Category page screenshot
  if (variant === 'shop') {
    return (
      <div className="product-card shop-variant">
        <div className="product-image-wrapper">
          <Link to={`/product/${product.id}`}>
            <img src={product.img || product.image} alt={product.name} className="product-image" loading="lazy" />
          </Link>
          <div className="card-tags">
            {product.isBestSeller && <span className="tag best-seller">BEST SELLER</span>}
            {product.isNew && <span className="tag new">NEW</span>}
            {product.isEditorsPick && <span className="tag editors-pick">EDITOR'S PICK</span>}
          </div>
        </div>

        <div className="product-info">
          <div className="name-price-row">
            <Link to={`/product/${product.id}`}>
              <h3 className="product-name serif">{product.name}</h3>
            </Link>
            <span className="product-price-mini">Pkr {Number(String(product.price).replace(/[^0-9.]/g, '') || 0)}</span>
          </div>
          
          <div className="rating-row">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="#FF4D8D" color="#FF4D8D" />
              ))}
            </div>
            <span className="rating-count">({product.reviews || 0})</span>
          </div>

          <button className="btn-add-to-cart" onClick={() => addToCart(product)}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }

  // Complement variant for Product Details page
  if (variant === 'complement') {
    return (
      <div className="product-card complement-variant">
        <div className="product-image-wrapper">
          <Link to={`/product/${product.id}`}>
            <img src={product.img || product.image} alt={product.name} className="product-image" loading="lazy" />
          </Link>
        </div>

        <div className="product-info">
          <Link to={`/product/${product.id}`}>
            <h3 className="product-name serif">{product.name}</h3>
          </Link>
          <div className="price-quick-add">
            <span className="product-price">Pkr {Number(String(product.price).replace(/[^0-9.]/g, '') || 0).toFixed(2)}</span>
            <button className="btn-quick-add" onClick={() => addToCart(product)}>Quick Add</button>
          </div>
        </div>
      </div>
    );
  }

  // Standard variant for Home page
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Link to={`/product/${product.id}`}>
          <img src={product.img || product.image} alt={product.name} className="product-image" loading="lazy" />
        </Link>
        <div className="card-tags">
          {product.isBestSeller && <span className="tag best-seller">BEST SELLER</span>}
          {product.isNew && <span className="tag new">NEW</span>}
          {product.isEditorsPick && <span className="tag editors-pick">EDITOR'S PICK</span>}
        </div>
      </div>

      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name serif">{product.name}</h3>
        </Link>
        <p className="product-description">{product.benefits || 'Radiance & Glow'}</p>
        
        <div className="product-footer">
          <span className="product-price">Pkr {Number(String(product.price).replace(/[^0-9.]/g, '') || 0).toFixed(2)}</span>
          <button className="add-cart-mini" onClick={() => addToCart(product)}>
            <Plus size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
