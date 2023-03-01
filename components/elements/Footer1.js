import React from 'react'
import Layout from '../layout/Layout'

function Footer1() {
  return (
    <div>
      <footer className="main">
                <div className="container d-flex quotation-1">
                <h2 className=" icon-box-title mb-2">
               Request for Quotation </h2> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <p className=" quotation-13"> Get customised quotes quickly</p>
              
                </div>
             
                <section className="newsletter mb-15  wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="row">
                            <div className="">
                                
                                <div className="container row">
                                    <div className="slider-content1 col-lg-2-5">
                                        
                                    <img
                                        src="/assets/imgs/banner/banner-9.png" 
                                       
                                        alt=""
                                        />
                                         <div className=" ">
                            <h1 className="display-3">
                                Global Sourcing 
                                <br />
                                Marketplace
                            </h1>
                            <button className="button-slide-1">
                              Learn More
                                </button>
                                 
                            </div>
                                        </div>
                                    <div className="quotation-12 col-lg-3-5">
                                        <div className="">
                                        <h2 className="mb-2">
                                            One Request, <br />
                                            Multiple Quotes
                                        </h2>
                                        <form className="form-subcriber ">
                                            <input
                                                type="text"
                                                placeholder="Enter Product Name"
                                            />
                                            <div className="quotation1"></div>
                                            <div className="d-flex">
                                            <input
                                                type="text"
                                                placeholder="Quantity"
                                            /> <p>   </p>
                                             <input
                                                type="number"
                                                placeholder="Kg"
                                            />
                                            </div>
                                             <div className=""></div>
                                            <button className="quotation1 btn" type="submit">
                                              <strong> Request For Quotation </strong> 
                                            </button>
                                        </form>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured  section-padding">
                    <div className="container">
                        <div className="d-flex">
                            <h2
                                className=" icon-box-title">Trade Services</h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className="quotation-13">TBT trade services help ensure that your purchases are safe, secured and protected. </p>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-1-4 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                                <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon1.png"
                                            alt=""
                                        />
                                    </div>
                                <div
                                    className="banner-left-icon align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Trade Assurance
                                        </h3>
                                        <p>ORDER PROTECTION</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-4 col-md-4 col-12 col-sm-6">
                                <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon2.png"
                                            alt=""
                                        />
                                    </div>
                                <div
                                    className="banner-left-icon  align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                   
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Payment
                                        </h3>
                                        <p>PAYMENT SOLUTION</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-4 col-md-4 col-12 col-sm-6">
                                <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon3.png"
                                            alt=""
                                    />
                                    
                                    </div>
                                <div
                                    className="banner-left-icon align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Inspection Solution
                                        </h3>
                                        <p>INSPECTION</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-4 col-lg-4 col-md-4 col-12 col-sm-6">
                                <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon4.png"
                                            alt=""
                                        />
                                    </div>
                                <div
                                    className="banner-left-icon align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Land, Ocean and Air Shipping
                                        </h3>
                                        <p className="">LOGISTICS SERVICES</p>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
              </section>
              </footer>
    </div>
  )
}

export default Footer1
