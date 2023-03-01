import React from "react";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { server } from "../../config/index";
import db from "../../util/db";
import { findProductIndex } from "../../util/util";
import Product from "../../models/Product"


const ProductId = ({ product }) => {
    return (
        <>
        <Layout parent="Home" sub="Shop">
            <div className="container">
                <ProductDetails product={product} />
            </div>
        </Layout>
        </>
    );
};



ProductId.getInitialProps = async (params) => {
    // Find the product in the database by slug
    await db.connect();
 const product = await Product.findOne({ slug: params.query.slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };

    const request = await fetch(`${server}/static/product.json`);
    const data = await request.json();

    const index = findProductIndex(data, params.query.slug);
    // console.log(params);

    return { product: data[index] };
};

export default ProductId;





