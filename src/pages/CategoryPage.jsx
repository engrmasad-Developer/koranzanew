import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useShop } from '../context/ShopContext';
import './CategoryPage.css';
import ProductCard from '../Components/ProductCard';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q');

    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Hardcoded products from the screenshot to match 100% fidelity
    const shopProducts = [
        {
            id: 's1',
            name: 'Luminous Petal Serum',
            price: '600',
            rating: 5,
            reviews: 235,
            isBestSeller: true,
            img: 'https://images.pexels.com/photos/8128062/pexels-photo-8128062.jpeg'
        },
        {
            id: 's2',
            name: 'Velvet Cloud Crème',
            price: '800',
            rating: 5,
            reviews: 58,
            img: 'https://images.pexels.com/photos/8459356/pexels-photo-8459356.jpeg'
        },
        {
            id: 's3',
            name: 'Petal Infusion Cleanser',
            price: '500',
            rating: 5,
            reviews: 432,
            img: 'https://images.pexels.com/photos/8140916/pexels-photo-8140916.jpeg'
        },
        {
            id: 's4',
            name: 'Midnight Bloom Eye',
            price: '600',
            rating: 5,
            reviews: 42,
            isNew: true,
            img: 'https://images.pexels.com/photos/8128065/pexels-photo-8128065.jpeg'
        },
        {
            id: 's5',
            name: 'Morning Glow SPF',
            price: '800',
            rating: 5,
            reviews: 130,
            img: 'https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg'
        },
        {
            id: 's6',
            name: 'Morning Glow SPF',
            price: '800',
            rating: 5,
            reviews: 250,
            img: 'https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg'
        }
    ];

    useEffect(() => {
        setLoading(true);
        // Set data immediately
        setCategoryProducts(shopProducts);
        setLoading(false);
        window.scrollTo(0, 0);
    }, [categoryName, searchQuery]);

    return (
        <div className="category-page">
            <div className="container">
                <header className="category-header text-center">
                    <h1 className="category-main-title serif text-magenta">Shop the Glow</h1>
                    <p className="category-subtitle">
                        Discover our collection of petal-soft essentials designed to illuminate your natural identity.
                    </p>
                </header>

                <div className="category-controls">
                    <div className="filter-pills">
                        <span className="control-label">FILTER BY:</span>
                        <button className="pill-btn active">Best Sellers</button>
                        <button className="pill-btn">New Arrivals</button>
                    </div>
                    <div className="sort-control">
                        <span className="control-label">SORT:</span>
                        <select className="minimal-select">
                            <option>Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="category-layout">
                    <aside className="category-sidebar">
                        <div className="sidebar-group">
                            <h3 className="sidebar-title text-magenta">Skin Type</h3>
                            <div className="checkbox-list">
                                <label className="custom-checkbox">
                                    <input type="checkbox" /> <span className="checkmark"></span> Normal
                                </label>
                                <label className="custom-checkbox">
                                    <input type="checkbox" /> <span className="checkmark"></span> Oily
                                </label>
                                <label className="custom-checkbox active">
                                    <input type="checkbox" defaultChecked /> <span className="checkmark"></span> Dry
                                </label>
                                <label className="custom-checkbox">
                                    <input type="checkbox" /> <span className="checkmark"></span> Sensitive
                                </label>
                                <label className="custom-checkbox">
                                    <input type="checkbox" /> <span className="checkmark"></span> Combination
                                </label>
                            </div>
                        </div>

                        <div className="sidebar-group">
                            <h3 className="sidebar-title text-magenta">Concern</h3>
                            <div className="checkbox-list">
                                <label className="custom-checkbox">
                                    <input type="checkbox" /> <span className="checkmark"></span> Anti-Aging
                                </label>
                                <label className="custom-checkbox">
                                    <input type="checkbox" /> <span className="checkmark"></span> Hydration
                                </label>
                                <label className="custom-checkbox active">
                                    <input type="checkbox" defaultChecked /> <span className="checkmark"></span> Brightening
                                </label>
                                <label className="custom-checkbox">
                                    <input type="checkbox" /> <span className="checkmark"></span> Acne
                                </label>
                            </div>
                        </div>

                        <div className="sidebar-group">
                            <h3 className="sidebar-title text-magenta">Price Range</h3>
                            <div className="price-slider-wrapper">
                                <input type="range" min="200" max="1600" defaultValue="1200" className="styled-range" />
                                <div className="price-range-labels">
                                    <span>Pkr 200</span>
                                    <span className="current-range">1200</span>
                                    <span>Pkr 1600+</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <main className="category-products-area">
                        {loading ? (
                            <div className="loading-state">Loading the glow...</div>
                        ) : categoryProducts.length === 0 ? (
                            <p className="no-results">No products found. Try another filter!</p>
                        ) : (
                            <div className="shop-products-grid">
                                {categoryProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} variant="shop" />
                                ))}
                            </div>
                        )}

                        <div className="pagination">
                            <button className="page-arrow"><ChevronLeft size={16} /></button>
                            <button className="page-num active">1</button>
                            <button className="page-num">2</button>
                            <button className="page-num">3</button>
                            <button className="page-arrow"><ChevronRight size={16} /></button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
