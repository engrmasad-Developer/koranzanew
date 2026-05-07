import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySection.css';

const CategorySection = () => {
    const stories = [
        { label: 'MORNING DEW', img: 'https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg' },
        { label: 'THE SERUM', img: 'https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg' },
        { label: 'RITUAL GUIDE', img: 'https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg' }
    ];

    return (
        <section className="category-section" id="categories">
            <div className="container">
                {/* STORIES SECTION */}
                <div className="stories-container">
                    {stories.map((story, index) => (
                        <div key={index} className="story-item">
                            <div className="story-circle">
                                <img src={story.img} alt={story.label} />
                            </div>
                            <span className="story-label">{story.label}</span>
                        </div>
                    ))}
                </div>

                {/* BENTO GRID */}
                <div className="bento-grid">
                    {/* LEFT COLUMN */}
                    <div className="bento-column">
                        <div className="bento-card large face-care">
                            <Link to="/category/Face Care">
                                <img src="https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg" alt="Face Care" />
                                <div className="card-overlay bottom">
                                    <h2 className="card-title serif">Face Care</h2>
                                    <p className="card-subtitle">Deep hydration for every skin profile.</p>
                                    <span className="explore-btn">Explore Collection</span>
                                </div>
                            </Link>
                        </div>

                        <div className="bento-card small whiting-cream">
                            <Link to="/category/Whiting Cream">
                                <img src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg" alt="Whiting Cream" />
                                <div className="card-overlay flex-row">
                                    <div className="text-content">
                                        <h3 className="card-title serif">Whiting Cream</h3>
                                        <p className="card-subtitle">Gentle solutions for clarity without the irritation.</p>
                                    </div>
                                    <div className="arrow-circle">→</div>
                                </div>
                            </Link>
                        </div>

                        <div className="bento-card small beauty-serum">
                            <Link to="/category/Beauty Serum">
                                <img src="https://images.pexels.com/photos/6621217/pexels-photo-6621217.jpeg" alt="Beauty Serum" />
                                <div className="card-overlay top">
                                    <h3 className="card-title serif">Beauty Serum</h3>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="bento-column">
                        <div className="bento-card small glow-serum">
                            <Link to="/category/Glow Serum">
                                <img src="https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg" alt="Glow Serum" />
                                <div className="card-overlay bottom">
                                    <h3 className="card-title serif">Glow Serum</h3>
                                </div>
                            </Link>
                        </div>

                        <div className="bento-card small acne-care">
                            <Link to="/category/Acne Care">
                                <img src="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg" alt="Acne Care" />
                                <div className="card-overlay flex-row">
                                    <div className="text-content">
                                        <h3 className="card-title serif">Acne Care</h3>
                                        <p className="card-subtitle">Gentle solutions for clarity without the irritation.</p>
                                    </div>
                                    <div className="arrow-circle">→</div>
                                </div>
                            </Link>
                        </div>

                        <div className="bento-card large facial-cleanser">
                            <Link to="/category/Facial Cleanser">
                                <img src="https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg" alt="Facial Cleanser" />
                                <div className="card-overlay bottom">
                                    <h2 className="card-title serif">Facial Cleanser</h2>
                                    <p className="card-subtitle">Deep hydration for every skin profile.</p>
                                    <span className="explore-btn">Explore Collection</span>
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
