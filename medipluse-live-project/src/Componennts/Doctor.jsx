import React from 'react'

const Doctors = () => {
    return (
        <div>
            <section className="Feautes section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Are Always Ready to Help You &amp; Your Family</h2>
                                <img src="img/section-img.png" alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            {/* Start Single features */}
                            <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont icofont-ambulance-cross" />
                                </div>
                                <h3>Emergency Help</h3>
                                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                            </div>
                            {/* End Single features */}
                        </div>
                        <div className="col-lg-4 col-12">
                            {/* Start Single features */}
                            <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont icofont-medical-sign-alt" />
                                </div>
                                <h3>Enriched Pharmecy</h3>
                                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                            </div>
                            {/* End Single features */}
                        </div>
                        <div className="col-lg-4 col-12">
                            {/* Start Single features */}
                            <div className="single-features last">
                                <div className="signle-icon">
                                    <i className="icofont icofont-stethoscope" />
                                </div>
                                <h3>Medical Treatment</h3>
                                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                            </div>
                            {/* End Single features */}
                        </div>
                    </div>
                </div>
            </section>
            <div id="fun-facts" className="fun-facts section overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Fun */}
                            <div className="single-fun">
                                <i className="icofont icofont-home" />
                                <div className="content">
                                    <span className="counter">3468</span>
                                    <p>Hospital Rooms</p>
                                </div>
                            </div>
                            {/* End Single Fun */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Fun */}
                            <div className="single-fun">
                                <i className="icofont icofont-user-alt-3" />
                                <div className="content">
                                    <span className="counter">557</span>
                                    <p>Specialist Doctors</p>
                                </div>
                            </div>
                            {/* End Single Fun */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Fun */}
                            <div className="single-fun">
                                <i className="icofont-simple-smile" />
                                <div className="content">
                                    <span className="counter">4379</span>
                                    <p>Happy Patients</p>
                                </div>
                            </div>
                            {/* End Single Fun */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Fun */}
                            <div className="single-fun">
                                <i className="icofont icofont-table" />
                                <div className="content">
                                    <span className="counter">32</span>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                            {/* End Single Fun */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Doctors
