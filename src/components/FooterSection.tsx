
import '../App.css';

const FooterSection = () => {
  return (
    <div className="footer-wrapper">
      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="subscribe-content">
          <h2>Subscribe</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your Email Address" />
            <button>Subscribe Now ►</button>
          </div>
        </div>
        <div className="subscribe-image">
          <img src="https://via.placeholder.com/300x200" alt="Subscribe" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Contact us</h3>
            <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
            <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
            <p>Phone no: 123456789</p>
          </div>
          <div className="footer-column">
            <h3>Follow us</h3>
            <div className="social-icons">
              <span>📘</span>
              <span>🔗</span>
              <span>📷</span>
              <span>🐦</span>
              <span>▶️</span>
              <span>🔍</span>
            </div>
          </div>
          <div className="footer-column">
            <h3>Head Office</h3>
            <ul>
              <li>📍 Lorem ipsum dolor sit amet...</li>
              <li>⏱️ Lorem ipsum dolor sit amet...</li>
              <li>⏱️ Lorem ipsum dolor sit amet...</li>
              <li>🚉 Lorem ipsum asd asdsaweeq</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2021 All Rights Reserved. <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
