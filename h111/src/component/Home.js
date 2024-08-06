import React from "react";
import "../common/Home.css";

 export const Home = () => {
    const products = [
        {
          id: 1,
          name: "Vitamin C serum",
          price: "₹ 295",
          originalPrice: "₹ 299",
          rating: 4,
          imageUrl: "https://i.pinimg.com/564x/9f/af/11/9faf117b216f2aa8a897e41ca3e870ea.jpg",
          description: "Acne, Breakouts & Oiliness",
        },
        {
          id: 2,
          name: "Vitamin C",
          price: "₹ 399",
          rating: 4,
          imageUrl: "https://i.pinimg.com/564x/38/17/6c/38176c048b80766efc9d602ca2fce1ff.jpg",
          description: "Sun protection, UV exposure / damage",
        },
        {
          id: 3,
          name: "Retinol B3 Serum",
          price: "₹ 545",
          originalPrice: "₹ 549",
          rating: 5,
          imageUrl: "https://i.pinimg.com/564x/a2/52/21/a25221990d3de081a64eae43c9fd8b88.jpg",
          description: "Acne, Oily Skin, Blackheads & Irritation",
        },
        {
          id: 4,
          name: "Garnier Vitamin C serum",
          price: "₹ 539",
          originalPrice: "₹ 549",
          rating: 4,
          imageUrl: "https://i.pinimg.com/564x/69/bd/36/69bd36f9bacb91f263ff7a201af8f376.jpg",
          description: "Hyperpigmentation, Tanning & Sunspot",
        },
      ];
    
      const categories = [
        {
          id: 1,
          name: "Skin",
          imageUrl: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/1707202320-67ef6468516dd5c6.png?crop=center&height=270&v=1707202328&width=360",
        },
        {
          id: 2,
          name: "Body",
          imageUrl: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/1706099761-f86e95709c7aaba4.png?crop=center&height=270&v=1706099767&width=360",
        },
        {
          id: 3,
          name: "Hair",
          imageUrl: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/1706099804-80666e6d221da1a8.png?crop=center&height=270&v=1706099810&width=360",
        },
        {
          id: 4,
          name: "Lips",
          imageUrl: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/1707202423-7af38ee9fbec530d.png?crop=center&height=270&v=1707202432&width=360",
        },
      ];

  return (
    <div className="container">
      <header className="header">
        <div className="logo">GlamGuru</div>
        <nav className="navbar">
          <a href="#shop">Shop</a>
          <a href="#best-sellers">Best Sellers</a>
          <a href="#skin-body-care">Skin & Body Care</a>
          <a href="#baby-care">Baby Care</a>
          <a href="#hair-care">Hair Care</a>
          <a href="#build-routine">Build Your Routine</a>
          <a href="#track-order">Track Order</a>
        </nav>
        <div className="header-icons">
          <span className="icon">🔍</span>
          <span className="icon">👤</span>
          <span className="icon">🛒</span>
        </div>
      </header>

      <section className="content">
        <div className="product-display">
          <img
            src="https://www.hokmakeup.com/cdn/shop/files/5060805941026_4.png?v=1722074858"
            alt="display"
          />
        </div>
        <div className="product-info">
          <h2>New Launch</h2>
          <h1>Proven Safe Baby Care Solutions</h1>
          <p>
            A curated range of pediatrician-approved baby care products
            formulated with the most sensitive skin in mind. Our hypoallergenic
            <br />
            and dermatologically-tested line gently cleanses, soothes,
            protects, and nourishes your little ones.
          </p>
          <button className="shop-now">Shop Now</button>
        </div>
      </section>

      <div className="best-sellers">
        <h2>Our Best Sellers</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">
                <span>{product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <div className="product-rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="shop-by-category">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.imageUrl} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <div className="Tarif">
        <h1>The future of personal care is here</h1>
        <h2>
          Embrace GlamGuru, where each element is chosen for its scientific
          merit, offering you authentic, effective skincare solutions.
        </h2>
        <div className="jyadatarif-container">
          <div className="jyadatarif">
            <img
              src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/transparency.png?crop=center&height=128&v=1709367756&width=128"
              alt="Transparency"
            />
            <h1>Transparency</h1>
            <h2>Full disclosure of ingredients and concentration</h2>
          </div>
          <div className="jyadatarif">
            <img
              src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/medical-research-256_1.png?v=1708782298&width=192"
              alt="Efficacy"
            />
            <h1>Efficacy</h1>
            <h2>Formulations developed in our in-house laboratories</h2>
          </div>
          <div className="jyadatarif">
            <img
              src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/download.png?crop=center&height=128&v=1709206575&width=128"
              alt="Affordable"
            />
            <h1>Affordable</h1>
            <h2>Skincare and access to all</h2>
          </div>
          <div className="jyadatarif">
            <img
              src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/globe.png?v=1709367803&width=192"
              alt="Only the Best"
            />
            <h1>Only the Best</h1>
            <h2>Ingredients from across the world</h2>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-section">
          <h2>About Us</h2>
          <ul>
            <li>Our values</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
            <li>Disclaimer</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>Knowledge</li>
            <li>FAQs</li>
            <li>Return & refund policy</li>
            <li>Track order</li>
            <li>Download App</li>
          </ul>
        </div>
        <div className="footer">
        <div className="footer-section">
          <h2>About Us</h2>
          <ul>
            <li>Our values</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
            <li>Disclaimer</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>Knowledge</li>
            <li>FAQs</li>
            <li>Return & refund policy</li>
            <li>Track order</li>
            <li>Download App</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Need help fast? Fill out our form or email help@beminimalist.co</p>
          <div className="footer-icons">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/03/09/58/email-309491_1280.png"
              alt="Email"
            />
            <img
              src="https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-facebook-6.png"
              alt="Facebook"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCIezUN8aZsOSQQGTP8ru8qjsu1G7l-RGyw&s"
              alt="Instagram"
            />
            <img
              src="https://s.widget-club.com/samples/hiEwmBQnJQTmN7Aqb6jAaKx9mzY2/nJXGvIDJ7omGQnHsGwXZ/762AD722-6316-4E13-AB2B-D93F2CEE51E4.jpg?q=70"
              alt="YouTube"
            />
          </div>
        </div>
      </div>
    </div>
      </div>
  
  );
};

export default Home;