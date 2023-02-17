import CategoryTab from "../components/ecommerce/categoryTab";
import FeatchDeals from "../components/ecommerce/fetchDeals";
import Layout from "../components/layout/Layout";
import CategoryProduct from "../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "../components/ecommerce/Filter/PriceRangeSlider";
import SizeFilter from "../components/ecommerce/Filter/SizeFilter";
import VendorFilter from "../components/ecommerce/Filter/VendorFilter";
import Banner5 from "../components/elements/Banner5";
import NewArrival2 from "../components/sliders/NewArrival2";
import Bottom from "../components/elements/Bottom";
import IntroPopup from "../components/elements/IntroPopup";
import CategorySlider2 from '../components/sliders/Category2';
import Intro2 from "../components/sliders/Intro2";
import Link from "next/link"
import TopRatedSlider from "../components/sliders/TopRated";
import TrendingSlider from "../components/sliders/Trending2";
import BestSellerSlider from "../components/sliders/BestSeller";
import Footer1 from "../components/elements/Footer1";

function Test() {
    return (
        <>
            <IntroPopup />
            <Layout noBreadcrumb="d-none" headerStyle="header-style-1">
                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4-5">
                            <section className="home-slider position-relative mb-30">
                                <div className="home-slide-cover mt-30">
                                    <Intro2/>
                                </div>
                            </section>
                        </div>
                        
                        <div className="col-lg-1-5 primary-sidebar sticky-sidebar pt-30">
                            <div className="sidebar-widget widget-category-2 mb-30">
                                <h5 className="section-title style-1 mb-30">
                                    Products
                                </h5>
                                <CategoryProduct />
                            </div>
                            </div>
                        
                        <div className="row flex-row-reverse">
                            <div className="col-lg-5-5">
                            <section className="product-tabs section-padding position-relative">
                                <CategoryTab/>
                            </section>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                <div className="row">
                <div className="col-lg-2-5 col-xl-3 col-lg-3 col-md-12 mb-sm-3 mb-md-0 wow animate__animated animate__fadeInUp">  
                       

                    <h3 className="">New Arrival</h3>
                     <section className="section-padding">
                               
                                <NewArrival2 />
                            </section>
                            </div>
                        
                        <div className="col-lg-3-5 col-xl-3 col-lg-3 col-md-12 mb-sm-3 mb-md-0 wow animate__animated animate__fadeInUp">  
                        <h3 className="">Top Rated</h3>    
                        <section className="row section-padding">
                                                  
                                <TopRatedSlider/>
                               
                            </section>
                             </div>
                         </div>      
                    </div>                                                                     
                                        
                 
                <div className="container">
                <div className="row">
                <div className="col-lg-2-5 col-lg-2 mb-0 col-xl-2 col-lg-3 col-md-6 mb-sm-2 mb-md-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">  
                       

                    <h3 className="">Top Selling</h3>
                     <section className="section-padding">
                               
                                <BestSellerSlider />
                            </section>
                            </div>
                        
                        <div className="row col-lg-3-5 mb-0 col-xl-3 col-lg-3 col-md-6 mb-sm-2 mb-md-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">  
                        <h3 className="">Trending Products</h3>    
                        <section className="section-padding">
                                                  
                                <TrendingSlider/>
                               
                            </section>
                             </div>
                         </div>      
                    </div>           
               <Footer1/>
            </Layout>
        </>
    );
}

export default Test;
