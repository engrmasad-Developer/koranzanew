import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySection.css';

// Using local images or placeholder URLs that match the design intent
const CategorySection = () => {
    return (
        <section className="category-section" id="categories">
            <div className="container">
                {/* PRACTICES AREA */}
                <div className="practices-area">
                    <span className="small-caps text-magenta">PRACTICES</span>
                    <div className="practices-grid">
                        <div className="practice-item">
                            <div className="practice-circle">
                                <img src="https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg" alt="Morning Dew" />
                            </div>
                            <span className="practice-label">MORNING DEW</span>
                        </div>
                        <div className="practice-item">
                            <div className="practice-circle">
                                <img src="https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg" alt="The Serum" />
                            </div>
                            <span className="practice-label">THE SERUM</span>
                        </div>
                        <div className="practice-item">
                            <div className="practice-circle">
                                <img src="https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg" alt="Ritual Guide" />
                            </div>
                            <span className="practice-label">RITUAL GUIDE</span>
                        </div>
                    </div>
                </div>

                {/* MASONRY GRID */}
                <div className="masonry-grid">
                    <div className="masonry-large">
                        <Link to="/category/Face Care">
                            <img src="https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg" alt="Face Care" />
                            <div className="masonry-text-overlay">
                                <h3 className="serif">Face Care</h3>
                                <p>Deep hydration for every skin profile.</p>
                                <span className="explore-link">Explore Collection</span>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="masonry-right">
                        <div className="masonry-small top">
                            <Link to="/category/Glow Serum">
                                <img src="https://images.pexels.com/photos/6621217/pexels-photo-6621217.jpeg" alt="Glow Serum" />
                                <div className="masonry-small-overlay">
                                    <h4 className="serif">Glow Serum</h4>
                                </div>
                            </Link>
                        </div>
                        
                        <div className="masonry-small bottom">
                            <Link to="/category/Acne Care">
                                <img src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg" alt="Acne Care" />
                                <div className="masonry-bottom-overlay">
                                    <div>
                                        <h4 className="serif">Acne Care</h4>
                                        <p>Gentle solutions for clarity without the irritation.</p>
                                    </div>
                                    <div className="arrow-btn">→</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
