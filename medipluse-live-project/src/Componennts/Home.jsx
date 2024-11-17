import React from 'react'

const Home = () => {
    return (
        <div>
            <section className="slider">
                <div className="hero-slider">
                    {/* Start Single Slider */}
                    <div className="single-slider" style={{ backgroundImage: 'url("img/slider2.jpg")' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Single Slider */}
                    {/* Start Single Slider */}
                    <div className="single-slider" style={{ backgroundImage: 'url("img/slider.jpg")' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">About Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Start End Slider */}
                    {/* Start Single Slider */}
                    <div className="single-slider" style={{ backgroundImage: 'url("img/slider3.jpg")' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">Conatct Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Single Slider */}
                </div>
            </section>
            <section className="schedule">
                <div className="container">
                    <div className="schedule-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 ">
                                {/* single-schedule */}
                                <div className="single-schedule first">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="fa fa-ambulance" />
                                        </div>
                                        <div className="single-content">
                                            <span>Lorem Amet</span>
                                            <h4>Emergency Cases</h4>
                                            <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                                            <a href="#">LEARN MORE<i className="fa fa-long-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                {/* single-schedule */}
                                <div className="single-schedule middle">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-prescription" />
                                        </div>
                                        <div className="single-content">
                                            <span>Fusce Porttitor</span>
                                            <h4>Doctors Timetable</h4>
                                            <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                                            <a href="#">LEARN MORE<i className="fa fa-long-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-12">
                                {/* single-schedule */}
                                <div className="single-schedule last">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-ui-clock" />
                                        </div>
                                        <div className="single-content">
                                            <span>Donec luctus</span>
                                            <h4>Opening Hours</h4>
                                            <ul className="time-sidual">
                                                <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                                <li className="day">Saturday <span>9.00-18.30</span></li>
                                                <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                                            </ul>
                                            <a href="#">LEARN MORE<i className="fa fa-long-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Home
