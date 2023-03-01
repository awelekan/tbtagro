import mongoose from 'mongoose';


const productSchema = mongoose.Schema(
    {
title: { type: String, required: true, unique: true },
     slug:{ type: String, required: true, unique: true },
        moreLove: { type: Boolean, required: true, unique: true },
        id: { type: Number, required: true },
        price: { type: Number, required: true },
        tbtprice:{ type: Number, required: true },
        desc: { type: String, required: true, unique: true },
        images: [
            String
        ],
        totalSell: { type: Number, required: true },
        gallery: [
           { type: String, required: true, unique: true },
            { type: String, required: true, unique: true },
           { type: String, required: true, unique: true }
        ],
        condition: { type: String, required: true },
        seller: { type: String, required: true },
        category:{ type: String, required: true },
        featured: { type: Boolean, required: true, unique: true },
        trending: { type: Boolean, required: true, unique: true },
        discount: {
            banner: { type: String, required: true },
            percentage: { type: Number, required: true },
            expireDate: { type: String, required: true, unique: true },
            isActive: { type: Boolean, required: true, unique: true }
        },
        weight: { type: Number, required: true },
        tags: { type: String, required: true },
        quantity: { type: Number, required: true },
        stock: { type: Number, required: true },
       review: { type: Number, required: true },
        rating: { type: Number, required: true },
        ratingScore: { type: Number, required: true },
        
       },
    {
        timestamp: true
    }
);

export default mongoose.models.Product || mongoose.model('Product', productSchema);

