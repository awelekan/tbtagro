import Link from "next/link";
import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { fetchByCatagory } from "../../redux/action/product";

SwiperCore.use([Navigation]);

const TopRatedSlider = () => {
    const [discount, setDiscount] = useState([]);

    // console.log(discount);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        // With Category
        const allProducts = await fetchByCatagory("/static/product.json");

        // Discount
        const discountProduct = allProducts.filter(
            (item) => item.discount.isActive
        );

        setDiscount(discountProduct);
    };
    return (
        <div className="row">
            {discount.slice(0, 6).map((product, i) => (
                
            <figure className="col-lg-4 mb-15">
                        <div className="product-cart-wrap1 mb-30">
                        <Link href="/products/[slug]" as={`/products/${product.slug}`}>
                            <a>
                                <img src={product.images[0].img} alt="" />
                            </a>
                        </Link>
                            <div className="col-md-8 mb-0">
                                <div className="product-content-wrap1">
                                    <p className="product-category">
                                        {product.category}
                                    </p>
                        <h6>
                            <Link href="/products/[slug]" as={`/products/${product.slug}`}>
                                <a>{product.title}</a>
                            </Link>
                        </h6>
                        <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{ width: "90%" }}></div>
                            </div>
                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                            <h6>
                            <Link href="/products/[slug]" as={`/products/${product.slug}`}>
                                <a> By {product.vendor}</a>
                                        </Link>
                                        </h6>
                        <div className="product-price">
                            <span>${product.price} </span>
                            <span className="old-price">{product.oldPrice && `$ ${product.oldPrice}`}</span>
                        </div>
                            </div>
                            </div>
                                </div>
                        
                    </figure>
                   
                    
                    
               
            ))}
        </div>
    );
};


export default TopRatedSlider;
