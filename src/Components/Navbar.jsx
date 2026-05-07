import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Search, User, Heart, ShoppingCart, Bell } from "lucide-react";
import "./Navbar.css";

import { useShop } from "../context/ShopContext";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, wishlistItems } = useShop();
  const menuRef = useRef(null);

  const toggleSearch = () => setSearchOpen(!searchOpen);

  const toggleMobileMenu = () => {
    setSearchOpen(false);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (e) => {
    const isClick = e.type === "click";
    const isEnter = e.key === "Enter";

    if (isClick || isEnter) {
      if (!searchOpen && isClick) {
        setSearchOpen(true);
        return;
      }

      if (searchQuery.trim()) {
        navigate(`/category/search?q=${searchQuery}`);
        setSearchOpen(false);
        setMobileMenuOpen(false);
        setSearchQuery(""); // Clear search after navigating
      } else if (isClick && searchOpen) {
        setSearchOpen(false); // Close if clicking search icon with empty query
      }
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        const hamburger = document.querySelector('.hamburger-menu');
        if (hamburger && !hamburger.contains(event.target)) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Helper to check if a link is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          Korenza
        </Link>

        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className={isActive("/category") ? "active" : ""}>
            <Link to="/category/all" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>contact us</Link>
          </li>
          <li className={isActive("/about") ? "active" : ""}>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About us</Link>
          </li>
        </ul>

        <div className="nav-icons">
          <Link to="/cart" className="icon-link">
            <ShoppingCart size={20} strokeWidth={1.5} />
            {cartItems.length > 0 && <span className="icon-badge">{cartItems.length}</span>}
          </Link>
          <Link to="/heart" className="icon-link">
            <Heart size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/notifications" className="icon-link">
            <Bell size={20} strokeWidth={1.5} />
            <span className="icon-badge-dot"></span>
          </Link>
          <Link to="/auth" className="icon-link">
            <User size={20} strokeWidth={1.5} />
          </Link>

          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
