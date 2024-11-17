import React from 'react';

const Appointment = () => {
    return (
        <div>
            <section className="appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                                <img src="img/section-img.png" alt="Section Image" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <form className="form" action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="name" type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option value="">Department</option>
                                                <option value="cardiac">Cardiac Clinic</option>
                                                <option value="neurology">Neurology</option>
                                                <option value="dentistry">Dentistry</option>
                                                <option value="gastroenterology">Gastroenterology</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option value="">Doctor</option>
                                                <option value="doctor1">Dr. Akther Hossain</option>
                                                <option value="doctor2">Dr. Dery Alex</option>
                                                <option value="doctor3">Dr. Jovis Karon</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Date" id="datepicker" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Write Your Message Here....."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-4 col-12">
                                        <div className="form-group">
                                            <div className="button">
                                                <button type="submit" className="btn">Book An Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <p>( We will confirm by a Text Message )</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="appointment-image">
                                <img src="img/contact-img.png" alt="Appointment Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletter section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="subscribe-text">
                                <h6>Sign up for newsletter</h6>
                                <p>Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="subscribe-form">
                                <form
                                    action="mail/mail.php"
                                    method="get"
                                    target="_blank"
                                    className="newsletter-inner"
                                >
                                    <input
                                        name="EMAIL"
                                        placeholder="Your email address"
                                        className="common-input"
                                        onFocus={(e) => (e.target.placeholder = '')}
                                        onBlur={(e) => (e.target.placeholder = 'Your email address')}
                                        required
                                        type="email"
                                    />
                                    <button className="btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;
