import React, { Component } from 'react';
import footerData from './footerData.json'; // Adjust the path as necessary

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer" className="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-footer">
                                        <h2>{footerData.about.title}</h2>
                                        <p>{footerData.about.description}</p>
                                        <ul className="social">
                                            {footerData.about.socialLinks.map((link, index) => (
                                                <li key={index}>
                                                    <a href={link.url}>
                                                        <i className={`icofont-${link.platform}`} />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-footer f-link">
                                        <h2>Quick Links</h2>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <ul>
                                                    {footerData.quickLinks.slice(0, 5).map((link, index) => (
                                                        <li key={index}>
                                                            <a href={link.url}>
                                                                <i className="fa fa-caret-right" aria-hidden="true" />
                                                                {link.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <ul>
                                                    {footerData.quickLinks.slice(5).map((link, index) => (
                                                        <li key={index}>
                                                            <a href={link.url}>
                                                                <i className="fa fa-caret-right" aria-hidden="true" />
                                                                {link.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-footer">
                                        <h2>{footerData.openHours.title}</h2>
                                        <p>{footerData.openHours.description}</p>
                                        <ul className="time-sidual">
                                            {footerData.openHours.hours.map((hour, index) => (
                                                <li className="day" key={index}>
                                                    {hour.day} <span>{hour.time}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-footer">
                                        <h2>{footerData.newsletter.title}</h2>
                                        <p>{footerData.newsletter.description}</p>
                                        <form
                                            action={footerData.newsletter.formAction}
                                            method="get"
                                            target="_blank"
                                            className="newsletter-inner"
                                        >
                                            <input
                                                name="email"
                                                placeholder="Email Address"
                                                className="common-input"
                                                required
                                                type="email"
                                            />
                                            <button className="button">
                                                <i className="icofont icofont-paper-plane" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="copyright-content">
                                        <p>
                                            © Copyright {footerData.copyright.year} | {footerData.copyright.text}{" "}
                                            <a
                                                href={footerData.copyright.link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {footerData.copyright.link.text}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
