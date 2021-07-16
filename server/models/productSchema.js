import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title:String,
    price:Number,
    description: String,
    category:String,
    image:String,
    createdAt:{
        type : Date,
        default: new Date()
    },
    updatedAt:{
        type : Date,
        default: new Date()
    },
});

const ProductMessage = mongoose.model('ProductMessage', productSchema);

export default ProductMessage;