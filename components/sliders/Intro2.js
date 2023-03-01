import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Intro2 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true,
                }}
                
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
                <SwiperSlide>
                    <div
                        className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-3.png)",
                        }}
                    >

                        <div
                        className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-1.png)",
                        }}
                    >
                        <div className="slider-content">
                            <h1 className="display-2 mb-40">
                                Shop the Best
                                <br />
                                Seedling Deals
                            </h1>
                            <button className="button-slide">
                              Shop Now
                                </button>
                                 
                            </div>
                             
                        </div>
                         
                    </div>
                    <div className="display-9 ">
                        <div className="text-12">
                            SUBMIT REQUEST FOR QUOTATION <br />
                            <a href="#">I'm a Buyer</a>
                            </div>
                               <div className="text-11">
                            VIEW REQUEST FOR QUOTATION <br />
                            <a href ="#">I'm a Seller</a>
                               
                               </div>
                
                                 </div> 
                </SwiperSlide>
               
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </>
    );
};

export default Intro2;
