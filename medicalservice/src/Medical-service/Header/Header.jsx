import React, { Component } from 'react';
import headerData from './headerData.json'; // Adjust the path as necessary

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 col-12">
                                <ul className="top-link">
                                    {headerData.topLinks.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.url}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-7 col-12">
                                <ul className="top-contact">
                                    {headerData.topContacts.map((contact, index) => (
                                        <li key={index}>
                                            <i className={contact.icon} />
                                            {contact.mailto ? (
                                                <a href={`mailto:${contact.text}`}>{contact.text}</a>
                                            ) : (
                                                contact.text
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-inner">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="img/logo.png" alt="#" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-9 col-12">
                                    <div className="main-menu">
                                        <nav className="navigation">
                                            <ul className="nav menu">
                                                {headerData.menuItems.map((item, index) => (
                                                    <li className={item.dropdown ? 'active' : ''} key={index}>
                                                        <a href={item.url}>
                                                            {item.name} {item.dropdown && <i className="icofont-rounded-down" />}
                                                        </a>
                                                        {item.dropdown && (
                                                            <ul className="dropdown">
                                                                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                                    <li key={dropdownIndex}>
                                                                        <a href={dropdownItem.url}>{dropdownItem.name}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-12">
                                    <div className="get-quote">
                                        <a href="appointment.html" className="btn">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
