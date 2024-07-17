import React, { useEffect, useState } from 'react';
import './MainContent.css';
import product1 from './assets/p1.png'; // replace with the actual path to your image
import product2 from './assets/p2.png'; // replace with the actual path to your image
import product3 from './assets/p3.png'; // replace with the actual path to your image
import promoImage from './assets/back.png'; // replace with the actual path to your image
import collectionsImage from './assets/New products.png'; // replace with the actual path to your image

const MainContent = React.forwardRef((props, ref) => {
  const [swipeActive, setSwipeActive] = useState(false);

  useEffect(() => {
    const video = document.getElementById('bg-video');
    if (video) {
      video.oncanplay = () => console.log('Video can play');
      video.onerror = (e) => console.log('Video error:', e);
    } else {
      console.log('Video element not found');
    }
  }, []);

  const handleSwipe = () => setSwipeActive(true);

  return (
    <div className={`main-container ${swipeActive ? 'swipe-active' : ''}`}>
      <div className="main-content">
        <video id="bg-video" autoPlay muted loop>
          <source src="/nike.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="promo-section">
        <h3>Nike Pegasus 41</h3>
        <h1>DON'T WASTE YOUR ENERGY</h1>
        <p>Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam.</p>
        <button className="shop-button">Shop</button>
      </div>

      <div className="new-products-section">
        <div className="promo-container">
          <img src={promoImage} alt="Promo" className="promo-image" />
          <div className="products-container">
            <div className="product">
              <a href="#">
                <img src={product1} alt="Nike Air Max 97" />
              </a>
            </div>
            <div className="product">
              <a href="#">
                <img src={product2} alt="Nike Air Jordans" />
              </a>
            </div>
            <div className="product">
              <a href="#">
                <img src={product3} alt="Nike Sneakers" />
              </a>
            </div>
          </div>
          
      <div className="swipe-indicator" onClick={handleSwipe}>
        <div className="swipe-text">Click to Explore more</div>
        <div className="double-arrow">&#x2192;&#x2192;</div>
      </div>

      <div className="swipe-content">
        <video id="swipe-video" autoPlay muted loop>
          <source src="/vid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="swipe-video-text">
          <h2>Explore More</h2>
          <p>Deep dive into more content.</p>
        </div>
      </div>

          <div className="promo-video">
          <video id="promo-video" autoPlay muted loop>
          <source src="/u.mp4" type="video/mp4" />
        </video>
          </div>
        </div>
      </div>



      <div className="collections-section">
        <h2>Check out the collections</h2>
        <div className="collections-image-container">
          <img src={collectionsImage} alt="Collections" className="collections-image" />
          <a href="#" className="collection-label men">Men</a>
          <a href="#" className="collection-label women">Women</a>
          <a href="#" className="collection-label kids">Kids</a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Find A Store</a></li>
              <li><a href="#">Become A Member</a></li>
              <li><a href="#">Send Us Feedback</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><a href="#">Get Help</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Contact Us On Nike.com Inquiries</a></li>
              <li><a href="#">Contact Us On All Other Inquiries</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Nike</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2024 Nike, Inc. All rights reserved</p>
            <p>
              <a href="#">Guides</a>
              <span> | </span>
              <a href="#">Terms of Sale</a>
              <span> | </span>
              <a href="#">Terms of Use</a>
              <span> | </span>
              <a href="#">Nike Privacy Policy</a>
            </p>
          </div>
          <div className="footer-bottom-right">
            <p>India</p>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default MainContent;
