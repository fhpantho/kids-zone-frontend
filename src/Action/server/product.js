'use server'
import { dbConnect, collections } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

// getting all products
export const getProducts = async () => {
    const productCollection = await dbConnect(collections.PRODUCTS);
    const products = await productCollection.find().toArray();

    // convert ObjectId → string
    const plainProducts = products.map(product => ({
        ...product,
        _id: product._id.toString()
    }));

    return plainProducts;
}

// getting single product
export const getSingleProduct = async (id) => {
    if (!ObjectId.isValid(id)) {
        return {};
    }

    const productCollection = await dbConnect(collections.PRODUCTS);
    const product = await productCollection.findOne({ _id: new ObjectId(id) });

    if (!product) return {};

    return {
        ...product,
        _id: product._id.toString()
    };
}