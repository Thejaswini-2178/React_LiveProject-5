import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>About Us</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="social">
                    <li><a href="javascript:void(0)"><i className="icofont-facebook" /></a></li>
                    <li><a href="javascript:void(0)"><i className="icofont-google-plus" /></a></li>
                    <li><a href="javascript:void(0)"><i className="icofont-twitter" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Quick Links</h2>
                  <ul>
                    <li><a href="/home"><i className="fa fa-caret-right" />Home</a></li>
                    <li><a href="/about"><i className="fa fa-caret-right" />About Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Open Hours</h2>
                  <ul className="time-sidual">
                    <li>Monday - Friday: <span>8.00 - 20.00</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Newsletter</h2>
                  <form className="newsletter-inner">
                    <input
                      name="email"
                      placeholder="Email Address"
                      className="common-input"
                      onFocus={(e) => (e.target.placeholder = '')}
                      onBlur={(e) => (e.target.placeholder = 'Your email address')}
                      required
                      type="email"
                    />
                    <button className="button">
                      <i className="icofont-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>© Copyright 2024 | All Rights Reserved by <a href="https://example.com">Your Website</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
