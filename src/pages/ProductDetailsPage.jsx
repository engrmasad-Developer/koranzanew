import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import './ProductDetailsPage.css';
import ProductCard from '../Components/ProductCard';

const BASE_URL = "http://localhost:3000";

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    const [isHowExpanded, setIsHowExpanded] = useState(false);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart, addToWishlist, isInWishlist, products } = useShop();

    // Fetch product details
    useEffect(() => {
        const loadProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${BASE_URL}/api/products/${productId}`);
                if (response.data.success) {
                    const data = response.data.data;
                    // Map snake_case from API to camelCase where used in UI
                    setProduct({
                        ...data,
                        originalPrice: data.original_price,
                        howToUse: data.how_to_use
                    });
                }
            } catch (error) {
                console.log("Error loading product:", error);
            } finally {
                setLoading(false);
            }
        };
        loadProduct();
    }, [productId]);

    // Get related products (excluding current)
    const perfectPairings = products
        .filter(p => p.id !== parseInt(productId))
        .slice(0, 4);

    if (loading || !product) {
        return (
            <div className="product-not-found">
                {loading ? 'Loading product...' : 'Product not found.'}
                <button onClick={() => navigate('/')}>Go Home</button>
            </div>
        );
    }

    const handleQuantityChange = (type) => {
        if (type === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (type === 'increase') {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="product-details-page container">
            <div className="product-main-grid">
                <div className="product-gallery">
                    <div className="main-image-box glass">
                        <img src={product.image} alt={product.name} className="main-image" />
                    </div>
                    <div className="thumbnail-grid">
                        <div className="thumbnail active"><img src={product.image} alt="thumbnail" /></div>
                        <div className="thumbnail"><img src={product.image} alt="thumbnail" /></div>
                        <div className="thumbnail"><img src={product.image} alt="thumbnail" /></div>
                    </div>
                </div>

                <div className="product-info-panel">
                    <span className="brand-tag">KORENZA</span>
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-price">PKR {product.price}</p>
                    <p className="product-summary">
                        {product.description || "A luxurious serum that hydrates and brightens your skin for a natural glow."}
                    </p>
                    
                    <div className="action-row">
                        <div className="quantity-box">
                            <button onClick={() => handleQuantityChange('decrease')}><Minus size={16} /></button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange('increase')}><Plus size={16} /></button>
                        </div>
                        <button className="btn-primary add-to-cart-btn" onClick={() => addToCart({ ...product, quantity })}>
                            ADD TO CART
                        </button>
                    </div>

                    <div className="product-meta">
                        <div className="meta-item"><Heart size={18} /> Add to wishlist</div>
                        <div className="meta-item"><Star size={18} /> Verified reviews</div>
                    </div>
                </div>
            </div>

            <section className="results-section">
                <h2 className="section-title text-center">Luminous Results</h2>
                <div className="results-grid">
                    <div className="result-item">
                        <div className="result-icon pink-bg"><Plus size={24} /></div>
                        <h4>Hydrate</h4>
                        <p>Deeply hydrates the skin for a plump and healthy look.</p>
                    </div>
                    <div className="result-item">
                        <div className="result-icon glass"><Plus size={24} /></div>
                        <h4>Brighten</h4>
                        <p>Evens out skin tone and reveals natural radiance.</p>
                    </div>
                    <div className="result-item">
                        <div className="result-icon secondary-bg"><Plus size={24} /></div>
                        <h4>Smooth</h4>
                        <p>Reduces fine lines and improves skin texture.</p>
                    </div>
                </div>
            </section>

            <section className="practice-section">
                <h2 className="section-title text-center">Your Daily Practice</h2>
                <div className="practice-grid grid-3">
                    <div className="practice-step">
                        <div className="step-number">1</div>
                        <div className="step-icon"><img src={product.image} alt="Step 1" /></div>
                        <h4>Cleanse</h4>
                        <p>Start with a clean canvas for better absorption.</p>
                    </div>
                    <div className="practice-step">
                        <div className="step-number">2</div>
                        <div className="step-icon"><img src={product.image} alt="Step 2" /></div>
                        <h4>Apply</h4>
                        <p>Gently pat the serum onto your face and neck.</p>
                    </div>
                    <div className="practice-step">
                        <div className="step-number">3</div>
                        <div className="step-icon"><img src={product.image} alt="Step 3" /></div>
                        <h4>Moisturize</h4>
                        <p>Lock in the goodness with your favorite cream.</p>
                    </div>
                </div>
            </section>

            <section className="related-section">
                <h2 className="section-title text-center">Complement Your Glow</h2>
                <div className="grid-4">
                    {perfectPairings.map(item => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetailsPage;
