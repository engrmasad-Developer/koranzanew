import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart, Minus, Plus, Truck, Droplets, Sparkles, Waves, Flower2, FlaskConical, Microscope } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { products as localProducts } from '../data/products';
import './ProductDetailsPage.css';
import ProductCard from '../Components/ProductCard';

const BASE_URL = "http://localhost:3000";

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart, products } = useShop();

    // Fetch product details
    useEffect(() => {
        const loadProduct = async () => {
            setLoading(true);
            try {
                // Try API first
                const response = await axios.get(`${BASE_URL}/api/products/${productId}`);
                if (response.data.success) {
                    const data = response.data.data;
                    setProduct({
                        ...data,
                        image: data.image || data.img,
                        originalPrice: data.original_price,
                        howToUse: data.how_to_use
                    });
                } else {
                    // Fallback to local products
                    let localMatch = localProducts.find(p => String(p.id) === String(productId));
                    
                    // Handle "luminous-X" and "sX" style IDs used in some components
                    if (!localMatch) {
                        const numericId = productId.replace(/[^0-9]/g, '');
                        if (numericId) {
                            localMatch = localProducts.find(p => String(p.id) === numericId);
                        }
                    }

                    if (localMatch) {
                        setProduct({
                            ...localMatch,
                            image: localMatch.image || localMatch.img
                        });
                    }
                }
            } catch (error) {
                // Fallback to local products on error
                let localMatch = localProducts.find(p => String(p.id) === String(productId));
                
                // Handle "luminous-X" and "sX" style IDs
                if (!localMatch) {
                    const numericId = productId.replace(/[^0-9]/g, '');
                    if (numericId) {
                        localMatch = localProducts.find(p => String(p.id) === numericId);
                    }
                }

                if (localMatch) {
                    setProduct({
                        ...localMatch,
                        image: localMatch.image || localMatch.img
                    });
                } else {
                    console.log("Error loading product:", error);
                }
            } finally {
                setLoading(false);
            }
        };
        loadProduct();
    }, [productId]);

    // Get related products (excluding current)
    const perfectPairings = (products.length > 0 ? products : localProducts)
        .filter(p => String(p.id) !== String(productId))
        .slice(0, 3);

    const testimonials = [
        {
            name: "Elena R.",
            role: "VERIFIED GLOW",
            text: "My skin hasn't felt this soft since my teens. The Ritual is now the best part of my morning.",
            img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
            rating: 5
        },
        {
            name: "Sophia M.",
            role: "VERIFIED GLOW",
            text: "The Radiance Serum is magic in a bottle. It's so lightweight yet so incredibly hydrating.",
            img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg",
            rating: 5
        },
        {
            name: "Julianne K.",
            role: "VERIFIED GLOW",
            text: "Packaging is gorgeous, but the results are what keep me coming back. Truly high-end quality.",
            img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
            rating: 5
        }
    ];

    if (loading || !product) {
        return (
            <div className="product-not-found">
                {loading ? 'Loading product...' : 'Product not found.'}
                <button onClick={() => navigate('/')}>Go Home</button>
            </div>
        );
    }

    return (
        <div className="product-details-page">
            <div className="container">
                {/* PRODUCT HERO SECTION */}
                <div className="product-main-grid">
                    <div className="product-gallery">
                        <div className="main-image-box">
                            <img src={product.image} alt={product.name} className="main-image" />
                        </div>
                        <div className="thumbnail-grid">
                            <div className="thumbnail active"><img src={product.image} alt="thumbnail" /></div>
                            <div className="thumbnail"><img src="https://images.pexels.com/photos/8140916/pexels-photo-8140916.jpeg" alt="thumbnail" /></div>
                            <div className="thumbnail"><img src="https://images.pexels.com/photos/8128065/pexels-photo-8128065.jpeg" alt="thumbnail" /></div>
                        </div>
                    </div>

                    <div className="product-info-panel">
                        <div className="tag-bestseller">BESTSELLER</div>
                        <h1 className="product-name serif">{product.name}</h1>
                        <p className="product-price serif text-magenta">Pkr {Number(product.price).toFixed(2)}</p>
                        
                        <p className="product-summary">
                            {product.description || "A lightweight, transformative serum that infuses your skin with deep hydration and a luminous, petal-soft glow."}
                        </p>
                        
                        <button className="btn-add-to-bag" onClick={() => addToCart({ ...product, quantity: 1 })}>
                            ADD TO BAG
                        </button>

                        <div className="shipping-info">
                            <Truck size={16} />
                            <span>Complimentary shipping on orders over Pkr 10,000</span>
                        </div>

                        <div className="benefit-items">
                            <div className="benefit-item">
                                <div className="benefit-icon"><Droplets size={20} /></div>
                                <div className="benefit-text">
                                    <strong>24h Hydration</strong>
                                    <span>Lock in moisture all day</span>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon"><Sparkles size={20} /></div>
                                <div className="benefit-text">
                                    <strong>Instantly Luminous</strong>
                                    <span>Radiance from within</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LUMINOUS RESULTS */}
                <section className="results-section">
                    <div className="section-intro text-center">
                        <h2 className="section-title">Luminous Results</h2>
                        <p className="section-subtitle">Scientifically formulated for visible skin transformation.</p>
                    </div>
                    <div className="results-grid">
                        <div className="result-card">
                            <div className="result-icon"><Droplets size={32} strokeWidth={1} /></div>
                            <h3>Hydrate</h3>
                            <p>Multi-weight hyaluronic acid penetrates deep to plump and quench thirsty skin cells.</p>
                        </div>
                        <div className="result-card">
                            <div className="result-icon"><Sparkles size={32} strokeWidth={1} /></div>
                            <h3>Brighten</h3>
                            <p>Rose essence and vitamin C work in harmony to fade dark spots and reveal a natural glow.</p>
                        </div>
                        <div className="result-card">
                            <div className="result-icon"><Waves size={32} strokeWidth={1} /></div>
                            <h3>Smooth</h3>
                            <p>Gentle fruit enzymes refine skin texture for a velvety, petal-soft finish without irritation.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* YOUR DAILY PRACTICES - PINK BG */}
            <section className="practice-section">
                <div className="container">
                    <div className="section-intro text-center">
                        <span className="small-caps text-magenta">The Experience</span>
                        <h2 className="section-title">Your Daily Practices</h2>
                    </div>
                    <div className="practice-grid">
                        <div className="practice-step">
                            <div className="step-image-wrapper">
                                <img src="https://images.pexels.com/photos/8459356/pexels-photo-8459356.jpeg" alt="Purify" />
                                <div className="step-number">1</div>
                            </div>
                            <h4>Purify</h4>
                            <p>Start with a clean canvas using our Cloud Cleanser.</p>
                        </div>
                        <div className="practice-step">
                            <div className="step-image-wrapper">
                                <img src="https://images.pexels.com/photos/8128062/pexels-photo-8128062.jpeg" alt="Infuse" />
                                <div className="step-number">2</div>
                            </div>
                            <h4>Infuse</h4>
                            <p>Apply 3-4 drops of Radiance Dew onto damp face and neck.</p>
                        </div>
                        <div className="practice-step">
                            <div className="step-image-wrapper">
                                <img src="https://images.pexels.com/photos/8140916/pexels-photo-8140916.jpeg" alt="Seal" />
                                <div className="step-number">3</div>
                            </div>
                            <h4>Seal</h4>
                            <p>Press gently with palms and follow with Silk Recovery Cream.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PURE INTENTIONS */}
            <section className="intentions-section">
                <div className="container grid-2">
                    <div className="intentions-content">
                        <h2 className="section-title">Pure Intentions</h2>
                        <div className="intention-items">
                            <div className="intention-item">
                                <div className="intention-icon"><Flower2 size={24} /></div>
                                <div className="intention-details">
                                    <h4>Damask Rose Essence</h4>
                                    <p>Sourced from sustainably grown petals, this essence calms inflammation and provides a delicate, natural scent ritual.</p>
                                </div>
                            </div>
                            <div className="intention-item">
                                <div className="intention-icon"><FlaskConical size={24} /></div>
                                <div className="intention-details">
                                    <h4>Vegan Hyaluronic Acid</h4>
                                    <p>Triple-molecular weight structure that targets different skin layers for comprehensive deep hydration.</p>
                                </div>
                            </div>
                            <div className="intention-item">
                                <div className="intention-icon"><Microscope size={24} /></div>
                                <div className="intention-details">
                                    <h4>Kakadu Plum Extract</h4>
                                    <p>The world's richest source of Vitamin C, providing potent antioxidant protection against environmental stress.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intentions-image">
                        <img src="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg" alt="Pure Intentions" />
                    </div>
                </div>
            </section>

            {/* LUMINOUS VOICES (TESTIMONIALS) */}
            <section className="voices-section container">
                <div className="section-intro">
                    <h2 className="section-title">Luminous Voices</h2>
                    <div className="rating-summary">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--primary)" color="var(--primary)" />)}
                        </div>
                        <span>4.9 / 5 (128 Reviews)</span>
                    </div>
                </div>
                <div className="voices-grid grid-3">
                    {testimonials.map((t, index) => (
                        <div className="voice-card" key={index}>
                            <div className="stars">
                                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} color="#EAEAEA" />)}
                            </div>
                            <p className="voice-text italic">"{t.text}"</p>
                            <div className="voice-user">
                                <img src={t.img} alt={t.name} className="user-img" />
                                <div className="user-info">
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* COMPLEMENT YOUR GLOW */}
            <section className="complement-section container">
                <h2 className="section-title text-center">Complement Your Glow</h2>
                <div className="grid-3">
                    {perfectPairings.map(item => (
                        <ProductCard key={item.id} product={item} variant="complement" />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetailsPage;
